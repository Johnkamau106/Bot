// YourBotArmy.js
import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ yourArmy, removeBotFromArmy, dischargeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-cards">
        {yourArmy.map((bot) => (
          <div key={bot.id} className="bot-wrapper">
            <BotCard bot={bot} onClick={removeBotFromArmy} />
            <button
              className="discharge-button"
              onClick={() => dischargeBot(bot.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
