/*
Author: Nicholas Brantley
File Name: script.js
Date: 04/10/2026
*/

//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

//Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
		var menuicon = document.getElementById("icon");
		if (navlinks.style.display === "block") {
		    navlinks.style.display = "none";
				menuicon.style.color = "#2a1f14";
		} else {
		    navlinks.style.display = "block";
				menuicon.style.color = "#f6eee4";
		}
}

function ans1() {
    document.querySelector("#answer p").innerHTML =
        "A baby animal is likely NOT an orphan if it is clean, warm, and the parents are nearby. Observe from a distance before intervening.";
}

function ans2() {
    document.querySelector("#answer p").innerHTML =
        "Rabid animals often show unusual behavior such as aggression, confusion, drooling, or lack of fear of humans. Always contact animal control if you suspect rabies.";
}

function ans3() {
    document.querySelector("#answer p").innerHTML =
        "No. In most cases, bird parents will not abandon their young if humans touch them. However, it is best to avoid unnecessary handling.";
}

function ans4() {
    document.querySelector("#answer p").innerHTML =
        "To volunteer, please visit our contact page and submit an application. We will reach out with available opportunities.";
}