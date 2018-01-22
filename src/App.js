import React, { Component } from 'react';
import './styles/App.css';

let defaultStyle = {
  color : '#fff'
}

class Aggregate extends Component {
  render() {
    return (
      <div className="aggregate">
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div className="" style={{...defaultStyle}}>
        <img src="" alt=""/>
        <input type="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div className="" style={{...defaultStyle, width: "25%", display: 'inline-block'}}>
        <img src="" alt=""/>
        <h3>Playlist name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Titre</h1>
          <Aggregate />
          <Aggregate />
        </header>
        <div className="">
          <Filter />
          <Playlist />
          <Playlist />
          <Playlist />
        </div>
      </div>
    );
  }
}

export default App;
