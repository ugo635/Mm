// Must import other files here for them to work properly 
// OR 
// import this file in the other files
// import "./features/Features.js";
// import "./features/inv.js";
import "./features/Diana.js";
// import "./features/Stash.js";
// import "./features/FallingBlocks.js";
import "./features/Mining.js";
import "./features/Party.js";
import mmSettingsData from "./settings";

register("gameLoad", () => {
    ChatLib.chat("&6&l[My Module] &r&7Module Loaded");
});

register("command", () => {
    mmSettingsData.openGUI()
}).setName("Mm")