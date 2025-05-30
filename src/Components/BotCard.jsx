// BotCard.js
import React from 'react';

function BotCard({ bot, onClick }) {
  return (
    <div className="bot-card" onClick={() => onClick?.(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
    </div>
  );
}

export default BotCard;
