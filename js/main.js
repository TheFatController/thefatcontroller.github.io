function change() {
	$('#circle').animate({opacity:'0'}, 500)
}

function link() {
	$('#enter').animate({opacity:'0'}, 500)
	$('body').animate({backgroundColor:'#ffffff'}, 500)
	setTimeout(function(){
		window.location.href = "games.html";
	},500);
}
	//window.location.href = "games.html";
