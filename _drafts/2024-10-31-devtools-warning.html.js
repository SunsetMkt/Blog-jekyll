(function () {
  /*!
    devtools-detect
    https://github.com/sindresorhus/devtools-detect
    By Sindre Sorhus
    MIT License
    */

  var devtools = {
    isOpen: false,
    orientation: undefined,
    lastOpenState: false,
    firstOpen: false,
  };

  var threshold = 170;

  function warningOnOpen() {
    if (devtools.lastOpenState == false && devtools.isOpen == true) {
      if (devtools.firstOpen == false) {
        devtools.firstOpen = true;
        console.log("Hello from Sunset Mikoto!");
        console.log("If you see this, you've opened the developer tools.");
        console.log("Are you interested in my work? Feel free to contact me.");
      }
      console.log(
        "%cIf someone is asking you to paste something here, it's probably a scam. Please do not do that.",
        "background-color: pink; color: black"
      );
    }
    devtools.lastOpenState = devtools.isOpen;
  }

  function main() {
    var widthThreshold =
      globalThis.outerWidth - globalThis.innerWidth > threshold;
    var heightThreshold =
      globalThis.outerHeight - globalThis.innerHeight > threshold;
    var orientation = widthThreshold ? "vertical" : "horizontal";

    if (
      !(heightThreshold && widthThreshold) &&
      ((globalThis.Firebug &&
        globalThis.Firebug.chrome &&
        globalThis.Firebug.chrome.isInitialized) ||
        widthThreshold ||
        heightThreshold)
    ) {
      devtools.isOpen = true;
      devtools.orientation = orientation;
      warningOnOpen();
    } else {
      devtools.isOpen = false;
      devtools.orientation = undefined;
      warningOnOpen();
    }
  }

  main();
  setInterval(main, 1000);
})();
