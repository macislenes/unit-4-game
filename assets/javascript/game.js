var magicalLimit = 60;
var magicalLow= 20;
var valueLimit = 4;

var magicalNumber = 0;
var currentTotal = 0;

var option1 = 0;
var option2 = 0;
var option3 = 0;
var option4 = 0;

var wins = 0;
var losses = 0;


function initialize(){
    magicalNumber = Math.floor(Math.random()*(magicalLimit-magicalLow+1)+magicalLow);
    currentTotal = 0;

    option1 = Math.floor((Math.random() * (magicalNumber/valueLimit)) +1);
    option2 = Math.floor((Math.random() * (magicalNumber/valueLimit)) +1);

    while(option1 == option2){
        option2 = Math.floor((Math.random() * (magicalNumber/valueLimit)) +1);
    };

    option3 = Math.floor((Math.random() * (magicalNumber/valueLimit)) +1);

    while(option3 == option2 || option3 == option1){
        option3 = Math.floor((Math.random() * (magicalNumber/valueLimit)) +1);
    };

    option4 = Math.floor((Math.random() * (magicalNumber/valueLimit)) +1);

    while(option4 == option3 || option4 == option2 || option4 == option1){
        option4 = Math.floor((Math.random() * (magicalNumber/valueLimit)) +1);
    };



    console.log(option1, option2, option3, option4);

    $("#magicalNumberSpan").text(magicalNumber);
    $("#currentTotalSpan").text(currentTotal);

    $("#winSpan").text(wins);
    $("#lossesSpan").text(losses);

    // everytime you hae a new total you have to show it to the user. Print to the current total span

    // then I need to compare that new value to the magical number and check if it is < > = the magical number

    // write a conditional statement if the number is equal you win else/if it is bigger you lose

    // print the win or lose to the header in the HTML

};

$(".stone").on("click", function(){
    
});

// for each of the header tags i need to create and on.click function on the class .stone
// read the id and get the value from an array of values // add this value to the number


// Once the game has either been won or lost you will call initialize and reset the game. 
initialize();

