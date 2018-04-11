import React from 'react';

import './styles.scss';

const STD_WIDTH = 500;
const STD_SIZE = 21;
const STD_INTERVAL = 700;
const STD_ACCELERATION_MULTIPLYER = 1.05;
const DIR_UP = [0, -1];
const DIR_RIGHT = [1, 0];
const DIR_DOWN = [0, 1];
const DIR_LEFT = [-1, 0];

function point_add(pt1, pt2) {
	return [pt1[0] + pt2[0], pt1[1] + pt2[1]];
}

function point_eq(pt1, pt2) {
	return (pt1[0] == pt2[0] && pt1[1] == pt2[1]);
}

class Game extends React.Component {
	constructor(props) {
		super(props);

		this.timer_tick = this.timer_tick.bind(this);
		this.init = this.init.bind(this);
		this.keydown = this.keydown.bind(this);
		this.fin = this.fin.bind(this);
		this.gen_food = this.gen_food.bind(this);
	}

	keydown(event) {
		var new_dir = undefined;
		switch (event.keyCode) {
			case 37: new_dir = DIR_LEFT; break;
			case 38: new_dir = DIR_UP; break;
			case 39: new_dir = DIR_RIGHT; break;
			case 40: new_dir = DIR_DOWN; break;
		}


		if (new_dir) {
			var pt = point_add(this.state.direction, new_dir);
			if (!(pt[0] == 0 && pt[1] == 0)) {
				this.setState({direction: new_dir});
			}
		}
	}

	fin() {
		document.removeEventListener("keydown", this.keydown);
	}

	init() {
		var size = Math.max(5, STD_SIZE);
		var snake = [
			[size / 2, size / 2 - 2],
			[size / 2, size / 2 - 1],
			[size / 2, size / 2]
		];
		
		var state = {
			size: size,
			snake: snake,
			started: false,
			interval: STD_INTERVAL,
			direction: DIR_UP,
			food: [[Math.random() % size, Math.random() % size], [Math.random() % size, Math.random() % size]],
		};

		document.addEventListener("keydown", this.keydown);

		this.setState(state);

		//var new_interval = parseInt(this.state.interval / STD_ACCELERATION_MULTIPLYER, 10);
	}

	componentWillMount() {
		this.init();
	}

	componentWillUpdate(nextProps, nextState) {
		if (this.state.started === false && nextState.started === true) {
			setTimeout(this.timer_tick, nextState.interval);
		}
	}

	gen_food() {
		return [[Math.random() % this.state.size, Math.random() % this.state.size], [Math.random() % this.state.size, Math.random() % this.state.size]];
	}

	timer_tick() {
		var snake = this.state.snake;
		snake.shift();
		snake.push(point_add(snake[snake.length - 1], this.state.direction));

		for (var i = 0; i < snake.length - 1; i++) {
			for (var j = i + 1; j < snake.length; j++) {
				if (point_eq(snake[i], snake[j])) {
					this.fin();
					return;
				}
			}
		}

		var food = this.state.food;
		
		if (point_eq(snake[0]))

		setTimeout(this.timer_tick, this.state.interval);

		this.setState({snake: snake, interval: this.state.interval, food: food});
	}
	
  render() {
		var _canvas = document.getElementById('canvas');
		if (_canvas) {
			var canvas = _canvas.getContext("2d");
			canvas.clearRect(0, 0, _canvas.width, _canvas.height);

			var edge = STD_WIDTH / STD_SIZE;
			var snake = this.state.snake;
			
			canvas.fillStyle="#000";
			for (var i in snake) {
				if (i == snake.length - 1) {
					canvas.fillStyle="#FF0000";					
				}
				canvas.fillRect(snake[i][0] * edge - edge / 2, STD_WIDTH - snake[i][1] * edge - edge / 2, edge, edge);
			}
		}

    return (
      <div className="GameOuter flex-row flex-start flex-align-center">
				<canvas id='canvas' width='500' height='500'></canvas>
				<button className='btn btn-std' onClick={ () => { this.setState({started: true}) } }>START</button>
      </div>
    );
  }
}

export default Game;
