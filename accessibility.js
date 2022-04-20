
var is_access_on = "f";

function accessibility() {
	if (is_access_on == "t") {
		swap_style_sheet("styles/dash.css");
		is_access_on = "f";
	} else if (is_access_on == "f"){
		swap_style_sheet("styles/dash_accessibility.css");
		is_access_on = "t";
	}
}

function swap_style_sheet(sheet) {
	document.getElementById("dashstyle").setAttribute("href",sheet);
}