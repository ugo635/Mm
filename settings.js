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



@Vigilant('Mm', 'MyModule', {
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

class mmSettingsData {
    constructor() {
        this.initialize(this);
        // this.addDependency("TheNameOfTheThingYouWannaAddDependencyTo", "TheDependency")
        // this.addDependency("Inq Highlight color", "Inq highlight") for exemple inq highlight color needs inq highlight to be enabled
    }
    //----------- General ----------------
    @SwitchProperty({
        name: "My Setting",
        description: "Enable or disable my setting",
        category: "General",
        subcategory: "Settings"
    })
    MySettingBool = true;
}

export default new mmSettingsData();


// Create the settings object (PogObject automatically loads the JSON file)
// import PogObject from "../PogData";
// export let mmSettingsData = new PogObject("Mm", {
//     "printContainerClick": 0,
//     "printContainerOpen": 0,
//     "hideFallingBlocks": 0,
//     "replaceAhMsg": 1,
//     "stashMsg": 1,
//     "replaceStashMsg": 1,
//     "vsMatOrItem": "mat",
// }, "MmSettings.json");

// // Save only if new defaults were added
// mmSettingsData.save();
