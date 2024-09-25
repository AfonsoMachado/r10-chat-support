
function chatIframeAsMobile() {
  const chatIframeExists = setInterval(() => {
    const iframe = document.querySelector(
      'iframe[title="Janela de mensagens"]'
    );
    if (iframe) {
      iframe.setAttribute("style", "");
      iframe.style.position = "fixed";
      iframe.style.boxShadow = "rgba(23, 73, 77, 0.15) 0px 20px 30px";
      iframe.style.zIndex = "999999";
      iframe.style.borderRadius = "0px";
      iframe.style.transformOrigin = "center bottom";
      iframe.style.border = "0px";
      iframe.style.height = "100%";
      iframe.style.maxHeight = "none";
      iframe.style.inset = "auto 0px 0px";
      iframe.style.width = "100%";
      iframe.style.transition =
        "transform 445ms cubic-bezier(0.76, 0, 0.16, 1) 300ms, opacity 295ms cubic-bezier(0.76, 0, 0.16, 1) 360ms, height linear";
      iframe.style.transform = "scale(1) translateY(0px)";
      iframe.style.filter = "brightness(100%)";
      iframe.style.opacity = "1";
      iframe.style.pointerEvents = "auto";
      iframe.style.marginBottom = "0px";

      const button = document.querySelector('iframe[title="Janela de mensagens"]');

      const closeButton = document.querySelector('button[data-garden-id="buttons.icon_button"]');
      console.log(button);
      if (closeButton) closeButton.remove();

      clearInterval(chatIframeExists);
    }
  }, 10);
}

document.addEventListener("DOMContentLoaded", () => {
  chatIframeAsMobile();
});