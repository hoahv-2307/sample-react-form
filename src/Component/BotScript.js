import React, { Component } from "react";

export default class BotScript extends Component {
  componentDidMount() {
    const botScript = document.createElement("script");
    botScript.id = "efo-script";
    botScript.src = "http://127.0.0.1:5000/js/faapp.js";
    botScript.onload = () => {
      window.efoInit("65702f997bd9e4343b1f23b6", 0, 1);
    };
    document.body.appendChild(botScript);
  }
  render() {
    return (
      <div>
        <div id="botchan" />
      </div>
    );
  }
}
