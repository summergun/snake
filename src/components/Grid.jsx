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
        //speed doesnt change when props speed is updated
        this.timer = setInterval(this.tick, this.props.speed);
    }

    componentWillUnmount() {
        this.timer = null;
        clearInterval(this.timer);
    }

    componentWillReceiveProps(nextProps) {
        //Check if the speed has changed
        if(this.props.speed !== nextProps.speed){
            clearInterval(this.timer);
            this.timer = setInterval(this.tick, nextProps.speed);
        }
    }

    tick = () => {
        if (this.props.moving) {
            this.props.tick();
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
                 {/*<button onClick={()=> this.props.reStart()}>Restart</button>*/}
                </div>
        )
    }
}

export default connect(
   (state) => ({rows: state.get("rows"), cols: state.get("cols"), snakeArray:state.get("snakeArray"),
    foodArray:state.get("foodArray"), speed: state.get('speed'), moving: state.get('moving')}),
    dispatch => ({...bindActionCreators({tick,toggleMove}, dispatch)})
)(Grid);

