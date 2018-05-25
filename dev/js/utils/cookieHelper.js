export function setCookie(apiKey) {
	let d = new Date();
			
	d.setTime(d.getTime() + (24*60*60*1000));
	document.cookie = "apiKey = " + apiKey + ";" + "expires = " + d.toUTCString() + "; path=/";
	return;
}

export function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}