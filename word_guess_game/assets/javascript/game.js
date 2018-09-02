
var questions = [
    { q: "Life is like a box of _____ ", a: "chocolates" },
    { q: "What was first mate Dan's rank in the Army?", a: "lieutenant" },
    { q: "She tastes like _____", a: "cigarettes"},
    { q: " Well, you better tuck that in. Gonna get that caught on a _____", a: "tripwire"},
    { q: "What town in Alabama is Forrest from?", a: "greenbow"},
    { q: "What is Bubba's first name?", a: "benjamin"},
    { q: "Something jumped up and bit me right in the ___", a: "buttocks"},
    { q: "Me and Jenny goes together like peas and ___", a:"carrots"},
    { q: "There was Dallas, from ___", a:"phoenix"},

];
var userInputString = [] 
var underscoreArray = []
var score = 0;
var guesses = 9;




  //Sets up base # for score and guesses left
 document.querySelector("#guesses").innerHTML = "Guesses left: " + guesses;
 document.querySelector("#score").innerHTML = "Score: " + score;
 document.querySelector("#let-guess").innerHTML = "Letters guessed:  " + userInputString;

 //Randomly selects a question randomly form the question array
  var computerObject = questions[Math.floor(Math.random() * questions.length)];
   renderQuestion()
   
  console.log(computerObject.q)
  console.log(computerObject.a)

  //setup for function on running through the whole array
   function renderQuestion(){
  document.querySelector('#question').innerHTML = computerObject.q;
  for (i=0; i<computerObject.a.length; i++) {
      underscoreArray.push(" _")
      console.log(computerObject.q)
      
  };
  //uts underscores in place makes sure there are no commas between 
  document.querySelector('#blank-word').innerHTML = underscoreArray.join("");
   }
  console.log(computerObject.a)
  console.log(underscoreArray)


  //when the user presses a key, it does this 
  document.onkeyup = function(event) {
    //converts all input to lower case and changes underscores into letters when correct key is pressed
    var userInput = event.key.toLowerCase();
    for(var i=0; i<computerObject.a.length; i++ ) {
       if (computerObject.a[i] === userInput) {
           underscoreArray[i] = userInput
       }
       else {
           console.log("NO")
       }
    };
   
    console.log(guesses)
    //puts the letters you type on the document where spaces were 
     document.querySelector('#blank-word').innerHTML = underscoreArray.join("");
     
     var string1 = underscoreArray.join("");
     console.log(string1)
     console.log(computerObject.a)
     if (string1 === computerObject.a){
     
     console.log("done")
     startover() }
     else {userInput}
     
    };
    
//to loop the questions once the answers match
    function startover(){console.log("startover")

    //every time the game resets due to a correct question the score goes up one
    document.querySelector("#score").innerHTML = "Score: " + ++score

    //selects new random question and makes underscores associated with new question
     computerObject = questions[Math.floor(Math.random() * questions.length)];
     underscoreArray = [];
     
     renderQuestion()
    
       
       
  };


    
    console.log(guesses)
  
  