import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const test = (window) => {
  window.onload = () => {
    var script = document.createElement('script');
    script.id = 'oc_script';
    script.setAttribute('convid', 'O0va48KrTNXSnKCAzRlmmGVruFR2');
    script.async = 'true';
    script.src = 'https://static.optinchat.com/optinchat.js';
    document.body.appendChild(script);
  };
};

//<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="d98ad15a-d146-4557-b2ec-575e152077ed";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>

export default function OptinChat() {
  return (
    <BrowserOnly fallback={<span />}>
      {typeof window !== 'undefined' ? test(window) : undefined}
    </BrowserOnly>
  );
}
