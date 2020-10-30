var countOfButton = document.querySelectorAll("button").length; 
for(i=0; i< countOfButton; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        
        var textContent = this.textContent;
        makeASing(textContent);
        buttonAnimation(textContent);
        

            
    })
}


document.addEventListener("keypress", function(event) {
      makeASing(event.key);
      buttonAnimation(event.key);
})



function makeASing(key){
    switch(key){
        case "w":
        var sound = new Audio("./sounds/tom-1.mp3").play();
        case "a":
            var sound2 = new Audio("./sounds/tom-2.mp3").play();
        case "s":
            var sound3 = new Audio("./sounds/tom-3.mp3").play();
            
        case "d":
            var sound4 = new Audio("./sounds/tom-4.mp3").play();
        case "j":
            var sound5 = new Audio("./sounds/crash.mp3").play();
        case "k":
            var sound6 = new Audio("./sounds/kick-bass.mp3").play();
        case "l":
            var sound7 = new Audio("./sounds/snare.mp3").play();
        default: console.log(event.key);
}
}


function buttonAnimation(key) {
    
    document.querySelector("." + key).classList.add("pressed");
   
    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed");
    },100);
  
  
}