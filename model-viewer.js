// Adding essential Model-Viewer scripts
const modelViewerScript = document.createElement("script");
const modelViewerLegacyScript = document.createElement("script");

modelViewerScript.src =
  "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
modelViewerScript.type = "module";
modelViewerLegacyScript.src =
  "https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js";
document.getElementsByTagName("head")[0].appendChild(modelViewerScript);
document.getElementsByTagName("head")[0].appendChild(modelViewerLegacyScript);

// Creating button when the above Model-Viewer scripts have loaded
modelViewerScript.onload = function () {
  // makeButton function with all the logic
  window.makeButton = (androidSrc, iosSrc, divContainer) => {
    const modelViewerElement = document.createElement("model-viewer");
    modelViewerElement.src = androidSrc;
    modelViewerElement.setAttribute("ios-src", iosSrc);
    modelViewerElement.setAttribute("ar", "");
    modelViewerElement.setAttribute("quick-look-browsers", "safari chrome");


    /* Important! Below css is essential to show the button and hide the viewer */
    modelViewerElement.style = "position: relative; left: -9999px; ";

    const arButton = document.createElement("button");
    arButton.type = "button";
    arButton.slot = "ar-button";
    arButton.textContent = "Activate AR"; // Change button text here

    /* Important! Below css is essential to show the button and hide the viewer */
    const fixedStyles = "position: absolute; left: 9999px; ";

    // Change/Add button styling below
    let variableStyles =
      "font-size: 30px; text-align: center; background-color: YellowGreen; padding: 15px 32px; border-radius: 4px; border: none;";

    arButton.style = fixedStyles + variableStyles;

    modelViewerElement.appendChild(arButton);
    document.getElementById(divContainer).appendChild(modelViewerElement);
  };

  const scripts = document.getElementsByTagName("script");
  let lastScript = scripts[scripts.length - 1];
  let scriptName = lastScript;

  // makeButton function getting called automatically below on script load
  // Function is also attached to Window interface so it can be called programmatically anywhere on an event if needed instead of automatic creation on page load.
  window.makeButton(
    scriptName.getAttribute("data-androidSrc"),
    scriptName.getAttribute("data-iosSrc"),
    scriptName.getAttribute("data-div")
  );

  // Comment above function call and Uncomment the function call below to provide parameters in JS code itself insted of HTML.
  /* Important: Remove all attributes(ex: data-div) other than src in script tag inside HTML to use below code */

  // window.makeButton(
  //   "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
  //   "https://modelviewer.dev/shared-assets/models/Astronaut.usdz",
  //   "model-viewer-div"
  // );
};
