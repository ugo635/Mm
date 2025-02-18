// Must import other files here for them to work properly 
// OR 
// import this file in the other files
import "./settings.js";
import "./features/Features.js";
import "./features/inv.js";
import "./features/Diana.js";
import "./features/Stash.js";
import "./features/FallingBlocks.js";
import "./features/Mining.js";
import "./features/Party.js";

register("gameLoad", () => {
    ChatLib.chat("&6&l[My Module] &r&7Module Loaded");
});
