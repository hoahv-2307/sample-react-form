import React, { Component } from "react";

export default class BotScript extends Component {
  componentDidMount() {
    const botScript = document.createElement("script");
    botScript.id = "efo-script";
    botScript.src = "https://sunbotchandev.blob.core.windows.net/stgnode/js/faapp_ls.js";
    botScript.onload = () => {
      window.efoInit("658a924c78e3fd12873a43f4");
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
