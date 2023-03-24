
paths = 
[
	"Home",
	"About"
];

const navBarView_mobile = document.getElementById("mobNavView")
function mobNav()
{
	if(navBarView_mobile.style.display === "none")
	{
		navBarView_mobile.style.display = "block"
	}else{
		navBarView_mobile.style.display = "none"
	}
}

let activeIndex = [];
//activeIndex = parseInt(new URL(window.location).searchParams.get("id"));

if(new URL(window.location).searchParams.has("id"))
{
	activeIndex.push(parseInt(new URL(window.location).searchParams.get("id")));
}

addEventListener("popstate", (event)=>{
	for (let index = 0; index < paths.length; index++) {
		document.getElementById(paths[index]).style.display = "none";
		if(paths[index] === window.history.state["id"])
		{
			activeIndex.push(index)
			document.getElementById(paths[index]).style.display = "block";
		}
	}
})

window.onunload = (e)=>
{
	console.log('test')
	window.location = "/build/index.html?id=" + activeIndex.toString()
}
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
	activeIndex.push(a);
	push(a)
	for (let index = 0; index < paths.length; index++) {
		console.log(index)
		if(a == index){
			document.getElementById(paths[index]).style.display = "block";
			window.history.replaceState({id: paths[index]}, paths[index], "/"+paths[index])
		}
		else{
			document.getElementById(paths[index]).style.display = "none";
		}
	}
	
}
//navPage(activeIndex)