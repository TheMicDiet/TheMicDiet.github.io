const tetris = document.getElementById("tetris")
const scoreDisplay = document.getElementById("score")
const gameover = document.getElementById("gameoverfield")
let highscore = (localStorage.getItem("highscore") === null) ? 0 : localStorage.getItem("highscore")
const highscoreDisplay = document.getElementById("highscore").innerText = "Highscore: " + highscore

tetris.width = 800
tetris.height = (tetris.width / 2) * 3
 
const scaleOfBlock = tetris.width / 20
const context = tetris.getContext('2d')
context.scale(scaleOfBlock, scaleOfBlock)
context.fillStyle = "#191919"
context.fillRect(0,0,tetris.width,tetris.height)

const gamewidth = tetris.width/scaleOfBlock
const gameheight = tetris.height/scaleOfBlock

let gameboard = initGameboard()
let status = true
const blocks = [
    [[1,1,0],
     [0,1,1],
     [0,0,0]],    

    [[0,2,0,0],
    [0,2,0,0],
    [0,2,0,0],
    [0,2,0,0]],   

    [[0,3,0],
    [0,3,0],
    [3,3,0]],

    [[0,4,0],
    [0,4,0],
    [0,4,4]],
    
    [[5,5],
    [5,5]],
    
    [[0,6,6],
    [6,6,0],
    [0,0,0]],
    
    [[0,0,0],
    [0,7,0],
    [7,7,7]],    
]


         

let player = {
    position: {
        x: Math.floor(gamewidth/2) -1,
        y: 0
    },
    matrix: randomBlock(),
    moveDownPlayer : function() {
        player.position.y++        
        if(collide(player, gameboard)) {            
            player.position.y--
            merge(gameboard, player)  
            sweep(gameboard)            
            player.reset()
        }
    },
    reset: function() {
        player.matrix = randomBlock()
        player.position.x =  Math.floor(gamewidth/2) -1
        player.position.y = 0
        if(collide(player, gameboard)) {
            gameboard.forEach(row => {
                row.fill(0)           
            })
            localStorage.setItem("highscore", (highscore < player.score) ? player.score : highscore)
            highscoreDisplay.innerText = localStorage.getItem("highscore")
            player.score = 0
            status = false           
            
        }
    },
    score: 0
}

function gameOver() {
    context.fillStyle = "#191919"
    context.fillRect(0,0,tetris.width,tetris.height)
    context.fillStyle = "#FFFFFF"    
    context.font = '2px sans-serif'
    context.fillText("Game over",5 ,5)
    context.font = '1px sans-serif'
    context.fillText("Press any button to retry.",4 ,10)
}

function draw() {
    context.fillStyle = "#191919"
    context.fillRect(0,0,tetris.width,tetris.height)
    drawMatrix(gameboard,{x:0,y:0})
    drawMatrix(player.matrix, player.position)
}


function initGameboard() {
    let gameboard = new Array(gameheight)
    for (let i = 0; i < gameheight; i++) {
        gameboard[i] = new Array(gamewidth)
        gameboard[i].fill(0)
    }
    return gameboard
}

function drawMatrix(matrix, offset) {   

    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = colorChooser(value)
                context.fillRect(x + offset.x,y + offset.y, 1, 1)
            }
        })
    })    
}

function colorChooser(value) {
    switch(value) {
        case 1: return "#FA0707"
        case 2: return "#0031F9"
        case 3: return "#00E626"
        case 4: return "#FCED03"
        case 5: return "#00FFF7"
        case 6: return "#8700FF"
        case 7: return "#FF00C5"
    }

}

function collide(player, gameboard) {
    for (let y = 0; y < player.matrix.length; y++) {
        for (let x = 0; x < player.matrix[y].length; x++) {
             if(player.matrix[y][x] !== 0 && (gameboard[y + player.position.y] && gameboard[y + player.position.y][x + player.position.x]) !== 0) {
                return true
            }  

        }
    }
    return false

}

function merge(gameboard, player) {

    for(let y = 0; y < player.matrix.length; y++) {
        for(let x = 0; x < player.matrix[y].length; x++) {
            if(player.matrix[y][x] !== 0) {
                gameboard[y + player.position.y][x + player.position.x] = player.matrix[y][x]
            }
            
        }
    }   

}

function rotateMatrix(matrix) {
        
    let N = matrix.length
    // Consider all squares one by one
    for (let x = 0; x < N / 2; x++) {
        // Consider elements in group of 4 in 
        // current square
        for (let y = x; y < N-x-1; y++) {
            // store current cell in temp variable
            let temp = matrix[x][y]; 
            // move values from right to top
            matrix[x][y] = matrix[y][N-1-x]; 
            // move values from bottom to right
            matrix[y][N-1-x] = matrix[N-1-x][N-1-y]; 
            // move values from left to bottom
            matrix[N-1-x][N-1-y] = matrix[N-1-y][x]; 
            // assign temp to left
            matrix[N-1-y][x] = temp;
        }
    }
    let offset = 1;
    let oldpos = player.position.x
    while(collide(player, gameboard)) {
        
        player.position.x += offset
        if(offset > 0) {
            offset = -(offset + 1)
        } else {
            offset = -offset
        }

        if(offset > 3) {
            player.position.x = oldpos
            return
        }
        
    }
     
    
}

let time = 0
let interval = 300
let timeOld = 0;
function update(timer = 0) {
    
    let delta = timer - timeOld
    timeOld = timer
    time += delta
    while (time >= interval && status){
        time -= interval;
        player.moveDownPlayer()
               
    }
    if(status) {
        draw()
    } else {
        gameOver()

    }
    
    scoreDisplay.innerText = 'Score: ' + player.score       
    window.requestAnimationFrame(update)
}


function movePlayer(direction) {

    player.position.x += direction
    if(collide(player, gameboard)) {
        player.position.x -= direction
    }
}

function randomBlock() {
    let randomNumber = Math.floor(Math.random() * blocks.length)
    return blocks[randomNumber]      

}

function sweep(gameboard) {
    let scoreForRow = 10
    let score = 0
    let multiplier = 1    
    for(let i = 0; i < gameboard.length; i++) {
        if(gameboard[i].every(element => element !== 0)) {            
            gameboard.pop()          
            gameboard.unshift(new Array(gameboard[0].length).fill(0))            
            score += scoreForRow * multiplier
            multiplier++           
        }
        
    }
    
    player.score += score   
}

document.addEventListener('keydown', event => {

    if(event.keyCode === 37) {
        movePlayer(-1)
        status = true
    } else if(event.keyCode ===  39) {
        movePlayer(1)
        status = true
    } else if(event.keyCode ===  38) {
        rotateMatrix(player.matrix)
        status = true        
    } else if(event.keyCode ===  40) {
        player.moveDownPlayer()
        status = true
    }
})

let mc = new Hammer(tetris) 
mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
mc.on("swipeleft", function(ev) {
    movePlayer(-1)
    status = true
})
mc.on("swiperight", function(ev) {
    movePlayer(1)
    status = true
})
mc.on("swipeup", function(ev) {
    rotateMatrix(player.matrix)
    status = true
});
mc.on("swipedown", function(ev) {
    player.moveDownPlayer()
    status = true
});

update()