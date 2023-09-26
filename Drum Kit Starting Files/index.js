// for (var i = 0; i < noOfButtons ; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function (){
//         // alert("you just clicked that !");
//         // var audio = new Audio("sounds/tom-1.mp3");
//         // audio.play();
//         // console.log(this);
//         // this.style.color="white"; /                                                                  
//         var choice = this.innerHTML;
//         // alert("you just clicked " + choice);
//     }); }

var noOfButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < noOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        addAnimation(buttonInnerHTML);
    });   
}
document.addEventListener("keydown", function(event){
    // alert(event + " was pressed!");
    // console.log(event);
    makeSound(event.key);
    addAnimation(event.key);
});

function makeSound(choice){ 
        switch(choice){
        case "w" :   
            var audio = new Audio("sounds/crash.mp3");
            audio.play();   
            break;  
        case "a" :   
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();   
            break;
        case "s" :   
            var audio = new Audio("sounds/snare.mp3");
            audio.play();   
            break;
        case "d" :   
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();   
            break;
        case "j" :   
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();   
            break;
        case "k" :   
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();   
            break;   
        case "l" :   
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();   
            break;
        default : console.log(choice);      
        }
  }
  function addAnimation(currentKey){
    var activebutton = document.querySelector("." + currentKey);
    activebutton.classList.add("pressed");

    setTimeout(function() {
        activebutton.classList.remove("pressed");
   } ,100)
  }


