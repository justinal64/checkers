"use strict";
let $board = $('#board-test');
let blackLine = "";
let whiteLine = "";
// $board.html("This is a test");

function white() {
    // This is where I will build the row starting with a white block
        // This is where I will build the row starting with a black block
    whiteLine = "";
    whiteLine += `<div class="row">`;
        whiteLine += `<div class="col-md-1 col-md-offset-1 white">White</div>`;
            whiteLine += `<div class="col-md-1 black">Black</div>`;
            whiteLine += `<div class="col-md-1 white">White</div>`;
            whiteLine += `<div class="col-md-1 black">Black</div>`;
            whiteLine += `<div class="col-md-1 white">White</div>`;
            whiteLine += `<div class="col-md-1 black">Black</div>`;
            whiteLine += `<div class="col-md-1 white">White</div>`;
            whiteLine += `<div class="col-md-1 black">Black</div>`;
            whiteLine += `<div class="col-md-1 white">White</div>`;
            whiteLine += `<div class="col-md-1 black">Black</div>`;
    whiteLine += `</div>`;
    $board.append(whiteLine);
}

function black() {
    // This is where I will build the row starting with a black block
    blackLine = "";
    blackLine += `<div class="row">`;
        blackLine += `<div class="col-md-1 col-md-offset-1 black">Black</div>`;
            blackLine += `<div class="col-md-1 white">White</div>`;
            blackLine += `<div class="col-md-1 black">Black</div>`;
            blackLine += `<div class="col-md-1 white">White</div>`;
            blackLine += `<div class="col-md-1 black">Black</div>`;
            blackLine += `<div class="col-md-1 white">White</div>`;
            blackLine += `<div class="col-md-1 black">Black</div>`;
            blackLine += `<div class="col-md-1 white">White</div>`;
            blackLine += `<div class="col-md-1 black">Black</div>`;
            blackLine += `<div class="col-md-1 white">White</div>`;
    blackLine += `</div>`;
    $board.append(blackLine);
}



function whichColor() {
    for(var i = 0; i < 10; i++) {
        if(i % 2 === 0) {
            black();
            console.log("It's blacks turn");
        } else {
            white();
            console.log("It's whites turn");
        }
    }
}


whichColor();


