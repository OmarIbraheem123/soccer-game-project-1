const ball = document.getElementById('ball')
const goalie = document.getElementById('goalie')
const goal = document.getElementById('goal')
let score = 0 
let level = 1
let lives = 3
const ballOrigin = ball.getBoundingClientRect();

document.body.addEventListener("keydown", (event) => {
    if (event.key === "a" ) {
     ball.style.left = `${parseInt(ball.getBoundingClientRect().x)-5}px`
     console.log('hi')
    }else if (event.key === "d") {
        ball.style.left = `${parseInt(ball.getBoundingClientRect().x)+5}px`
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
    alert('hi')
}}else if (ball.getBoundingClientRect().y < goalie.getBoundingClientRect().y-25) {
    ball.style.top = `${ballOrigin.y}px`
    ball.style.left = `${ballOrigin.x}px`
    score += 1
    alert("GOAL!!!!")
}
}

const collisionInterval = setInterval(collisionDetection, 50)













/*----- constants -----*/


	/*----- state variables -----*/


	/*----- cached elements  -----*/


	/*----- event listeners -----*/


	/*----- functions -----*/