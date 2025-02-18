import { getplayername, formatTime, getDianaMayorTotalProfitAndOfferType, calcPercentOne, getBurrowsPerHour, getMobsPerHour, setTimeout } from "../../SBO/utils/functions";
import { data, dianaTrackerMayor } from "../../SBO/utils/variables";
import { playCustomSound } from "../../SBO/utils/functions";
import settings from "../../SBO/settings";


function calculatemymffrome(raw) {
    trueraw = raw/1.04;
    return ((trueraw*1.11)*1.05 + (130*1.05));
}

register("command", (raw) => { 
    let r = parseFloat(raw);
    let mf = calculatemymffrome(raw);

    ChatLib.chat(`&6&l[Mm] Your magic find is ${mf} on Inquisitors`); // input ur mf with renowned sorrow, dae axe, greg avc // must have max be, legion V, renowned, shuriken

}).setName("mymf");


register("chat", (player, x, y, z) => {
    ChatLib.chat(`&6[Mm] Coords Detected`)
    playCustomSound(settings.inqSound,100);
}).setCriteria("Party > ${player}: x: ${x}, y: ${y}, z:${z}")


register("command", () => {
    playCustomSound(settings.inqSound,100);
}).setName("soundTest")

register("chat", (player, number) => {
    mf = calculatemymffrome(parseInt(number));
    setTimeout(() => { // CoolDown To Avoid "Woah slow down, you're doing that too fast!" #00ff00
        ChatLib.command(`pc [Mm] Your magic find is ${mf} on Inquisitors`);
    }, 200)
}).setCriteria("Party > ${player}: !mymf ${mf}")
