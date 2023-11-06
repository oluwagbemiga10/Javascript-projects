
let guesses = 0
let guessSubmit = document.getElementById("guesssubmit")
let guessResult = document.getElementById("guessresult")

    

function guessButton(){
    let mathes = Math.floor(Math.random()*6) + 1
    console.log(mathes)

    let inputed = document.getElementById("guessfield").value
    console.log(inputed)
    guesses += 1

     if(mathes == inputed){
        guessResult.textContent = "You guess right, it took you" + " " + guesses + " guesses to get it"
     }else if(mathes > inputed ){
            guessResult.textContent = "You are not there yet"
      }else if(mathes < inputed){
            guessResult.textContent = "Your guess is above the number"
      }else{
   guessResult.textContent = "Pick a number"
}
}
