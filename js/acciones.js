// JavaScript Document
$(document).ready(function(e) {
 document.addEvenListener('deviceready',function() {
	$('#vibrar').on('tap',function (){
 navigator.notificacion.vibrate(2900);
});
});
});
	
