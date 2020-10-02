import React from 'react';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import CardThree from './CardThree';
import CardFour from './CardFour';
import CardFive from './CardFive';
import CardSix from './CardSix';
import './Main.scss'
import Snake from './Snake';
import Food from './Food';
// import phoneHand from '../../assets/phone.png';



const getFood = () => {
let randomIndex = Math.floor(Math.random() * 6)
const coordinates = [
  [10, 15],
  [10, 37],
  [10, 59],
  [88, 15],
  [88, 37],
  [88, 59]
];
return (coordinates[randomIndex])

}




class Main extends React.Component {

  state = {
  
    food: getFood(),
    speed: 200,
      direction: 'RIGHT',
      snakeDots: [
        [0,0],
        [2,0],
        [3,0],
        [4,0],
        [5,0],
        [6,0]
      ]
  }

  

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
    console.log()
  }

  componentDidUpdate() {
    this.checkIfOutOfBorders();
    this.checkIfCollapsed();
    this.checkIfEat();
  }

  onKeyDown = (e) => {
    e = e || window.event;
  
    switch (e.keyCode) {
        case 38:
          this.setState({direction: 'UP'});
          break;
         case 40:
          this.setState({direction: 'DOWN'});
          break;
         case 37:
          this.setState({direction: 'LEFT'});
          break;
         case 39:
          this.setState({direction: 'RIGHT'});
          break;
    }
  }

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length -1];

   
    switch (this.state.direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
    }
    
    dots.push(head);
    dots.shift();
    this.setState ({
      snakeDots: dots
    })
  }

checkIfOutOfBorders() {
  let head = this.state.snakeDots[this.state.snakeDots.length - 1];
  if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] <0) {
    this.onGameOver();
  }
}

checkIfCollapsed() {
  let snake = [...this.state.snakeDots];
  let head = snake[snake.length - 1];
  snake.pop();
  snake.forEach(dot => {
    if (head[0] === dot[0] && head[1] === dot[1]) {
      this.onGameOver()
    }
  })
}

checkIfEat() {
  let head = this.state.snakeDots[this.state.snakeDots.length - 1];
  let food = this.state.food;
  if (head[0] == food[0] && head[1] == food[1]) {
    this.setState({
    food: getFood()
    
    })
    console.log(this.state.food)
    this.enlargeSnake();
    this.increaseSpeed();
  }
}

enlargeSnake() {
  let newSnake = [...this.state.snakeDots];
  newSnake.unshift([])
  this.setState ({
    snakeDots: newSnake
  })
}

increaseSpeed() {
  if (this.state.speed > 10) {
    this.setState({
      speed:this.state.speed - 10
    })
  }
}

onGameOver(){
  // alert(`Game Over. Snake length is ${this.state.snakeDots.length}`)
  this.setState({
      speed: 200,
        direction: 'RIGHT',
        snakeDots: [
          [0,0],
          [2,0],
          [3,0],
          [4,0],
          [5,0],
          [6,0]
        ]
  })
}

  render () {
  return (
    <>
   

    <div className="game-area">
      <Snake snakeDots={this.state.snakeDots}/>
      
    </div>

    {/* <div>
      <img src={phoneHand} alt="hand holding phone" className="phone"/>
    </div> */}

    <div></div>
    </>
  );
}
}

export default Main;