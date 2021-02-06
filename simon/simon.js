//dark makes the color darker when you get it wrong
//red, yellow, green, blue are just simon colors
//arrays are storing the order of the simon game.
//rest of the vars are just to get elements.
var list = ["red", "yellow", "green", "blue"];
var colors = [], player = [];
var div = document.querySelectorAll('div'), p = document.querySelector('p'), button = document.querySelectorAll("button");
var dark = "dark";

//sets all color sizes to 250 x 250 squares. Simple stuff
for(var i = 0; i < 4; i++){
  div[i].style.height = "250px";
  div[i].style.width = "250px";
}
var i = 0, k = 0;

//thing chooses the colors that are going to be in the order in simon.
const thing = () => {
    for(var l = 0; l < 4; l++){
        div[l].style.backgroundColor = list[l];
    }
    colors[i] = list[Math.floor(Math.random() * 4)];
    alert(colors[i]);
}
thing();

//find which button you clicked and stores the color into player.
const start = (event) => {
    switch(event.target.className){
      case "red":
        player[i] = list[0];
        break;
      case "yellow":
        player[i] = list[1];
        break;
      case "green":
        player[i] = list[2];
        break;
      case "blue":
        player[i] = list[3];
        break;
    }
    event.target.style.opacity = 1.0;
    
    //basically if you win, that's good and it will go into simon()
    if(player[i] == colors[i]){
        i++;
        simon(event);
    }
    //uh oh. Now color is darker. Epic. Resets game. 
    else{
        event.target.style.backgroundColor = String(dark.concat(event.target.className));
            if(event.target.className == "yellow"){
                event.target.style.backgroundColor = "orange";
            }
        alert("You lost");
        player = [];
        colors = [];
        dead();
        i = 0;
        k = 0;
    }
}

//ok now makes a new color in the order.
//now its in the colors variable. yay.
//extra prints the order to the user.
const simon = (event) => {
    if(player.length == colors.length){
        k++;
        colors[i] = list[Math.floor(Math.random() * 4)];
        var extra = colors.join(' ');
        alert(extra);
        player = [];
        i = 0;
    }
}

//shows the buttons if you lose and asks if you want to play again.
const dead = () => {
    p.innerHTML = "You got " + k + " correct. Do you want to play again?";
    button[0].style.visibility = "visible";
    button[1].style.visibility = "visible";
}

//obvious whats here. I put a funny joke for my teacher.
const yes = (event) => {
    if(event.target.value == "yes"){
        thing();
    }
    if(event.target.value == "no"){
        p.innerHTML = "You suck! How come you don't wanna play my game. But if you are my teacher, plz forgive me and give me a good grade :)";
    }
}

//trash code honestly. I spent like 3 hrs on this lol, so nothing good. 
//The code is still very improvable, but cba cuz tree