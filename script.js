var audio = new Audio('Quack.mp3');
audio.load();

var Clicks = 0;

if (localStorage.getItem("Clicks") === null)
{
	console.log("Empty");
	localStorage.setItem("Clicks", Clicks.toString());
}
else
{
	Clicks = localStorage.getItem("Clicks");
}

function UpdateClicks()
{
	localStorage.setItem("Clicks", Clicks.toString());
	document.getElementById("Clicks").innerHTML = Clicks.toString().concat(" Clicks!");
}

//if (document.cookie === "")
//{
//	console.log("Empty Cookie");
//	document.cookie = "C = 0; expires=Tue, 01 Jan 2999 00:00:00 UTC; Secure";
//}