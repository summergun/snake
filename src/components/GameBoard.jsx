import React from "react";
import Snake from "../containers/Snake.js";
import {connect} from 'react-redux';
import "./GameBoard.css"
import {bindActionCreators} from 'redux';
import {changeSpeed} from '../actions';

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
					<span>Speed: {this.props.speed}</span>
					<select value={this.props.speed} onChange={e => this.props.changeSpeed(e.target.value)}>
						<option value="100">Fast</option>
						<option value="200">Medium</option>
						<option value="800">Slow</option>
					</select>
				</div>
			</div>
		)
}
};


export default connect(
   (state) => ({score: state.get("score"),speed:state.get("speed")}),
   dispatch => ({ ...bindActionCreators({changeSpeed}, dispatch) })
)(GameBoard);

