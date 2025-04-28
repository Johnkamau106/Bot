// App.js
import React, { useState, useEffect } from 'react';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [yourArmy, setYourArmy] = useState([]);
  const [filter, setFilter] = useState('All');

  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch('http://localhost:8001/bots')
    .then(response => response.json())
    .then(data => {
      setBots(data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching bots:', error);
      setLoading(false);
    });
}, []);



  const addBotToArmy = (bot) => {
    if (!yourArmy.some((armyBot) => armyBot.id === bot.id)) {
      setYourArmy([...yourArmy, bot]);
    }
  };

  const removeBotFromArmy = (bot) => {
    setYourArmy(yourArmy.filter((armyBot) => armyBot.id !== bot.id));
  };

  const dischargeBot = (botId) => {
    if (window.confirm("Are you sure you want to discharge this bot?")) {
      fetch(`http://localhost:8001/bots/${botId}`, {
        method: 'DELETE',
      }).then(() => {
        setYourArmy(yourArmy.filter((bot) => bot.id !== botId));
        setBots(bots.filter((bot) => bot.id !== botId));
      });
    }
  };

  const filteredBots = filter === 'All'
    ? bots
    : bots.filter((bot) => bot.bot_class === filter);

  return (
    <div>
      <h1>Bot Battlr</h1>

      {/* Filter UI */}
      <div>
        <label htmlFor="class-filter">Search Bot by Class: </label>
        <select
          id="class-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Assault">Assault</option>
          <option value="Defender">Defender</option>
          <option value="Support">Support</option>
          <option value="Medic">Medic</option>
          <option value="Tank">Tank</option>
        </select>
      </div>

      <div className="bot-collection">
        {loading ? <p>Loading bots...</p> : 
          (filteredBots.length === 0 ? <p>No bots available.</p> : <BotCollection bots={filteredBots} addBotToArmy={addBotToArmy} />)
        }
      </div>

      <div className="your-bot-army">
        {yourArmy.length === 0 && <p>Your bot army is empty.</p>}
        <YourBotArmy
          yourArmy={yourArmy}
          removeBotFromArmy={removeBotFromArmy}
          dischargeBot={dischargeBot}
        />
      </div>
    </div>
  );
}

export default App;
