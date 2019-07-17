// This stores the values of the houses in an array
var randomNumberArray = [];

// This gives our game values we can easily manipulate later without changing a lot of code 
    // magicalLimit is the max value the number to guess can be
var magicalLimit = 120;
    // magicalLow is the lowest value the number to guess can be
var magicalLow= 19;
    // valueLimit is the number of houses or variables you are distributing the randoms numbers amongst
var numberOfHouses = 4;


var magicalNumber = 0;
var currentTotal = 0;

var wins = 0;
var losses = 0;

// My initialize function will run everytime the game is started or restarted by a win or loss
function initialize(){
    randomNumberArray = [];
    // this is the math problem to store the magicalNumber value
    magicalNumber = Math.floor(Math.random()*(magicalLimit-magicalLow+1)+magicalLow);
    // your current total against the magicalNumber
    currentTotal = 0;

    // this is going to continue giving the houses values based on if the value is already present in the array or not (no duplicates)
    while(randomNumberArray.length < numberOfHouses){
        var randomNumberMath =  Math.floor((Math.random() * 12) +1);
        // only push to the randomNumberArray if it is not already present returning a -1 index value
        if(randomNumberArray.indexOf(randomNumberMath) == -1){
            randomNumberArray.push(randomNumberMath);

        };
    };
    console.log(randomNumberArray);

    // assigns the appropriate text to the HTML for viewing content
    $("#magicalNumberSpan").text(magicalNumber);
    $("#currentTotalSpan").text(currentTotal);

    $("#winSpan").text(wins);
    $("#lossesSpan").text(losses);
};

// creating the on click event to record the value of that card to the currentTotalSpan
$(".houseCard").on("click", function(){
    var onClickValue = Number($(this).attr("id"));
    currentTotal += randomNumberArray[onClickValue];
    // the losing condition
    if(currentTotal > magicalNumber){
        losses++;
        $("#resultSpan").text("You Lost!");
        initialize();
    }
    //  the winning condition
    else if(currentTotal == magicalNumber){
        wins++;
        $("#resultSpan").text("You Win!");
        initialize();
    };


    $("#currentTotalSpan").text(currentTotal);
});


initialize();