// BotCollection.js
import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, addBotToArmy }) {
  return (
    <div>
      <h2>Bot~ Collection</h2>
      <div className="bot-cards">
        {bots.map((bot) => (
          <div key={bot.id}>
            <BotCard bot={bot} onClick={addBotToArmy} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
