//var i = 0;
//var txt1 = '" Don\'t worry about',
//    txt2 = 'what I\'m doing. Worry',
//    txt3 = 'what I\'m doing. Worry',
//    txt4 = 'worried about what',
//    txt5 = 'I\'m doing."';
//var speed = 50;
////var textLength = Math.max(txt1.length, txt2.length, txt3.length, txt4.length, txt5.length);
//
//function typeWriter() {
//    if (i < txt1.length) {
//        document.getElementById("h1").innerHTML += txt1.charAt(i);
//
//        i++;
//        setTimeout(typeWriter, speed);
//    }
//}
//onload = typeWriter()
// set up text to print, each item in array is new line
var aText = new Array(
    "\" Don\'t worry about",
    "what I\'m doing. Worry",
    "about why you",
    "worried about what",
    "I\'m doing.\""
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}
