

// let upperValue = 6;
// let lowerValue = 1
// let resultValue = Math.ceil(Math.random()*upperValue);
// console.log(resultValue);


function rollDice(){
    let randomNumber = Math.floor(Math.random()* 6) + 1;
    let imageSource ='img/' + randomNumber + '.png' ;
    document.getElementById('ludo').src = imageSource;
}