
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let result = document.querySelector('.result');

const correctAns = getRandomInt(5, 5);

for (let i = 0; i < 3; i++) {
    var flag = 0;
    let guess = parseInt(prompt("Guess a number between 5(inclusive) to 20(inclusive): "));
    if(guess === correctAns){
        flag = 1;
        break;
    }
    else{
        if(guess<correctAns){
            console.log("guessing number is lower");
        }
        else
        {
            console.log("guessing number in higher");
        }
    }
}

if (flag===1){
    let p = document.createElement('p');
    p.appendChild(document.createTextNode('YOU WIN'));
    result.appendChild(p);
}
else
{
    let p = document.createElement('p');
    result.appendChild(document.createTextNode('YOU LOSE'));
    result.appendChild(p);
}



