const strengthSkillIds = [
    "athletics",
    "endurance",
    "restrain",
];

const agilitySkillIds = [
    "dexterity",
    "piloting",
    "stealth",
];

const cunningSkillIds = [
    "social",
    "bartering",
    "intimidation",
    "taming",
    "performance",
];

const knowledgeSkillIds = [
    "familiarity",
    "search",
    "perception",
    "engineering",
    "spellcraft",
    "medicine",
    "cooking",
];

function getValuesById(id) {
    var values = [];
    // Get the stat row by id
    var row = document.getElementById(stat);
    // Get the values by class
    values[base] = row.getElementsByClassName("value")[0];
    values[modifier] = row.getElementsByClassName("modifier")[0];
    values[dice] = row.getElementsByClassName("dice")[0];
    return values;
}

const strengthSkills  = foreach(strengthSkillIds,  getValuesById)
const agilitySkills   = foreach(agilitySkillIds,   getValuesById)
const cunningSkills   = foreach(cunningSkillIds,   getValuesById)
const knowledgeSkills = foreach(knowledgeSkillIds, getValuesById)

function showSheet(sheetId) {
    // Hide all sheets
    var sheets = document.getElementsByClassName("sheet");
    for (var i = 0; i < sheets.length; i++)
        sheets[i].classList.remove("active");

    // Show the selected sheet
    var sheet = document.getElementById(sheetId);
    sheet.classList.add("active");

    // Deactivate all tabs
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++)
        tabs[i].classList.remove("active");

    // Activate the selected tab
    var tab = document.querySelector(".tab[sheet='" + sheetId + "']");
    tab.classList.add("active");
}

function sumStatDice(values) {
    values.dice.value = parseInt(values.base.value) + parseInt(values.modifier.value) + 1;
}