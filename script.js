//Resources from Canvas API 
const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

const ctx = canvas.getContext("2d");
//Then >> Drawing shapes with canvas >> Outer Circle

let size = 15
let color = "black"
let isPressed = false
//making variables global to use them in different places
let x
let y

canvas.addEventListener('mousedown', (e)=>{
    //when mousedown then isPressed = true
    isPressed = true

    x = e.offsetX
    y = e.offsetY

    //console.log(isPressed , x , y
})

//on release isPressed = false
canvas.addEventListener('mouseup', (e)=>{
    //when mouse released then  isPressed = false
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e)=>{
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        //console.log(x2,y2)
        drawCircle(x2,y2)
        drawLine(x,y,x2,y2)
        
        x = x2 
        y=y2
    }
})

function drawCircle(x,y){
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2, true); // Outer circle
    ctx.fillStyle = color
    // let's fill the circle
    ctx.fill()
}
function drawLine(x1,y1,x2,y2) {
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    //strokeStyle it's as a border
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

//drawCircle(100,200)
//drawLine(300,300,200 , 500)

//doing the color element
colorEl.addEventListener('change', (e)=> color = e.target.value)

//Clicking buttons for increase and decrease
increaseBtn.addEventListener('click', () => {
    size +=5

    if(size > 50) {
        size = 50
    }
    //Update size on screen
    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    if(size<=5){
        size =5
    }
    else{
        size-=5
    }
    //Update size on screen
    updateSizeOnScreen()
})

function updateSizeOnScreen(){
    sizeEl.innerText = size; 
}

//A method called clear to clear canvas
clearEl.addEventListener('click' , ()=> ctx.clearRect(0,0,canvas.width, canvas.height))

