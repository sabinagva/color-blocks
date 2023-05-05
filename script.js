console.log('🟥 🟦 🟩 🟨');
//activating jQuery
$(document).ready(onReady);

//defining color counts
let redCounter = 1;
let blueCounter = 1;
let greenCounter = 1;
let yellowCounter = 1;


function onReady() {
    //defining buttons
let redButton = $('red-btn');
let blueButton = $('blue-btn');
let greenButton = $('green-btn');
let yellowButton = $('yellow-btn');


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
$('#boxContainer').on('click','.red-fill',removeRed);
$('#boxContainer').on('click','.blue-fill',removeBlue);
$('#boxContainer').on('click','.green-fill',removeGreen);
$('#boxContainer').on('click','.yellow-fill',removeYellow);

//containers that function go to
// $('#redCounterContainer').on('click',redCount);
// $('#blueCounterContainer').on('click',blueCount);
// $('#greenCounterContainer').on('click',greenCount);
// $('#yellowCounterContainer').on('click',yellowCount);

//functions that make boxes appear
//and count
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


