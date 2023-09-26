//detect a keypress for the first time
var started = false;
var level = 0;

$("body").keypress(function(event){
    if (!started){
    //$("#level-title").text("Level "+ level);
    nextSequence();
    started = true;
}
})

var buttonColours = ["red","blue","green","yellow"]; 
var gamePattern = [];

function nextSequence(){
    userClickedPattern = [];
    $("#level-title").text("Level " + level);
    level=level+1;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomColours = buttonColours[randomNumber];
    gamePattern.push(randomColours);

    $("#" + randomColours).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomColours);
    // generatePattern(randomColours);  
}


//button selectors
var userClickedPattern = [];
$(".btn").on("click",function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
})


//playSound
function playSound(name){
    var audio = new Audio ("sounds/" + name + ".mp3");
    audio.play();
    // console.log(userClickedPattern);
}


//animatePress
function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");

    setTimeout(function (){
        $("#" + currentColor).removeClass("pressed")  
    }, 100)
}


//Check Answer
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        // console.log("success!");
        //level++;
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else{
        console.log("Wrong!");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over,Press Any Key to Restart");   
        started = false;
        level = 0;
        gamePattern = [];
    }
}


