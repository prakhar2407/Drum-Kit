let buttonArray = document.querySelectorAll(".drum");
for(let i = 0; i < buttonArray.length; i++){
    buttonArray[i].addEventListener("click",function(){
        let choice2 = this.innerHTML;
        sound(choice2);
        animation(choice2);
    });
}


document.addEventListener("keydown",function(event){
    var keyPress = event.key;
    sound(keyPress);
    animation(keyPress)
});

    // function keyPressed(){
    //     alert("Key was pressed");
    // }


    function sound(choice){    
        switch(choice){    
            case "w":
                var audio1 = new Audio("sounds/crash.mp3");
                audio1.play();
                break;
    
            case "a":
                let audio2 = new Audio("sounds/kick-bass.mp3");
                audio2.play();
                break;
    
            case "s":
                let audio3 = new Audio("sounds/snare.mp3");
                audio3.play();
                break;

            case "d":
                let audio4 = new Audio("sounds/tom-1.mp3");
                audio4.play();
                break;
            
            case "j":
                let audio5 = new Audio("sounds/tom-2.mp3");
                audio5.play();
                break;
            
            case "k":
                let audio6 = new Audio("sounds/tom-3.mp3");
                audio6.play();
                break;
                
            case "l":
                let audio7 = new Audio("sounds/tom-4.mp3");
                audio7.play();
                break;
    
            default:
                break;
    }
}

function animation(key){
    document.querySelector("."+key).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed")
    },100);
}

