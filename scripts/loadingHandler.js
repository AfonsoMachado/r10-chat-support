const chatExists = setInterval(() => {
  const chat = document.querySelector(
    'div[style*="visibility: visible;"]'
  );
  if (chat) {
    const loadingElement = document.getElementById("loading");
    if (loadingElement) loadingElement.style.display = "none";
    clearInterval(chatExists);
  }
}, 10);