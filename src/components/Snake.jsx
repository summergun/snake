import React, {PropTypes} from 'react';
import Grid from './Grid';
import "./Snake.css";

class Snake extends React.Component {
    constructor(props) {
        super(props);
        this.handleKey = this.handleKey.bind(this);
    }

    handleKey (e) {
		console.log("this is handlekey",this.props.moving, this.props.direction);
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
			// case 80:
			// 	if(!this.props.gameover){
			// 		if(this.props.moving){
			// 			this.props.toggleMove();
			// 			clearInterval(this.timer)
			// 		}
			// 		else {
			// 			this.props.toggleMove();
			// 			this.timer=setInterval(this.props.move,this.props.speed)
			// 		}
			// 	}
			// 	break;
            default:
            break;
        }
    }
    
    componentDidMount(){
        window.addEventListener("keydown", this.handleKey, true);
    }

	shouldComponentUpdate(nextProps,nextState) {
		let snakeArray = nextProps.snakeArray;
		let snakeBody = snakeArray.slice(0,-1);
		let head = snakeArray.last();
		return true;
	}

	componentWillUnmount(){
		window.removeEventListener("keydown",this.handleKeyDown);
		if(this.timer!==undefined){
			clearInterval(this.timer);
		}
		
	}
        render(){ 
			
			return (
            <div className="snake" >
				<Grid cols={20} rows={20} />
				<div>
					{this.props.snakeArray.map((pos,index)=>(
						<span className="snake-body" key={pos.get("x")+"-"+pos.get("y")} style={{left:pos.get("x")*20,top:pos.get("y")*20}}></span>
						))}
				</div>
				
			</div>
			)

        }
    }

    export default Snake;


