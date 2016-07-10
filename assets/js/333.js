// 1. User loads page,  alert appears notifying of tic tac toe
// click "ok" to continue
//
// 2. players hover over and click on square # they wish to input their shape
//
// 3. prints out the updated input
//
// 4. check to see if there is a winner, if not game continues until there is one. At ninth turn, if nobody has won, alert that it is a draw and click ok to reset the game)

confirm("YO YO YO \nYOU KNOW WHO IT IZ \nYOU NEED 2 PEOPLES TO PLAY DIS TURNT-BASED GAME \nSO ONE OF \Y\'ALL BE X AND THE OTHERWHO BE O, YA DIG? \nTHE FIRST [\'n\' word] TO GET 3 DEM SHAPES (UP, DOWN, LEFT, RIGHT, DIAGONAL), WINS");



var winCom = [
//    0
  [0, 1, 2],
//    1
  [3, 4, 5],
//    2
  [6, 7, 8],
//    3
  [0, 3, 6],
//    4
  [1, 4, 7],
//    5
  [2, 5, 8],
//    6
  [0, 4, 8],
//    7
  [2, 4, 6]
];

function iNit () {
  var sQ = document.querySelectorAll(".square");
  var totalTurns = 0;

  // Includes function to reset board (to be called upon winner found) and
  function reset() {
    for (i = 0; i < sQ.length; i++) {
    sQ[i].innerText = null;
    totalTurns = 0;
    }
  }
  document.getElementById("quickrs").addEventListener("click", reset);


  // Includes turn-based input of either "x" or "o"
  for (i = 0; i < sQ.length; i++) {
      sQ[i].addEventListener("click", function() {
          if (this.innerText == "x" || this.innerText == "o") {
            var hammerTime = new Audio("/assets/audio/mchammer.mp3");
            hammerTime.play();
            alert("AYE YO \nDAS UNCOOL");
          } else if (totalTurns % 2 == 0) {
            this.className = "square butcher";
            this.innerText = "o";
            totalTurns++;
            cx();
          } else {
            this.className = "square hana";
            this.innerText = "x";
            totalTurns++;
            cx();
          }


            // Includes the loop to search for a winner among the 8 possibilities
            function cx() {
              var heReallyHelpedMe = winCom.length;
              for (i = 0; i < heReallyHelpedMe; i++) {
                if ((sQ[winCom[i][0]].innerText == "x") && (sQ[winCom[i][1]].innerText == "x") && (sQ[winCom[i][2]].innerText == "x")) {
                alert("X \GON\" GIVE IT YA!");
                reset();
                } else if ((sQ[winCom[i][0]].innerText == "o") && (sQ[winCom[i][1]].innerText == "o") && (sQ[winCom[i][2]].innerText == "o")) {
                  alert("o0O0o\nYEA");
                  reset();
                }
              } //end of for loop

              if (totalTurns === 9) {
                alert("\"D\" to the \"R\" to the \"A\" to the \"W\"");
                reset();
                }


            }

    });
  }
}
iNit();
