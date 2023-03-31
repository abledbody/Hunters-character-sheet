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

function sumStatDice(base, modifier) {
	console.log(base.value+"\n"+modifier.value+"\n");
    return Number(base.value) + Number(modifier.value) + 1;
}

window.addEventListener("load", function() {
	var stats = document.getElementsByClassName("sack-row");

	for (let i = 0; i < stats.length; i++) {
		var stat = stats[i];
		var base = stat.getElementsByClassName("base")[0];
		var modifier = stat.getElementsByClassName("modifier")[0];
		base.addEventListener("change", function() {
			var dice = stat.getElementsByClassName("dice")[0];
			dice.value = sumStatDice(base, modifier);
			console.log(dice.value+"\n");
		});
	
		modifier.addEventListener("change", function() {
			var dice = stat.getElementsByClassName("dice")[0];
			dice.value = sumStatDice(base, modifier);
			console.log(dice.value+"\n");
		});
		console.log(base.value);
	};
});