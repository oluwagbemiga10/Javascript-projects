let count = 0
const number = document.getElementById("number")
const btns = document.querySelectorAll(".btn")
const prevNum = document.getElementById("prevnum")

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const allbuttons = e.currentTarget.classList
        if(allbuttons.contains("increase")){
            count++
            number.style.color = "green"
        }else if(allbuttons.contains("decrease")){
            count--
            number.style.color= "red"
        }else if(allbuttons.contains("reset")){
            count = 0
            number.style.color= "black"
        }else{
            prevNum.textContent += " " + count + " " + "-" + " " + ","
            count = 0
            number.textContent = 0
        }
        number.textContent = count
    })
})

function save(){
    

}