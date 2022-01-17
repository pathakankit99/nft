import React from "react";
import discord from "./discord2.png"
import twitter from "./twitter2.png";
function Social() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        display: "flex",
        padding: "20px",
        justifyContent: "space-between",
        zIndex:900
      }}
    >
      <div className="icons">
        <a target="_blank" href="https://discord.gg/ninjaapedojo">
          <img src={discord} alt="discord" />
        </a>
      </div>
      <div className="icons">
        <a target="_blank" href="https://twitter.com/NinjaApeDojo_">
          <img src={twitter} alt="twitter" />
        </a>
      </div>
    </div>
  );
}

export default Social;
