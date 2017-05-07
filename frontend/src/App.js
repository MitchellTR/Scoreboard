import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const scoreData = [{"game":"NBA Jam","platform":"Xbox 360","mode":"Classic 2v2","category":"Most Points","player":"Todd","score":"20"},
{"game":"Crackdown","platform":"Xbox 360","mode":"Campaign","category":"Most Pedestrians Hit","player":"Chad","score":"50"},
{"game":"Rocket League","platform":"Xbox One","mode":"Standard 3v3","category":"Most Saves","player":"Bits","score":"6"},
{"game":"Farming Simulator '15'","platform":"Xbox 360","mode":"Standard","category":"Most Tractors","player":"Todd","score":"5"},
{"game":"Neverwinter","platform":"Xbox One","mode":"Standard","category":"Highest Level","player":"Todd","score":"32"}
];

class ScoreRow extends Component{
  render(){
    return (<tr>
      <td>{this.props.score.game}</td>
      <td>{this.props.score.platform}</td>
      <td>{this.props.score.mode}</td>
      <td>{this.props.score.category}</td>
      <td>{this.props.score.player}</td>
      <td>{this.props.score.score}</td>
      </tr>
      );
  }
};

class ScoreTable extends Component{
  render(){
    var rows = [];
    this.props.scores.forEach(function(score){
      rows.push(<ScoreRow score={score} key={score.id} />);
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Game</th>
            <th>Platform</th>
            <th>Mode</th>
            <th>Category</th>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ScoreTable scores={scoreData} />
      </div>
    );
  }
}

export default App;
