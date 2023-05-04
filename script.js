console.log('🟥 🟦 🟩 🟨');
//activating jQuery
$(document).ready(onReady);

function onReady() {
let redButton = $('red-btn');
let blueButton = $('blue-btn');
let greenButton = $('green-btn');
let yellowButton = $('yellow-btn');

$('#red-btn').on('click',redAppear);
$('#blue-btn').on('click',blueAppear);
$('#green-btn').on('click',greenAppear);
$('#yellow-btn').on('click',yellowAppear);

}
function redAppear() {
    $('#redContainer').append('<div class="block red-fill"></div>');
}
function blueAppear() {
    $('#blueContainer').append('<div class="block blue-fill"></div>');
}
function greenAppear() {
    $('#greenContainer').append('<div class="block green-fill"></div>');
}
function yellowAppear() {
    $('#yellowContainer').append('<div class="block blue-fill"></div>');
}
