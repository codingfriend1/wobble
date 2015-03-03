
function addWobble(elem, amnt) {
    var wobbleStyle = document.getElementById("wobbleStyle");
    if (wobbleStyle == null) {
	wobbleStyle = document.createElement("style");
    }
    wobbleStyle.id = "wobbleStyle";
    var deg = amnt + "deg";
    wobbleStyle.innerText = " "+
".wobble "+
"{ "+	
"	-webkit-animation: wiggle 0.2s ease infinite; "+
"        -moz-animation: wiggle 0.2s ease infinite; "+
"        -o-animation: wiggle 0.2s ease infinite; "+
"        animation: wiggle 0.2s ease infinite; "+
"} "+
"@-webkit-keyframes wiggle "+
"{ "+
"	0% {-webkit-transform: rotateZ("+deg+");} "+
"	50% {-webkit-transform: rotateZ(-"+deg+");} "+
"	100% {-webkit-transform: rotateZ("+deg+");} "+
"} "+
"@-moz-keyframes wiggle "+
"{ "+
"	0% {-moz-transform: rotateZ("+deg+");} "+
"	50% {-moz-transform: rotateZ(-"+deg+");} "+
"	100% {-moz-transform: rotateZ("+deg+");} "+
"} "+
"@-o-keyframes wiggle "+
"{ "+
"	0% {-o-transform: rotateZ("+deg+");} "+
"	50% {-o-transform: rotateZ(-"+deg+");} "+
"	100% {-o-transform: rotateZ("+deg+");} "+
"} "+
"@keyframes wiggle "+
"{ "+
"	0% {transform: rotateZ("+deg+");} "+
"	50% {transform: rotateZ(-"+deg+");} "+
"	100% {transform: rotateZ("+deg+");} "+
"} "+
"";
    if(document.getElementById("wobbleStyle") == null) {
	document.body.appendChild(wobbleStyle);
    }
    elem.classList.add("wobble");
}

function removeWobble(elem) {
    elem.classList.remove("wobble");
    var ws = document.getElementById("wobbleStyle");
    ws.parentNode.removeChild(ws);
}



