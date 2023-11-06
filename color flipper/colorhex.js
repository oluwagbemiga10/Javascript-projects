const color = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const displayColor = document.getElementById("color")
const changeColor = document.getElementById("change")



changeColor.addEventListener('click', function (){
    let currentColor = "#"
    
    for (let i = 0; i < 6; i++){
       currentColor += color[getRandom()]
    }
    document.body.style.backgroundColor = currentColor
    displayColor.textContent = currentColor
    displayColor.style.color = currentColor
    changeColor.style.backgroundColor = currentColor
    
})

function getRandom(){
    let random = Math.floor(Math.random()*color.length)
    return random
}
