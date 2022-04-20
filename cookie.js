const cookie_life = 30;

function check_cookie() {
	let accessible = load_cookie("accessibility");
	if (accessible == "t") {
		accessibility();
	}
	if (accessible == "") {
		store_cookie();
	}
	//console.log(accessible);
}

function load_cookie() {
	let decoded_cookie = decodeURIComponent(document.cookie);
	console.log(decoded_cookie);
	let cookie_array = decoded_cookie.split(';');
	for (let i = 0; i < cookie_array.length; i++) {
		let cookie = cookie_array[i];
		while (cookie.charAt(0) == ' ') {
			cookie = cookie.substring(1, cookie.length);
		}
		if (cookie.indexOf("accessibility") == 0) {
			return cookie.substring(14,15);
		}
	}
	return "";
}

function store_cookie() {
	const d = new Date();
	d.setTime(d.getTime() + (cookie_life * 24 * 60 * 60 * 1000));
	let expires = "expires=" + d.toUTCString();
	document.cookie = "accessibility=" + is_access_on + ";" + expires + ";" + "path=/;SameSite=Strict";
	//console.log("cookie stored: " + decodeURIComponent(document.cookie));
}