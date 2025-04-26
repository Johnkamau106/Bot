// YourBotArmy.js
import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ yourArmy, removeBotFromArmy, dischargeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-cards">
        {yourArmy.map((bot) => (
          <div key={bot.id}>
            <BotCard bot={bot} />
            <button onClick={() => removeBotFromArmy(bot)}>Remove from Army</button>
            <button onClick={() => dischargeBot(bot.id)}>Discharge</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
