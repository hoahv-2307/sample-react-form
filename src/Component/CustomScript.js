
import React from 'react';


export default class UkokkeiScript extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.innerHTML = `window.ukLpAsyncInit = function() {
      UK.initLp({
        cart_domain: "https://next-demo.tamago-cart.com",
        lp_form_code: "noni001"
      });
    };
  
    (function(d, s, id) {
       var js, hjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;};
       js = d.createElement(s);
       js.async = true;
       js.id = id;
       js.src = "https://next-demo.tamago-cart.com/ukokkei-sdk.js";
       hjs.parentNode.insertBefore(js, hjs);
     }(document, "script", "ukokkei-sdk"));`;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div id="ukokkei-landing-page-container"></div>
    );
  }
}
