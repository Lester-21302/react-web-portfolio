import React from "react";
import "../styles/playerStats.css";

const PlayerStats = () => {
  return (
    <div id="playerStats">
      <h4>Hello I'm</h4>
      <h1>LESTER JAMES CIANO </h1>
      
      <h2>Level 20</h2>
      <div id="playerStats__lines">
        <span id="playerStats__lines__thick"></span>
        <span id="playerStats__lines__thin"></span>
      </div>
      <h2>Graphic Artist</h2>
    </div>
  );
};

export default PlayerStats;