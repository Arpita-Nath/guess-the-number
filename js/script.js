let first = document.querySelector('#first');
let second = document.querySelector('#second');
let game = document.querySelector('#game');
let winner = document.querySelector('#winner');
let start = document.querySelector('#start');
let guess = document.querySelector('#guess');
let again = document.querySelector('#again');
let image = document.querySelector('.image');
let cool = document.querySelector('#cool')
let winning = document.querySelector('#winning')
let para = document.querySelector('.para');
let congo = document.querySelector('.congo');
let hint = document.querySelector('.hint');
let chances = document.querySelector('.chances');
let cnt = chances.childNodes[1];


let first_number;
let second_number;
let count = 5


start.addEventListener("click", function(e){
    first_number = parseInt(first.value);
    cool.setAttribute('src', './images/ques.gif');
    image.style.width = "165px";
    para.innerHTML = "Guess my number between 1 to 10 !";
    para.style.fontSize = "16px";
    first.style.display = "none";
    second.style.display = "block";  
    start.style.display = "none";
    guess.style.display = "block";
    chances.style.display = "block";
    cnt.innerHTML = count;
})
guess.addEventListener("click", function(){ 
    second_number = parseInt(second.value);
    second.value = "";  
    if(second_number){
        if(count>=1){
            if(second_number > first_number){
                hint.innerHTML = "Your guess is higer than my number !"
                hint.style.display = "block"
                count--;
                cnt.innerHTML = count;
            }
            else if(second_number < first_number){
                hint.innerHTML = "Your guess is lower than my number :("
                hint.style.display = "block"
                count--;
                cnt.innerHTML = count;
        
            }
            else if(second_number == first_number){
                game.style.display = 'none';
                winner.style.display = 'block';
            }

        }
        else{
            game.style.display = 'none';
            winner.style.display = 'block';
            winning.setAttribute('src', './images/fail.gif');
            congo.innerHTML = "Oops ! you lost the game<br>better luck next time !!!"
        }    
    }   
})

again.addEventListener("click", function(){
    count = 5
    cnt.innerHTML = count;
    game.style.display = 'block';
    guess.style.display - 'none';
    winner.style.display = 'none';
    first.value = "";
    cool.setAttribute('src', './images/cool.gif');
    image.style.width = "274px";
    para.innerHTML = " start the game ! <br>enter a number between 0 to  10";
    para.style.fontSize = "21px";
    first.style.display = "block";
    second.style.display = "none";  
    start.style.display = "block";
    guess.style.display = "none";
    chances.style.display = "none";
    hint.style.display = 'none';
})


function isValid(number){
    if(number>0 && number<=10){
        return true;
    }
    else{
        return false;
    }
}
