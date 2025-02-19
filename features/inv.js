import { getplayername, formatTime, getDianaMayorTotalProfitAndOfferType, calcPercentOne, getBurrowsPerHour, getMobsPerHour, setTimeout } from "../../SBO/utils/functions";
import { registerWhen } from "../../SBO/utils/variables";
import mmSettingsData from "../settings";

register("command", () => {
    ChatLib.chat(mmSettingsData.printContainerClick);
    ChatLib.chat(mmSettingsData.printContainerOpen);
    ChatLib.chat(mmSettingsData.hideFallingBlocks);
}).setName("mysettings").setAliases("ms");


function readContainerItems() {
    const container = Player.getContainer();
    if (container == null) return;
    if (container.getName() == "container") return;
    const items = container.getItems();
    const containerSize = container.getSize();
    if (items.length == 0) return;

    ChatLib.chat("&6[Mm] &6&lGUI OPENED! &r&7" + container.getName());
    ChatLib.chat("&6[Mm] Container Items:");
    items.forEach((item, index) => {
        if (item && index <= containerSize - 37) { // -37 to not display inventory
            ChatLib.chat(`&7- ${item.getName()}`);
        }
    });
}


// Register inventory click event based on settings
register("guiMouseClick", () => {
    if (mmSettingsData.printContainerClick) {
        setTimeout(() => readContainerItems(), 400);
    }
});

register("guiOpened", () => {
    if (mmSettingsData.printContainerOpen) {
        setTimeout(() => readContainerItems(), 300);
    }
});