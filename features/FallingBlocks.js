import { registerWhen } from "../../SBO/utils/variables";
import mmSettingsData from "../settings";



register("command", () => {
    mmSettingsData.hideFallingBlocks = mmSettingsData.hideFallingBlocks ? false : true;
    mmSettingsData.save();
    ChatLib.chat(`&6&l[Mm] Hiding Falling Blocks: ${mmSettingsData.hideFallingBlocks ? "&aEnabled" : "&cDisabled"}`);
}).setName("hideFallingBlocks").setAliases("hfb").setAliases("hideFallingBlock");

register("command", () => {
    ChatLib.chat(`&6&l[Mm] Hiding Falling Blocks: ${mmSettingsData.hideFallingBlocks}`);
}).setName("hideFallingBlocksstate").setAliases("hfbs").setAliases("hideFallingBlockstate");

registerWhen(register('renderEntity', (entity, pos, ticks, event) => { // Hide falling blocks (like twinclaws, f7 floor when phase 3 start)
    if (mmSettingsData.hideFallingBlocks) { 
    cancel(event)
    }
}).setFilteredClass(Java.type("net.minecraft.entity.item.EntityFallingBlock").class), () => mmSettingsData.hideFallingBlocks)
