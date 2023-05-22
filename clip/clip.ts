import { HTMLClip } from "@donkeyclip/motorcortex";
import css from "./clip.css";
import html from "./clip.html";
import { fadeOut } from "./effects/fadeOut";
import { scaleBig } from "./effects/scaleBig";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";

import { loadPlugin } from "@donkeyclip/motorcortex";
import BackgroundsDefinition from "@donkeyclip/motorcortex-backgrounds";
const Plugin = loadPlugin(BackgroundsDefinition);
const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "470px",
    height: "200px",
  },
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Inter:wght@500;900&display=swap",
    },
  ],
});



export { clip };
