
const ball = document.getElementById('ball')
const goalie = document.getElementById('goalie')
const goal = document.getElementById('goal')
const scoreEl = document.getElementById('score')
let collisionInterval
// const livesEl = document.getElementById('lives')
let score = 0 
let lives = 3
 // Assign variable names to buttons
 const startBtn = document.getElementById('start-button')
 const easyBtn = document.getElementById('easy-button')
 const normalBtn = document.getElementById('normal-button')
 const hardBtn = document.getElementById('hard-button')
 const resetBtn = document.getElementById('reset-button')


const ballOrigin = ball.getBoundingClientRect();


goalie.style.width = '100px'


resetBtn.style.display = 'none'
render()

  easyBtn.addEventListener('click', ()=>{
    easyBtn.style.display = 'none'
    normalBtn.style.display = 'none'
    hardBtn.style.display = 'none'
    speedEasy()

  }) 
    normalBtn.addEventListener('click', ()=>{
        easyBtn.style.display = 'none'
        normalBtn.style.display = 'none'
        hardBtn.style.display = 'none'
        speedNormal()

       })
    hardBtn.addEventListener('click', ()=>{
        easyBtn.style.display = 'none'
        normalBtn.style.display = 'none'
        hardBtn.style.display = 'none'
        speedHard()
    })
    resetBtn.addEventListener('click', ()=>{
        resetBtn.style.display = 'none'
        easyBtn.style.display = 'block'
        normalBtn.style.display = 'block'
        hardBtn.style.display = 'block'
     lives = 3
     score = 0
     render()
    })







// keyboard movement 
document.body.addEventListener("keydown", (event) => {
    if (event.key === "a" ) {
     ball.style.left = `${parseInt(ball.getBoundingClientRect().x)-10}px`
     console.log('hi')
    }else if (event.key === "d") {
        ball.style.left = `${parseInt(ball.getBoundingClientRect().x)+10}px`
        console.log('right')
    }else if(event.key === " ") {
        ball.style.top = "5px"
        console.log('shoot')
    }
  });
 
















  //colision

function collisionDetection() {
if(ball.getBoundingClientRect().y > goalie.getBoundingClientRect().y && ball.getBoundingClientRect().y < goalie.getBoundingClientRect().y + 149   ){  
    if(ball.getBoundingClientRect().x > goalie.getBoundingClientRect().x && ball.getBoundingClientRect().x < goalie.getBoundingClientRect().x + 100   ){
    ball.style.top = `${ballOrigin.y}px`
    ball.style.left = `${ballOrigin.x}px`
    lives -= 1
    render()
    alert('YOU MISSED!!! YOU SUCK!!!! ')
}}else if (ball.getBoundingClientRect().y < goalie.getBoundingClientRect().y-25) {
    ball.style.top = `${ballOrigin.y}px`
    ball.style.left = `${ballOrigin.x}px`
    score += 1  
    render()
    alert("GOAL!!!!")
}
}



function speedEasy (num) {
    ball.style.transition = 'top 5s'
    goalie.style.animation = 'goaliemove 6s ease-in-out infinite'
}

function speedNormal (num) {
    ball.style.transition = 'top 4s'
    goalie.style.animation = 'goaliemove 4s ease-in-out infinite'
}

function speedHard (num) {
    ball.style.transition = 'top 3s'
    goalie.style.animation = 'goaliemove 3s ease-in-out infinite'
}

function render () {
    clearInterval(collisionInterval)
    collisionInterval = setInterval(collisionDetection, 50)
scoreEl.innerHTML = `
<h1>${score}<h1>
<h2>${lives}<h2>`
lost()
}

function lost () {
    if (lives <= 0 ){
    resetBtn.style.display = 'block'}
}















/*----- constants -----*/


	/*----- state variables -----*/


	/*----- cached elements  -----*/


	/*----- event listeners -----*/


	/*----- functions -----*/