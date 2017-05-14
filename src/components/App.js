import React from "react";
import GameBoard from "./GameBoard.jsx"
import Grid from "./Grid.jsx"
import Snake from '../containers/Snake.js'


const App=()=>{
	return (
		<div className="app">>
            <GameBoard />
            <Snake />
		</div>
	)
	
}

export default App;