import React, {PropTypes} from "react";
import './Grid.css';
import {connect} from 'react-redux';
import {tick,toggleMove} from '../actions';
import {bindActionCreators} from 'redux';
import './Snake.css';
import Snake from "../containers/Snake.js"

class Grid extends React.Component {
    constructor (props){
        super (props)
    }

    componentWillMount() {
        this.tick();
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    tick = () => {
        if (this.props.moving) {
            this.props.tick();
            this.timeout = setTimeout(this.tick, this.props.speed);
        }
    };

    render() {
        const {cols, rows, snakeArray,foodArray} = this.props;
        let gridArray =[];
        let foodStyle = {left:foodArray.get("x")*20, top:foodArray.get("y")*20};

        for (let y = 0; y < rows; ++y) {
            for (let x = 0; x < cols; ++x) {
                const hasSnakeDot = snakeArray.find(dot => (dot.x === x && dot.y === y));
                gridArray.push(<span className={`cell ${hasSnakeDot ? 'snake-body' : ''}`} key={`${y},${x}`}></span>)
            }
        }
    
        return (
            <div className = "grid">
                 {gridArray} 
                 <span className="snake-food" style={foodStyle}></span>
                </div>
        )
    }
}

export default connect(
   (state) => ({rows: state.get("rows"), cols: state.get("cols"), snakeArray:state.get("snakeArray"),
    foodArray:state.get("foodArray"), speed: state.get('speed'), moving: state.get('moving')}),
    dispatch => ({...bindActionCreators({tick,toggleMove}, dispatch)})
)(Grid);