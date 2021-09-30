const board = document.querySelector('#board')
const colors = ['#fe5e31', '#fe9001', '#fed3a5', '#72b8c9', '#5b7c7d']

let isStarted = false

const startBtn = document.querySelector('#start')
const clearBtn = document.querySelector('#clear')
const input = document.querySelector('#number')

startBtn.addEventListener('click', start)
clearBtn.addEventListener('click', clear)

input.addEventListener('change', () => {
    isStarted = false
})

function start() {
    if(!isStarted) {
        board.innerHTML = nul
        let SQUARES_NUMBER = input.value

        if(SQUARES_NUMBER > 700){
            SQUARES_NUMBER = 700
            input.value = SQUARES_NUMBER
            board.style.boxShadow = '0 0 10px #fe5e31'
            setTimeout(() => {
                board.style.boxShadow = 'none'
            }, 1300)
        } else if (SQUARES_NUMBER < 100) {
            SQUARES_NUMBER = 100
            input.value = SQUARES_NUMBER
            board.style.boxShadow = '0 0 10px #fe5e31'
            setTimeout(() => {
                board.style.boxShadow = 'none'
            }, 1300)
        }

        for(let i = 0; i < SQUARES_NUMBER; i++) {
            const square = document.createElement('div')
            square.classList.add('square')
        
            square.addEventListener('mouseover', setColor)
            square.addEventListener('mouseleave', removeColor)
        
            board.append(square)
        }
    
        isStarted = true
    }
}

function clear() {
    board.innerHTML = null
    input.value = 100
    isStarted = false
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)

    return colors[index]
}