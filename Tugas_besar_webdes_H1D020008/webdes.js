function lihatmenu() {
	document.getElementById("menukecil").style.width = "300px";
}
function tutupmenu() {
	document.getElementById("menukecil").style.width = "0px";
}
function mencari(){
	document.getElementById("mydrop").classList.toggle("show");	
}

function lihatpanduan() {
	document.getElementById("showtoc").style.height = "auto";
	document.getElementById("showtoc").style.display="block";
	document.getElementById("ikonshow").style.display="none";
	document.getElementById("ikonhide").style.display="block";			
}
function tutuppanduan() {
	document.getElementById("showtoc").style.height = "0px";
	document.getElementById("showtoc").style.display="none";
	document.getElementById("ikonshow").style.display="block";
	document.getElementById("ikonhide").style.display="none";
}