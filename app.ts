import {init} from "xpresser";

/**
 * Boot Xpresser with your config
 *
 * Get config from config.ts
 * See https://xpresserjs.com/configuration/
 */
import config = require("./config");

// Start Xpresser
const $ = init(config);

// Initialize Typescript for this project.
$.initializeTypescript(__filename);

// Boot
$.boot();
