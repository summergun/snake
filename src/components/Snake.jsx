import React, {PropTypes} from 'react';
import Grid from './Grid';
import "./snake.css";

class Snake extends React.Component {
    constructor(props) {
        super(props);
        this.handleKey = this.handleKey.bind(this);
    }

    handleKey (e) {
		console.log("this is handlekey");
		debugger;
        switch(e.keyCode){
			case 37:
				if(this.props.direction!="RIGHT"&&this.props.moving){
					this.props.changeDirection("LEFT")
				}
				break;
			case 38:
				if(this.props.direction!="DOWN"&&this.props.moving){
					this.props.changeDirection("UP")
				}
				break;
			case 39:
				if(this.props.direction!="LEFT"&&this.props.moving){
					this.props.changeDirection("RIGHT")
				}
				break;
			case 40:
				if(this.props.direction!="UP"&&this.props.moving){
						this.props.changeDirection("DOWN")
				}
				break;
            default:
            break;
        }
    }
    
    componentDidMount(){
		console.log("componentDidMount")
        window.addEventListener("keyDown", this.handleKey, true);
    }
        render(){
            <div className="snake" >
				<Grid cols={20} rows={20} />
				<div>
					{this.props.snakeArray.map((pos,index)=>(
						<span className="snake-body" key={pos.get("x")+"-"+pos.get("y")} style={{left:pos.get("x")*20,top:pos.get("y")*20}}></span>
						))}
				</div>
			</div>

        }
    }

    export default Snake;


