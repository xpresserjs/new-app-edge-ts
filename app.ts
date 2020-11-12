import {init} from "xpresser";
import config from "./config"

// Start Xpresser
const $ = init(config, {exposeDollarSign: false});

// Initialize Typescript for this project.
$.initializeTypescript(__filename);

// Boot
$.boot();