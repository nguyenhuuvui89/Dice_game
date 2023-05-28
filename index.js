
function myFunction() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1
    var randomNumber2 = Math.floor(Math.random() * 6) + 1
    var img1 = document.querySelector('.img1');
    var img2 = document.querySelector('.img2');
    var result_g = document.querySelector('.result');
    
    switch (randomNumber1) {
        case 1: 
            img1.setAttribute('src', './images/dice1.png');
            break;
        case 2:
            img1.setAttribute('src', './images/dice2.png');
            break;
        case 3:
            img1.setAttribute('src', './images/dice3.png');
            break;
        case 4:
            img1.setAttribute('src', './images/dice4.png');                      
            break;
        case 5:
            img1.setAttribute('src', './images/dice5.png');                
            break;
        case 6:
            img1.setAttribute('src', './images/dice6.png');
            break;
    }
    switch (randomNumber2) {
        case 1: 
            img2.setAttribute('src', './images/dice1.png');
            break;
        case 2:
            img2.setAttribute('src', './images/dice1.png');
            break;
        case 3:
            img2.setAttribute('src', './images/dice3.png');
            break;
        case 4:          
            img2.setAttribute('src', './images/dice4.png');           
            break;
        case 5:         
            img2.setAttribute('src', './images/dice5.png');           
            break;
        case 6:
            img2.setAttribute('src', './images/dice6.png');
            break;
    }
    if (randomNumber1 > randomNumber2) {
        result_g.textContent = "Player 1 is Winner";
    } else if (randomNumber1 < randomNumber2) {
        result_g.textContent = "Player 2 is Winner"
    } else {
        result_g.textContent = "Tie"
    }
}
