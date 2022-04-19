
var is_access_on = false;

function accessibility() {
	if (is_access_on) {
		swap_style_sheet("styles/dash.css");
		is_access_on = false;
	} else {
		swap_style_sheet("styles/dash_accessibility.css");
		is_access_on = true;
	}
}

function swap_style_sheet(sheet) {
	document.getElementById("dashstyle").setAttribute("href",sheet);
}