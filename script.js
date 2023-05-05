console.log('🟥 🟦 🟩 🟨');
//activating jQuery
$(document).ready(onReady);




function onReady() {
//defining buttons
let redButton = $('red-btn');
let blueButton = $('blue-btn');
let greenButton = $('green-btn');
let yellowButton = $('yellow-btn');

//defining color counts
//we equal them to 1 because numbers will always start counting from 1
let redCounter = 1;
let blueCounter = 1;
let greenCounter = 1;
let yellowCounter = 1;


//call red button and when you click function redAppear happen
$('#red-btn').on('click',redAppear);
$('#blue-btn').on('click',blueAppear);
$('#green-btn').on('click',greenAppear);
$('#yellow-btn').on('click',yellowAppear);

//call the counters
$('#red-btn').on('click',redCounter);
$('#blue-btn').on('click',blueCounter);
$('#green-btn').on('click',greenCounter);
$('#yellow-btn').on('click',yellowCounter);


//containers that we add second class too
//also hold our actions in
$('#boxContainer').on('click','.red-fill',removeRed);
$('#boxContainer').on('click','.blue-fill',removeBlue);
$('#boxContainer').on('click','.green-fill',removeGreen);
$('#boxContainer').on('click','.yellow-fill',removeYellow);

//functions that make boxes appear
//and count. we use the same function for count since 
//both counting and box appearing is happening from same action
function redAppear() {
    $('#boxContainer').append('<div class="block red-fill",></div>');
    redCounter++;
    $('#red-count').empty();
     $('#red-count').append(redCounter);
     

}
function blueAppear() {
    $('#boxContainer').append('<div class="block blue-fill","red-fill"></div>');
    blueCounter++
    $('#blue-count').empty();
    $('#blue-count').append(blueCounter);
     
}
function greenAppear() {
    $('#boxContainer').append('<div class="block green-fill"></div>');
    greenCounter++
    $('#green-count').empty();
    $('#green-count').append(greenCounter);
}
function yellowAppear() {
    $('#boxContainer').append('<div class="block yellow-fill"></div>');
    yellowCounter++
    $('#yellow-count').empty();
    $('#yellow-count').append(yellowCounter);
    
}

}

//functions that count


/////////////Remove The Blocks Functions////////////////
// function removeRed(){
//     $(this).remove();
// }
// function removeBlue(){
//     $(this).remove();
// }
// function removeGreen(){
//     $(this).remove();
// }
// function removeYellow(){
//     $(this).remove();
// }


