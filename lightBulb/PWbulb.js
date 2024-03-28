const bulb1 = document.getElementById("bulb1")
const bulb2 = document.getElementById("bulb2")
const bulb3 = document.getElementById("bulb3")
// var switch1 = document.getElementById("myImg").src;
function switch1(){
// chang switich off to switch on
// change lightBulb on to lightBulb off
// bulb on 1&3
bulb1.src = "lightOn.png";
bulb3.src = "lightOn.png";
document.getElementById("sw1").src = "switchOn.jpg";
}
function switch2(){
// chang switich off to switch on
// change lightBulb on to lightBulb off
// buld 2, off 3
bulb2.src = "lightOn.png";
bulb3.src = "lightOff.png";
document.getElementById("sw2").src = "switchOn.jpg";
}
function switch3(){
// chang switich off to switch on
// change lightBulb on to lightBulb off
// bulb on 3, off 1
bulb3.src = "lightOn.png";
bulb1.src = "lightoff.png";
document.getElementById("sw3").src = "switchOn.jpg";
}
function powerbutton(){
    
    console.log(bulb1.src.includes("lightOn.png"))
    if(bulb1.src.includes("lightOn.png")&&bulb2.src.includes("lightOn.png")&&bulb3.src.includes("lightOn.png")){    
    document.getElementById("power").src = "button on.png";
    document.getElementById("lamp").src = "-hanging-lamps-clipart.png";
    document.getElementById("badGuy").src = "burglar.png";
    console.log("hi")
}
}