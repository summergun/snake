 import {Map,List,fromJS,is} from "immutable" ;


//Deeply converts JS objects and arrays to Immutable Maps and Lists.
export const initialState = fromJS ({
    snakeArray:[{x:1,y:1},{x:1,y:2},{x:1,y:3}],
    foodArray:{x:5,y:6},
    direction:"RIGHT",
    moving:true,
    speed:200,
    score:0,
    rows: 20,
    cols: 20,
    gameover:false
})


//get the value from the list
//set 

const move = (state) => {
    let food = state.get("foodArray");
    let snakeArray = state.get("snakeArray");
    let last = snakeArray.last();
    let next;
    switch(state.get("direction")){
		case "RIGHT":
			next=Map({x:last.get("x")+1,y:last.get("y")})
			break;
		case "LEFT":
			next=Map({x:last.get("x")-1,y:last.get("y")})
			break;
		case "UP":
			next=Map({x:last.get("x"),y:last.get("y")-1})
			break;
		case "DOWN":
			next=Map({x:last.get("x"),y:last.get("y")+1})
			break;
		default:
			break;
	}
    return state.get("direction")?state.update("snakeArray", list=>list.skip(1).push(next)):state;
};

// const move = (state) =>{
//     let snakeArray = [ ...state.snakeArray];
//     const newDot = moveSnakeDot(snakeArray[0], state.direction);
//     const nextSnakeArray = [newDot, ...snakeArray.slice(0, snakeArray.length - 1)];
//     return { ...state, snakeArray: nextSnakeArray };
// }



const game = (state = initialState,action)=>{
    switch(action.type) {
        case "TOGGLE_MOVE":
        return state.update("moving", m=>!m);

        case "CHANGE_DIRECTION":{
        return state.set("direction",action.direction);
    }

         case "TICK":
        return move(state);

        
        default:
        return state;
    }
}

export default game;