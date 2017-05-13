export const changeDirection = (direction) => ({
    type:"CHANGE_DIRECTION",
    direction
})

export const toggleMove = () => ({
    type:"TOGGLE_MOVE"
})

export const moveForward= () => ({
    type:"MOVE_FORWARD"
})

export const tick = () => ({
    type:"TICK"
});
export const changeSpeed = (speed) => ({
    type:"CHANGE_SPEED",
    speed
});

export const gameOver=()=>({
    type:"GAMEOVER"
});

export const reStart = () => ({
    type:"RESTART"
});