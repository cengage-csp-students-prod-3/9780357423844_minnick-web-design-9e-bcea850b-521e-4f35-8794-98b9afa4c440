/*
    Student Name: Nicholas Brantley
    File Name: script.js
    Date: 04/05/2026
*/

$(document).ready(function() {
    
    $("button:contains('Hide')").click(function() {
        $("#main").hide();
    });

    $("button:contains('Show')").click(function() {
        $("#main").show();
    });

$(document).ready(function() {
    $("button:contains('Hide')").click(remove);    
    $("button:contains('Show')").click(display);  

});