import React from "react";
import Snake from "../containers/Snake.js";
import {connect} from 'react-redux';
import "./GameBoard.css"

class GameBoard extends React.Component {
	constructor(props){
		super(props);
	}
    render(){
		return(
			<div className="gameboard">
				<h3>Snake</h3>
				<h5>-- Summer Guan</h5>
				<div>
					<span>Score: {this.props.score}</span>
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


export default connect(
   (state) => ({score: state.get("score")}))(GameBoard);

