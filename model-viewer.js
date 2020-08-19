const mvScript = document.createElement("script");
const mvLegacyScript = document.createElement("script");
mvScript.onload = function () {
  alert("Script loaded and ready");
  // window.makeButton = () => {

  // }
  const modelViewerElement = document.createElement("model-viewer");
  modelViewerElement.src =
    "https://modelviewer.dev/shared-assets/models/Astronaut.glb";
  modelViewerElement.setAttribute(
    "ios-src",
    "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
  );
  // modelViewerElement.setAttribute("camera-controls", "");
  modelViewerElement.setAttribute("ar", "");
  modelViewerElement.style = "position: relative; left: -9999px; ";
  const arButton = document.createElement("button");
  arButton.slot = "ar-button";
  arButton.textContent = "Activate AR";
  arButton.style =
    "background-color: white; border-radius: 4px; border: none; position: relative; left: 9999px; ";
  modelViewerElement.appendChild(arButton);
  document.getElementsByTagName("body")[0].appendChild(modelViewerElement);

};
mvScript.src =
  "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
mvScript.type = "module";
document.getElementsByTagName("head")[0].appendChild(mvScript);
document.getElementsByTagName("head")[0].appendChild(mvLegacyScript);
