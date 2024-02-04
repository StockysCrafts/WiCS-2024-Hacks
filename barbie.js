let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};


let fratBarbie = 0;
let hookEm = 0;
let lockedIn = 0;
let palleteBarbie = 0;
let antiBarbie = 0;

let fratOp = document.querySelector('.fratOp');
let hookOp = document.querySelector('.hookOp');
let lockedOp = document.querySelector('.lockedOp');
let palleteOp = document.querySelector('.palleteOp');
let antiOp = document.querySelector('.antiOp');

let counterDisplay = document.querySelector('.counter');

counterDisplay.innerHTML = fratBarbie;
hookOp.innerHTML = hookem;
lockedOp.innerHTML = lockedIn;
palleteOp.innerHTML = palleteBarbie;
antiOp.innerHTML = antiBarbie;

fratOp.addEventListener("click",()=>{
    fratBarbie++;
    counterDisplay.innerHTML = fratBarbie;
}) ;

hookOp.addEventListener("click",()=>{
    hookEm++;
    hookOp.innerHTML = hookem;
}) ;

lockedOp.addEventListener("click",()=>{
    lockedIn++;
    lockedOp.innerHTML = lockedIn;
}) ;

palleteOp.addEventListener("click",()=>{
    palleteBarbie++;
    palleteOp.innerHTML = palleteBarbie;
}) ;

antiOp.addEventListener("click",()=>{
    antiBarbie++;
    antiOp.innerHTML = antiBarbie;
}) ;