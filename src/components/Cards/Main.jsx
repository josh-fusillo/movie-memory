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
import phoneHand from '../../assets/phone.png';



// movie name and image comes up, have to move to that movie and snake will grow longer.
// when the movie is hit correctly, page refreshes/restarts to generate new goal movie and 
// random set of cards but the snake will not refresh until its game over. 
// if snake touches movie that is not current movie, game over
// let moviesArr = [];
// need an array of the 6 cards and has to appear in the card
// where QuestCard movie is in. 
// const foodTada = () => {
//   let min = moviesArr[0];
//   let max = moviesArr[2];
  // let test = moviesArr[Math.random() * moviesArr.length];
  // return moviesArr(Math.random() * (max - min) + min);
  // return [test]
// }

let randomIndex = Math.floor(Math.random() * 7)
const coordinates = [
  [10, 15],
  [10, 27],
  [10, 59],
  [88, 15],
  [88, 27],
  [88, 59]
];

let randomArray = coordinates[randomIndex]
console.log(randomArray)


// let min = coordinates[0];
// let max = coordinates[5];

// let randomFood = () => {
//   return Math.floor(Math.random() * coordinates.length) 
// } 


class Main extends React.Component {

  state = {
    // food: foodTada(),
    food: randomArray,
    speed: 200,
      direction: 'RIGHT',
      snakeDots: [
        [0,0],
        [2,0]
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
  }

  onKeyDown = (e) => {
    e = e || window.event;
    // eslint-disable-next-line default-case
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

    // eslint-disable-next-line default-case
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
  let head = this.state.snakeDots(this.state.snakeDots.length-1);
  let food = this.state.food;
  if (head[0] === food[0] && head[1] === food[1]) {
    this.setState({
    food: [0,1]
    })
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
          [2,0]
        ]
  })
}

  render () {
  return (
    <>
    <div className="main">
      <div className="main__left">
        <CardOne />
        <CardTwo />
        <CardThree />
      </div>

      <div className="main__right">
        <CardFour />
        <CardFive />
        <CardSix />
      </div>
    </div>

    <div className="game-area">
      <Snake snakeDots={this.state.snakeDots}/>
      <Food dot={this.state.food}/>
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