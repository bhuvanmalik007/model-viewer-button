const modelViewerScript = document.createElement("script");
const modelViewerLegacyScript = document.createElement("script");
modelViewerScript.src =
  "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
modelViewerScript.type = "module";
document.getElementsByTagName("head")[0].appendChild(modelViewerScript);
document.getElementsByTagName("head")[0].appendChild(modelViewerLegacyScript);

modelViewerScript.onload = function () {
  window.makeButton = (androidSrc, iosSrc, div) => {
    const modelViewerElement = document.createElement("model-viewer");
    modelViewerElement.src = androidSrc;
    modelViewerElement.setAttribute("ios-src", iosSrc);
    modelViewerElement.setAttribute("ar", "");
    modelViewerElement.style = "position: relative; left: -9999px; ";
    const arButton = document.createElement("button");
    arButton.slot = "ar-button";
    arButton.textContent = "Activate AR";
    arButton.style =
      "background-color: white; border-radius: 4px; border: none; position: relative; left: 9999px; ";
    modelViewerElement.appendChild(arButton);
    document.getElementById(div).appendChild(modelViewerElement);
  };
  const scripts = document.getElementsByTagName("script");
  var lastScript = scripts[scripts.length - 1];
  var scriptName = lastScript;
  window.makeButton(
    scriptName.getAttribute('data-androidSrc'),
    scriptName.getAttribute('data-iosSrc'),
    scriptName.getAttribute('data-div')
  );
  // window.makeButton(
  //   "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
  //   "https://modelviewer.dev/shared-assets/models/Astronaut.usdz",
  //   "model-viewer-div"
  // );
};
