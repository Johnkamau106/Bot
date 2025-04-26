// BotCollection.js
import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, addBotToArmy }) {
  return (
    <div>
      <h2>Available Bots</h2>
      <div className="bot-cards">
        {bots.map((bot) => (
          <div key={bot.id}>
            <BotCard bot={bot} />
            <button onClick={() => addBotToArmy(bot)}>Add to Army</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
