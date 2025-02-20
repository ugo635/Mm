import { registerWhen } from "../../SBO/utils/variables";
import cmSettingsData from "../settings";



register("command", () => {
    cmSettingsData.hideFallingBlocks = cmSettingsData.hideFallingBlocks ? false : true;
    cmSettingsData.save();
    ChatLib.chat(`&6&l[Cm] Hiding Falling Blocks: ${cmSettingsData.hideFallingBlocks ? "&aEnabled" : "&cDisabled"}`);
}).setName("hideFallingBlocks").setAliases("hfb").setAliases("hideFallingBlock");

register("command", () => {
    ChatLib.chat(`&6&l[Cm] Hiding Falling Blocks: ${cmSettingsData.hideFallingBlocks}`);
}).setName("hideFallingBlocksstate").setAliases("hfbs").setAliases("hideFallingBlockstate");

registerWhen(register('renderEntity', (entity, pos, ticks, event) => { // Hide falling blocks (like twinclaws, f7 floor when phase 3 start)
    if (cmSettingsData.hideFallingBlocks) { 
    cancel(event)
    }
}).setFilteredClass(Java.type("net.minecraft.entity.item.EntityFallingBlock").class), () => cmSettingsData.hideFallingBlocks)
