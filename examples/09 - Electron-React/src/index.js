// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

const e = React.createElement;

class Eel extends React.Component {
    componentDidMount() {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.innerHTML = "document.write('This is output by document.write()!')";
        this.instance.appendChild(s);
    }

    render() {
        console.log('hi');
        return <div ref={el => (this.instance = el)}/>;
    }
}

class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {this.props.value}
        </button>
      );
    }
  }
  
class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i}/>;
    }

    render() {
        const status = 'Next player: X';

        return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>
            <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </div>
            <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </div>
        </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
        <div className="game">
            <div className="game-board">
            <Board />
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
        </div>
        
        );
    }
}
  
  // ========================================
  
const domContainer = document.querySelector("#root");
ReactDOM.render(e(Game), domContainer);
//   ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
//   );
  
