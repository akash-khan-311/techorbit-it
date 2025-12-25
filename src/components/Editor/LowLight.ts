import { createLowlight } from "lowlight";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import json from "highlight.js/lib/languages/json";
import css from "highlight.js/lib/languages/css";
import html from "highlight.js/lib/languages/xml";

export const lowlight = createLowlight();

// register languages
lowlight.register("javascript", javascript);
lowlight.register("typescript", typescript);
lowlight.register("json", json);
lowlight.register("css", css);
lowlight.register("html", html);
