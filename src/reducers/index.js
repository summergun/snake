// import {Map,List,fromJS,is} from "immutable" ;

export const initialState = {
    snakeArray:[{x:1,y:1},{x:1,y:2},{x:1,y:3}],
    foodArray:{x:5,y:6},
    direction:"RIGHT",
    moving:false,
    speed:200,
    score:0,
    rows: 20,
    cols: 20,
    gameover:false
};

const moveSnakeDot = (dot, dir) => {
    dot = { ...dot };
    switch(dir) {
        case 'RIGHT':
        dot.x++;
        break;
        case 'LEFT':
        dot.x--;
        break;
        case 'UP':
        dot.y--;
        break;
        case 'DOWN':
        dot.y++;
        break;
    }
    return dot;
};

const move = (state) =>{
    let snakeArray = [ ...state.snakeArray];
    const newDot = moveSnakeDot(snakeArray[0], state.direction);
    const nextSnakeArray = [newDot, ...snakeArray.slice(0, snakeArray.length - 1)];
    return { ...state, snakeArray: nextSnakeArray };
}



const game = (state = initialState,action)=>{
    switch(action.type) {
        case "TICK":
        return move(state);


        case "CHANGE_DIRECTION":
        const nextState = {...state};
        nextState.direction = action.direction;
        return nextState;

        
        default:
        return state;
    }
}

export default game;