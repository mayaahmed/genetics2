	var cp = document.getElementById("cp");
cp.style.right = "-1000px";

function toggleCP(){

	cp.style.height = window.innerHeight - 60+"px";
	if(cp.style.right == "-1000px"){
		cp.style.right = "0px";
	} else {
		cp.style.right = "-1000px";
	}
}
