import React, {PropTypes} from "react";
import './Grid.css';
import {connect} from 'react-redux';
import {tick} from '../actions';
import {bindActionCreators} from 'redux';
import './Snake.css';
import Snake from "../containers/Snake.js"

class Grid extends React.Component {
    constructor (props){
        super (props)
    }

    componentWillMount() {
        this.interval = setInterval(this.props.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {cols, rows, snakeArray} = this.props;
        let gridArray =[];

        for (let y = 0; y < rows; ++y) {
            for (let x = 0; x < cols; ++x) {
                const hasSnakeDot = snakeArray.find(dot => (dot.x === x && dot.y === y));
                gridArray.push(<span className={`cell ${hasSnakeDot ? 'snake-body' : ''}`} key={`${y},${x}`}></span>)
            }
        }
        console.log("hello", rows, cols);
        return (
            <div className = "grid">
                 {gridArray}
                </div>
        )
    }
}

export default connect(
   (state) => ({rows: state.get("rows"), cols: state.get("cols"), snakeArray:state.get("snakeArray")}),
    dispatch => ({...bindActionCreators({tick}, dispatch)})
)(Grid);