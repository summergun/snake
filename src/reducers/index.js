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
    gameover:false,
})


//get the value from the list
//set will 

const move = (state) => {
   
    let food = state.get("foodArray");
    let snakeArray = state.get("snakeArray");
    let last = snakeArray.last();
    let score = state.get("score");
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

    if (next.get('x') >= state.get('cols') || next.get('x') < 0 || next.get('y') >= state.get('rows') || next.get('y') < 0) {
        return state.set('moving', false);
    }
    
    if (checkArray(state.get('snakeArray'), next.get('x'), next.get('y'))) {
        return state.set('moving', false);
    }
    if(is(next,food)){
        return  state.update("snakeArray", list=>list.push(next))
                .update("score", score=>score+1)
                .set("foodArray", Map(foodPosition(snakeArray)))      
    }
    else {
    return state.get("direction")?state.update("snakeArray", list=>list.skip(1).push(next)):state;
}
    
};


// check if x, y are the same position

const checkArray = (arr, x, y) => arr.find(item => item.get('x') === x && item.get('y') === y);

const foodPosition = (snakeArray) => {
    let x=Math.floor(Math.random()*20);
    let y=Math.floor(Math.random()*20);
    while(checkArray(snakeArray,x,y)){
        x=Math.floor(Math.random()*20);
        y=Math.floor(Math.random()*20);
    }
    return {x,y}
}



const game = (state = initialState,action)=>{
    switch(action.type) {

        case "CHANGE_DIRECTION":
        return state.set("direction",action.direction);
        
        case "CHANGE_SPEED":
        return state.set("speed",action.speed);

         case "TICK":
         if (state.get("moving")) return move(state);
         else return state;

         case "RESTART":
         return state.merge(initialState);
         //.merge(initialState);

        case "GAMEOVER":
        return state.set("gameover",true);

        
        default:
        return state;
    }
}

export default game;