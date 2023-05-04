console.log('🟥 🟦 🟩 🟨');
//activating jQuery
$(document).ready(onReady);

function onReady() {
let redButton = $('red-btn');
let blueButton = $('blue-btn');
let greenButton = $('green-btn');
let yellowButton = $('yellow-btn');

//call red button and when you click function redAppear happen
$('#red-btn').on('click',redAppear);
$('#blue-btn').on('click',blueAppear);
$('#green-btn').on('click',greenAppear);
$('#yellow-btn').on('click',yellowAppear);

//containers that we add second class too
$('#redContainer').on('click','.red-fill',removeRed);
$('#blueContainer').on('click','.blue-fill',removeBlue);
$('#greenContainer').on('click','.green-fill',removeGreen);
$('#yellowContainer').on('click','.yellow-fill',removeYellow);



}
function redAppear() {
    $('#redContainer').append('<div class="block red-fill",></div>');
}
function blueAppear() {
    $('#blueContainer').append('<div class="block blue-fill","red-fill"></div>');
}
function greenAppear() {
    $('#greenContainer').append('<div class="block green-fill"></div>');
}
function yellowAppear() {
    $('#yellowContainer').append('<div class="block yellow-fill"></div>');
}

/////////////Remove The Blocks Functions////////////////
function removeRed(){
    $(this).remove();
}
function removeBlue(){
    $(this).remove();
}
function removeGreen(){
    $(this).remove();
}
function removeYellow(){
    $(this).remove();
}

/////////Append Boxes Function/////////////////////
