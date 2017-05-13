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
    if(is(next,food)){
        console.log(snakeArray);
        
        return  state.update("snakeArray", list=>list.push(next))
                .update("score", score=>score+1)
                .set("foodArray", Map(foodPosition(snakeArray)))
                
        
    }
    else {
    return state.get("direction")?state.update("snakeArray", list=>list.skip(1).push(next)):state;
    }
};


// check if x, y are the same position

const checkArray = (arr,x,y) =>{
    arr.filter(item => {return item.x===x&&item.y===y}).length>0?true:false;
}

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
        case "TOGGLE_MOVE":
        return state.update("moving", m=>!m);

        case "CHANGE_DIRECTION":
        return state.set("direction",action.direction);

         case "TICK":
        return move(state);

        
        default:
        return state;
    }
}

export default game;