
paths = 
[
	"Home",
	"About"
];

function setCookie(name, value, exdays){
        localStorage.setItem(name, value);
    
}

function getCookie(cname) {
    return localStorage.getItem(cname)
}
function push(a){
	let pages = []
	if(getCookie("page") != null) 
		pages = JSON.parse(getCookie("page"))
	console.log(getCookie("page"))
	pages.push(a)
	setCookie("page",JSON.stringify(pages))
}
function pop(){
	let pages = JSON.parse(getCookie("page"))
	let pop = pages.pop()
	setCookie("page",JSON.stringify(pages))
	return pop

}
function get(){
	let pages = JSON.parse(getCookie("page"))
	let pop = pages.pop()
	return pop
}
function navPage(a)
{
	push(a)
	for (let index = 0; index < paths.length; index++) {
		console.log(index)
		if(a == index){
			document.getElementById(paths[index]).style.display = "block";
		}
		else{
			document.getElementById(paths[index]).style.display = "none";
		}
	}
	
}