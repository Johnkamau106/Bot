// App.js
import React, { useState, useEffect } from 'react';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';
import './App.css';


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
        {filteredBots.length === 0 && <p>No bots available.</p>}
        <BotCollection bots={filteredBots} addBotToArmy={addBotToArmy} />
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
