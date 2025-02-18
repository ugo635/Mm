import PogObject from "../PogData";

// Create the settings object (PogObject automatically loads the JSON file)
export let mmSettingsData = new PogObject("Mm", {
    "printContainerClick": 0,
    "printContainerOpen": 0,
    "hideFallingBlocks": 0,
    "replaceAhMsg": 1,
    "stashMsg": 1,
    "replaceStashMsg": 1,
    "vsMatOrItem": "mat",
}, "MmSettings.json");


// Ensure missing values are set but don't overwrite the entire file
if (mmSettingsData.printContainerClick === undefined) mmSettingsData.printContainerClick = 0;
if (mmSettingsData.printContainerOpen === undefined) mmSettingsData.printContainerOpen = 0;
if (mmSettingsData.hideFallingBlocks === undefined) mmSettingsData.hideFallingBlocks = 0;
if (mmSettingsData.replaceAhMsg === undefined) mmSettingsData.replaceAhMsg = 1;
if (mmSettingsData.stashMsg === undefined) mmSettingsData.stashMsg = 1;
if (mmSettingsData.replaceStashMsg === undefined) mmSettingsData.replaceStashMsg = 1;
if (mmSettingsData.vsMatOrItem === undefined) mmSettingsData.vsMatOrItem = "mat";



// Save only if new defaults were added
mmSettingsData.save();
