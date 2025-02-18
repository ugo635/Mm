

register("chat", (message, event) => {
    if (message.startsWith("    ⸕ Rough Amber Gemstone") || message.startsWith("    ⸕ Flawed Amber Gemstone") || message.startsWith("    Gold Essence") ||
    message.startsWith("    Diamond Essence") || message.startsWith("    Goblin Egg") || message.startsWith("    ❤ Rough Ruby Gemstone") || message.startsWith("    ❤ Flawed Ruby Gemstone")) {
    cancel(event);
    }
}).setCriteria("${message}");




register("chat", (message) => {
    if (message.includes("Pickobulus is now available!")) {
    Client.Companion.showTitle(`&6&lPickobulus is now available`, "", 0, 25, 35);
    }
}).setCriteria("${message}")

register("chat", (message) => {
    if (message.includes("A Diamond Goblin has spawned!")) {
    Client.Companion.showTitle(`&b&lDiamond Goblin`, "", 0, 25, 35);
    }
}).setCriteria("${message}")

