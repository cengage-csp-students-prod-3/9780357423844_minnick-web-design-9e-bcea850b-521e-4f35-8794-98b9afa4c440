/*
    Student Name: Nicholas Brantley
    File Name: script.js
    Date: 04/05/2026
*/

$(document).ready(function() {
    
    $("button:contains('Hide')").click(function() {
        $("article p").hide();
    });

    $("button:contains('Show')").click(function() {
        $("article p").show();
    });

    function remove() {
        $("article p").hide();
    }

    function display() {
        $("article p").show();
    }

    $("button:contains('Hide')").click(remove);    
    $("button:contains('Show')").click(display);  
});