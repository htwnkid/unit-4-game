$(document).ready(function () {

    let totalWins = 0;
    let totalLosses = 0;
    let currentMatchScore = 0;
    let greenstnval = 0;
    let pinkstnval = 0;
    let yellowtnval = 0;
    let purplestnval = 0;


    function genRandNbr (minnbr,maxnbr) {

        // Kevin verify that these fuctions are using the correct parameters

         minnbr = Math.ceil(minnbr);
         maxnbr = Math.floor(maxnbr);
        
        //return Math.floor(Math.random() * (maxnbr - minnbr + 1)) + minnbr; 

        return Math.floor(Math.random() * ((Math.floor(maxnbr)) - ((Math.ceil(minnbr) + 1)) + minnbr));

    }

    function setMatchScore () {

        let randNumber = 0;
        let MatchScoreNbr = "";
        
        
        MatchScoreNbr = document.querySelector('#matchScore');

        //console.log("Current MatchScoreNbr: " + MatchScoreNbr);

        randNumber = genRandNbr (19,120);

        //console.log("randNumber = " + randNumber);

        currentMatchScore = randNumber;

        MatchScoreNbr.textContent = randNumber;
        
    }

    function resetTotalScore () {

        let lv_totalScore = 0;
        let lv_totalScore_ptr = "";
        
        //Obtain the currently displayed totalLosses value displayed on screen

        lv_totalScore_ptr = document.querySelector('#totalScore');

        lv_totalScore_ptr.textContent = lv_totalScore = 0;
        
    }


    function setTotalLosses () {

        let lv_totalLosses = 0;
        let lv_totalloss_ptr = "";
        
        //Obtain the currently displayed totalLosses value displayed on screen

        lv_totalloss_ptr = document.querySelector('#totlossScore');

        lv_totalLosses = Number(lv_totalloss_ptr.textContent);

        lv_totalLosses += lv_totalLosses + 1;

        lv_totalloss_ptr.textContent = lv_totalLosses;
        
    }

    function setTotalWins () {

        let lv_totalWins = 0;
        let lv_totalWins_ptr = "";
        
        //Obtain the currently displayed totalLosses value displayed on screen

        lv_totalWins_ptr = document.querySelector('#totwinScore');       //returns a nonnumeric pointer

        lv_totalWins = Number(lv_totalWins_ptr.textContent);

        lv_totalWins += lv_totalWins + 1;

        lv_totalWins_ptr.textContent = lv_totalWins;
        
    }

    function setStoneVals () {

        greenstnval = genRandNbr (1,12);
        pinkstnval = genRandNbr (1,12);
        yellowstnval = genRandNbr (1,12);
        purplestnval = genRandNbr (1,12);
            
    }

    function greenclick () {

        let newTotalScore = 0;
    
        let currentTotalScore = document.querySelector('#totalScore');

            
        //console.log("Current GreenStone Value is: " + randNumber);
            
        //console.log("Current TotalScore = " + Number(currentTotalScore.textContent));

        newTotalScore = Number(currentTotalScore.textContent) + greenstnval;

        currentTotalScore.textContent = Number(currentTotalScore.textContent) + greenstnval;

        if (newTotalScore > currentMatchScore) {

            setTotalLosses ();

            resetTotalScore ();

            setMatchScore ();

            alert("You Lost the Game");
            

        } else if (newTotalScore === currentMatchScore) {

            setTotalWins ();

            resetTotalScore ();

            setMatchScore ();

            alert("You Won the Game");
            

        }
        
   
    }

    function pinkclick () {

        let newTotalScore = 0;
    
        let currentTotalScore = document.querySelector('#totalScore');

            
        //console.log("Current GreenStone Value is: " + randNumber);
            
        //console.log("Current TotalScore = " + Number(currentTotalScore.textContent));

        newTotalScore = Number(currentTotalScore.textContent) + pinkstnval;

        currentTotalScore.textContent = Number(currentTotalScore.textContent) + pinkstnval;

        if (newTotalScore > currentMatchScore) {

            setTotalLosses ();

            resetTotalScore ();

            setMatchScore ();

            alert("You Lost the Game");
            

        } else if (newTotalScore === currentMatchScore) {

            setTotalWins ();

            resetTotalScore ();

            setMatchScore ();

            alert("You Won the Game");
            

        }
        
   
    }
    
    function yellowclick () {

        let newTotalScore = 0;
    
        let currentTotalScore = document.querySelector('#totalScore');

            
        //console.log("Current GreenStone Value is: " + randNumber);
            
        //console.log("Current TotalScore = " + Number(currentTotalScore.textContent));

        newTotalScore = Number(currentTotalScore.textContent) + yellowstnval;

        currentTotalScore.textContent = Number(currentTotalScore.textContent) + yellowstnval;

        if (newTotalScore > currentMatchScore) {

            setTotalLosses ();

            resetTotalScore ();

            setMatchScore ();

            alert("You Lost the Game");
            

        } else if (newTotalScore === currentMatchScore) {

            setTotalWins ();

            resetTotalScore ();

            setMatchScore ();

            alert("You Won the Game");
            

        }
        
   
    }

    function purpleclick () {

        let newTotalScore = 0;
    
        let currentTotalScore = document.querySelector('#totalScore');

            
        //console.log("Current GreenStone Value is: " + randNumber);
            
        //console.log("Current TotalScore = " + Number(currentTotalScore.textContent));

        newTotalScore = Number(currentTotalScore.textContent) + purplestnval;

        currentTotalScore.textContent = Number(currentTotalScore.textContent) + purplestnval;

        if (newTotalScore > currentMatchScore) {

            setTotalLosses ();

            resetTotalScore ();

            setMatchScore ();

            alert("You Lost the Game");
            

        } else if (newTotalScore === currentMatchScore) {

            setTotalWins ();

            resetTotalScore ();

            setMatchScore ();

            alert("You Won the Game");
            

        }
        
   
    }

    
    //Main Section
    
    setMatchScore();                                //Call the setMatchScore function

    setStoneVals();                                //Sets the values of each stone
    
    $("#greenStone").on("click", greenclick);

    $("#pinkStone").on("click", pinkclick);

    $("#yellowStone").on("click", yellowclick);

    $("#purpleStone").on("click", purpleclick);


    
});