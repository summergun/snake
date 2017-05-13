import React,{PropTypes} from "react"
import "./GameBoard.css"

class GameBoard extends React.Component {
    render(){
		return(
			<div className="gameboard">
				<h3>Snake</h3>
				<h5>-- Summer Guan</h5>
				<div>
					<span>Score</span>
					<span>Speed</span>
					<select>
						<option value="100">Fast</option>
						<option value="200">Medium</option>
						<option value="300">Slow</option>
					</select>
				</div>
			</div>
		)
}
};


export default GameBoard;