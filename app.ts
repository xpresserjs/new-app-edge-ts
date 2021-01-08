import xpresser = require("xpresser");

/**
 * Boot Xpresser with your config
 *
 * Get config from config.ts
 * See https://xpresserjs.com/configuration/
 */
import config from "./config"

// Start Xpresser
const $ = xpresser.init(config, {exposeDollarSign: false});

// Initialize Typescript for this project.
$.initializeTypescript(__filename);

// Boot
$.boot();