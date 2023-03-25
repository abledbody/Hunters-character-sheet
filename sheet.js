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