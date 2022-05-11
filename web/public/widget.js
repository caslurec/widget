(() => {
  // src/util/widget.ts
  function openWidget() {
    if (document.body === null) {
      return false;
    }
    const doc = document.currentScript;
    const src = doc?.getAttribute("src");
    const theme = doc?.getAttribute("data-theme") ?? "0";
    const title = doc?.getAttribute("data-title") ?? "Deixe seu Feedback";
    const email = doc?.getAttribute("data-email") ?? "noreply@suaempresa.com";
    const whatsApp = doc?.getAttribute("data-whatsapp") ?? "";
    const open = doc?.getAttribute("data-open") ?? "true";
    const code = doc?.getAttribute("data-code") ?? "teste";
    if (!src) {
      return false;
    }
    let srcIframe = "";
    srcIframe = src.replace("/widget.js", "") + "/widget";
    srcIframe += `?theme=${theme}`;
    srcIframe += `&title=${title}`;
    srcIframe += `&email=${email}`;
    srcIframe += `&whatsapp=${whatsApp}`;
    srcIframe += `&open=${open}`;
    srcIframe += `&code=${code}`;
    srcIframe = encodeURI(srcIframe);
    console.log("importado widget de: ", srcIframe);
    if (code !== "demo") {
      console.log("code widget dev n\xE3o identificado");
    }
    let iFrame;
    let iFrameElement = document.getElementById("iframeWidget");
    if (!iFrameElement) {
      iFrame = document.createElement("iframe");
      iFrame.id = "iframeWidget";
      iFrame.title = "iframe Widget";
      iFrame.setAttribute("style", "position: fixed; right: 20px; bottom: 20px; border:0px;");
      document.body.appendChild(iFrame);
      iFrameElement = document.getElementById("iframeWidget");
    }
    if (!iFrameElement) {
      console.log("element widget n\xE3o criado e/ou localizado!");
      return false;
    }
    iFrame = iFrameElement;
    iFrame.src = srcIframe;
    iFrame.onload = function() {
      if (window.addEventListener) {
        window.addEventListener("message", OnMessage, false);
      }
    };
  }
  openWidget();
  function OnMessage(e) {
    let width = e.data.width;
    let height = e.data.height;
    if (width < 400) {
      width = 400;
      if (window.screen.width < width) {
        width = window.screen.width;
      }
    }
    const iFrameElement = document.getElementById("iframeWidget");
    if (!iFrameElement) {
      console.log("element widget n\xE3o foi localizado!");
      return false;
    }
    iFrameElement.style.width = width + "px";
    iFrameElement.style.height = height + "px";
  }
})();
