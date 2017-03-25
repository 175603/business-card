function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(2);
	deviceInfo();
}

function deviceInfo() {

	info =  	'My Interest1' + '<br>' + 
			'My Interest2' + '<br>' + 
			'My Interest3' + '<br>';

	document.getElementById("deviceDetails").innerHTML = info;	
}