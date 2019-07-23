$(document).ready(function () {

    function genRandNbr (minnbr,maxnbr) {

        // Kevin verify that these fuctions are using the correct parameters

         minnbr = Math.ceil(minnbr);
         maxnbr = Math.floor(maxnbr);
        
        //return Math.floor(Math.random() * (maxnbr - minnbr + 1)) + minnbr; 

        return Math.floor(Math.random() * ((Math.floor(maxnbr)) - ((Math.ceil(minnbr) + 1)) + minnbr));

    }

    function setMaxScore () {

        let randNumber = 0;
        let MatchScoreNbr = "";
        
        
        MatchScoreNbr = document.querySelector('#matchScore');

        //console.log("Current MatchScoreNbr: " + MatchScoreNbr);

        randNumber = genRandNbr (19,120);

        //console.log("randNumber = " + randNumber);

        MatchScoreNbr.textContent = randNumber;

    }

    function greenclick () {

        let newTotalScore = 0;
    
        let currentTotalScore = document.querySelector('#totalScore');

        let randNumber = genRandNbr (1,12);
    
        console.log("Current GreenStone Value is: " + randNumber);
    
        //newTotalScore = currentTotalScore.textContent + randNumber;

        console.log("Current TotalScore = " + Number(currentTotalScore.textContent));

        currentTotalScore.textContent = Number(currentTotalScore.textContent) + Number(randNumber);
   
    }

    function pinkclick () {

        let newTotalScore = 0;
    
        let currentTotalScore = document.querySelector('#totalScore');
        let randNumber = genRandNbr (1,12);
    
        console.log("Current GreenStone Value is: " + randNumber);
    
        newTotalScore = currentTotalScore.textContent + randNumber;
    
    
    }

    function yellowclick () {

        let newTotalScore = 0;
    
        let currentTotalScore = document.querySelector('#totalScore');
        let randNumber = genRandNbr (1,12);
    
        console.log("Current GreenStone Value is: " + randNumber);
    
        newTotalScore = currentTotalScore.textContent + randNumber;
    
    
    }

    function purpleclick () {

        let newTotalScore = 0;
    
        let currentTotalScore = document.querySelector('#totalScore');
        let randNumber = genRandNbr (1,12);
    
        console.log("Current GreenStone Value is: " + randNumber);
    
        newTotalScore = currentTotalScore.textContent + randNumber;
    
    
    }

    
    //Main Section
    
    setMaxScore();  //Call the setMaxScore function
    
    $("#greenStone").on("click", greenclick);

    $("#pinkStone").on("click", pinkclick);

    $("#yellowStone").on("click", yellowclick);

    $("#purpleStone").on("click", purpleclick);


    
});