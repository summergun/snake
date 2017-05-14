import Snake from "../components/Snake.jsx"
import {connect} from "react-redux"
import {changeDirection,toggleMove,tick, gameOver,reStart,changeSpeed} from "../actions/index.js"

const mapStateToProps=(state)=>{
	return {
		snakeArray:state.get("snakeArray"),
		foodArray:state.get("foodArray"),
		score:state.get("score"),
		speed:state.get("speed"),
		moving:state.get("moving"),
		direction:state.get("direction"),
		gameover:state.get("gameover")
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
        tick:()=>{dispatch(tick)},
        toggleMove:()=>{dispatch(toggleMove)},
		changeDirection:(direction)=>{dispatch(changeDirection(direction))},
		changeSpeed:()=>(dispatch(changeSpeed)),
		reStart:()=>{dispatch(reStart)},
		gameOver:()=>{dispatch(gameOver())}

	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Snake)