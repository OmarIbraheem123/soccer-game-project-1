// establishing variables 
const ball = document.getElementById('ball')
const goalie = document.getElementById('goalie')
const goal = document.getElementById('goal')
const scoreEl = document.getElementById('score')
let collisionInterval
let score = 0 
let lives = 3
 // Assign variable names to buttons
 const startBtn = document.getElementById('start-button')
 const easyBtn = document.getElementById('easy-button')
 const normalBtn = document.getElementById('normal-button')
 const hardBtn = document.getElementById('hard-button')
 const resetBtn = document.getElementById('reset-button')

// make ball go back to original position
const ballOrigin = ball.getBoundingClientRect();

//goalie size
goalie.style.width = '100px'

// dont show reset buttton at start
resetBtn.style.display = 'none'
render()
//easy button to show
  easyBtn.addEventListener('click', ()=>{
    easyBtn.style.display = 'none'
    normalBtn.style.display = 'none'
    hardBtn.style.display = 'none'
    speedEasy()

  })
  //normal button to show 
    normalBtn.addEventListener('click', ()=>{
        easyBtn.style.display = 'none'
        normalBtn.style.display = 'none'
        hardBtn.style.display = 'none'
        speedNormal()

       })
       //hard button to show
    hardBtn.addEventListener('click', ()=>{
        easyBtn.style.display = 'none'
        normalBtn.style.display = 'none'
        hardBtn.style.display = 'none'
        speedHard()
    })
    //reset button to show 
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


// Easy mode 
function speedEasy (num) {
    ball.style.transition = 'top 5s'
    goalie.style.animation = 'goaliemove 6s ease-in-out infinite'
}
// Normal mode
function speedNormal (num) {
    ball.style.transition = 'top 4s'
    goalie.style.animation = 'goaliemove 4s ease-in-out infinite'
}
// Hard mode 
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
// what happens when you lose and lives hit 0
function lost () {
    if (lives <= 0 ){
    resetBtn.style.display = 'block'}
}












