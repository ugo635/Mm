import { Color } from "../Vigilance";
import {
    @ButtonProperty,
    @CheckboxProperty,
    Color,
    @ColorProperty,
    @PercentSliderProperty,
    @SelectorProperty,
    @SwitchProperty,
    @TextProperty,
    @SliderProperty,
    @Vigilant,
} from 'Vigilance';



@Vigilant('Cm', 'CoresModule', {
    getCategoryComparator: () => (a, b) => {
        // By default, categories, subcategories, and properties are sorted alphabetically.
        // You can override this behavior by returning a negative number if a should be sorted before b,
        // or a positive number if b should be sorted before a.

        // In this case, we can put Not general! to be above general.
        const categories = ['General', 'Diana'];

        return categories.indexOf(a.name) - categories.indexOf(b.name);
    },
    // getSubcategoryComparator: () => (a, b) => {
    //     // These function examples will sort the subcategories by the order in the array, so eeeeeee
    //     // will be above Category.
    //     const subcategories = ['Burrows', 'Tracker', 'Waypoints', 'Loot Announcer', 'Bobber Counter', 'Other', 'Party Commands'];

    //     return subcategories.indexOf(a.name) - subcategories.indexOf(b.name);
    // },
    // getPropertyComparator: () => (a, b) => {
    //     // And this will put the properties in the order we want them to appear.
    //     const names = ["Do action!!!", "password", "text", "Color Picker"];

    //     return names.indexOf(a.attributesExt.name) - names.indexOf(b.attributesExt.name);
    // }
})

class cmSettingsData {
    constructor() {
        this.initialize(this);
        // this.addDependency("TheNameOfTheThingYouWannaAddDependencyTo", "TheNameOfTheDependency");
        this.addDependency("Change stash action", "Stash message");
        this.addDependency("Change stash open", "Stash message");

    }
    //----------- General ----------------
    @SwitchProperty({
        name: "My Setting",
        description: "Enable or disable my setting (just for debugging purposes)",
        category: "General",
        subcategory: "Settings"
    })
    @SwitchProperty({
        name: "Party Invite Message Editor",
        description: "Edits party invite message to lyk if the guy is in your lobby",
        category: "General",
        subcategory: "Settings"
    })
    partyEdit = true;
    @SwitchProperty({
        name: "Show container inventory on click",
        description: "Shows every item of a container when clicking with the container open",
        category: "General",
        subcategory: "Settings"
    })
    printContainerClick = false;
    @SwitchProperty({
        name: "Show container inventory when opened",
        description: "Shows every item of a container when opening it",
        category: "General",
        subcategory: "Settings"
    })
    printContainerOpen = false;
    @SwitchProperty({
        name: "Hide falling blocks",
        description: "Hides falling blocks (they won't appear on the screen)",
        category: "General",
        subcategory: "Settings"
    })
    hideFallingBlocks = false;
    @SwitchProperty({
        name: "Replace Ah message",
        description: "Replaces the AH message when buying an item with a clickable one",
        category: "General",
        subcategory: "Settings"
    })
    replaceAhMsg = true;
    @SwitchProperty({
        name: "Stash message",
        description: "Replace the stash message",
        category: "General",
        subcategory: "Settings"
    })
    stashMsg = true;
    @SelectorProperty({
        name: "Change stash action",
        description: "Clicking on the stash action will change whether it will open the /viewStash or do /pickupstash",
        category: "General",
        subcategory: "Settings",
        options: ["/viewStash", "/pickupStash"]
    })
    changeStashClickAction = 0;

    @SelectorProperty({
        name: "Change stash open",
        description: "Change if it will show items or material (/viewStash item or /viewStash material)",
        category: "General",
        subcategory: "Settings",
        options: ["Material", "Item"]
    })
    vsMatOrItem = 0;
}

export default new cmSettingsData();


// Create the settings object (PogObject automatically loads the JSON file)


// import PogObject from "../PogData";
// export let cmSettingsData = new PogObject("Cm", {
//     "printContainerClick": 0,
//     "printContainerOpen": 0,
//     "hideFallingBlocks": 0,
//     "replaceAhMsg": 1,
//     "stashMsg": 1,
//     "replaceStashMsg": 1,
//     "vsMatOrItem": "mat",
// }, "CmSettings.json");

// // Save only if new defaults were added
// cmSettingsData.save();
