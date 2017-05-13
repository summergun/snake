import Snake from "../components/Snake.jsx"
import {connect} from "react-redux"
import {changeDirection} from "../actions/index.js"

const mapStateToProps=(state)=>{
	return {
		snakeArr:state.get("snakeArr"),
		foodArr:state.get("foodArr"),
		speed:state.get("speed"),
		moving:state.get("moving"),
		direction:state.get("direction"),
		gameover:state.get("gameover")
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {

		changeDirection:(direction)=>{dispatch(changeDirection(direction))},

	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Snake)