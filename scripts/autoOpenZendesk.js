zE("messenger", "open");
zE("messenger:on", "close", function () {
  chatIframeAsMobile();
  zE("messenger", "open");
});