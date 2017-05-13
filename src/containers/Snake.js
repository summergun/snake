import Snake from "../components/Snake.jsx"
import {connect} from "react-redux"
import {changeDirection,toggleMove,tick} from "../actions/index.js"

const mapStateToProps=(state)=>{
	return {
		snakeArray:state.get("snakeArray"),
		foodArray:state.get("foodArray"),
		speed:state.get("speed"),
		moving:state.get("moving"),
		direction:state.get("direction"),
		gameover:state.get("gameover")
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
        toggleMove:()=>{dispatch(toggleMove)},
        tick:()=>{dispatch(tick)},
		changeDirection:(direction)=>{dispatch(changeDirection(direction))},

	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Snake)