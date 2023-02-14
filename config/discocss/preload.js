module.exports = () => {
  const fs = require("fs");
  const electron = require("electron");
  const confDir = "/home/art3mistical/.config/discocss";
  const cssFile = "/home/art3mistical/.config/discocss/custom.css";

  function reload() {
    const css = fs.readFileSync(cssFile, { encoding: "utf-8" });

    electron.webFrame.executeJavaScript(`
      (() => {
        let loaded = false;
        function load() {
          if (loaded) return;

          const disco = document.createElement("style");
          disco.id = "disco";
          disco.innerHTML = ${JSON.stringify(css)};

          document.getElementById('disco')?.remove();
          document.head.appendChild(disco);

          loaded = true;
        }

        window.addEventListener("load", () => {
          load();
        });
        try {
          load();
        } catch (e) {}
      })();
    `);
  }

  reload();
  fs.watch(confDir, {}, () => reload());
};

module.exports.mw = (mainWindow) => {
  mainWindow.setBackgroundColor("#00000000");
};

module.exports.mo = (options) => {
  options.transparent = true;
  if (process.platform === "linux") {
    options.frame = true;
  }
};
