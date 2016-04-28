// JavaScript Document
$(document).ready(function(e) {
 document.addEvenListener('deviceready',function() {
	$('#vibrar').on('tap',function (){
 navigator.notification.vibrate(2900);
});
});
});
	
