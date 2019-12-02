var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

var e = React.createElement;

var Eel = function (_React$Component) {
    _inherits(Eel, _React$Component);

    function Eel() {
        _classCallCheck(this, Eel);

        return _possibleConstructorReturn(this, (Eel.__proto__ || Object.getPrototypeOf(Eel)).apply(this, arguments));
    }

    _createClass(Eel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.innerHTML = "document.write('This is output by document.write()!')";
            this.instance.appendChild(s);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log('hi');
            return React.createElement('div', { ref: function ref(el) {
                    return _this2.instance = el;
                } });
        }
    }]);

    return Eel;
}(React.Component);

var Square = function (_React$Component2) {
    _inherits(Square, _React$Component2);

    function Square() {
        _classCallCheck(this, Square);

        return _possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).apply(this, arguments));
    }

    _createClass(Square, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                { className: 'square' },
                this.props.value
            );
        }
    }]);

    return Square;
}(React.Component);

var Board = function (_React$Component3) {
    _inherits(Board, _React$Component3);

    function Board() {
        _classCallCheck(this, Board);

        return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));
    }

    _createClass(Board, [{
        key: 'renderSquare',
        value: function renderSquare(i) {
            return React.createElement(Square, { value: i });
        }
    }, {
        key: 'render',
        value: function render() {
            var status = 'Next player: X';

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'status' },
                    status
                ),
                React.createElement(
                    'div',
                    { className: 'board-row' },
                    this.renderSquare(0),
                    this.renderSquare(1),
                    this.renderSquare(2)
                ),
                React.createElement(
                    'div',
                    { className: 'board-row' },
                    this.renderSquare(3),
                    this.renderSquare(4),
                    this.renderSquare(5)
                ),
                React.createElement(
                    'div',
                    { className: 'board-row' },
                    this.renderSquare(6),
                    this.renderSquare(7),
                    this.renderSquare(8)
                )
            );
        }
    }]);

    return Board;
}(React.Component);

var Game = function (_React$Component4) {
    _inherits(Game, _React$Component4);

    function Game() {
        _classCallCheck(this, Game);

        return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
    }

    _createClass(Game, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'game' },
                React.createElement(
                    'div',
                    { className: 'game-board' },
                    React.createElement(Board, null)
                ),
                React.createElement(
                    'div',
                    { className: 'game-info' },
                    React.createElement('div', null),
                    React.createElement('ol', null)
                )
            );
        }
    }]);

    return Game;
}(React.Component);

// ========================================

var domContainer = document.querySelector("#root");
ReactDOM.render(e(Game), domContainer);
//   ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
//   );