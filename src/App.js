import React, { Component } from 'react';
import './styles/App.css';

let defaultStyle = {
  color : '#fff'
}

let fakeServerData = {
  user : {
    name : 'Maxime',
    playlists : [
      {
        name : 'Justice',
        songs :
        [
            {name:'D.A.N.C.E', duration: 180},
            {name : 'Genesis', duration: 200},
            {name : 'Phantom', duration : 175}
        ]
      },
      {
        name : 'Tame Impala',
        songs :
        [
            {name:'Ouioui', duration: 180},
            {name : 'song', duration: 200},
            {name : 'U know', duration : 175}
        ]
      },
      {
        name : 'Ed Banger top songs',
        songs :
        [
            {name:'technotronik', duration: 180},
            {name : 'song', duration: 200},
            {name : 'U know', duration : 175}
        ]
      }
   ]
 }
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div className="aggregate">
        <h2>Number of playlists {this.props.playlists.length}</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) =>
      { return songs.concat(eachPlaylist.songs) } , [])
    let totalDuration = allSongs.reduce((sum,eachSong ) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div className="aggregate">
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div className="" style={{...defaultStyle}}>
        <img src="" alt=""/>
        <input type="text" onKeyUp={e => this.props.onTextChange(e.target.value)} />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    const {playlist} = this.props
    return (
      <div className="" style={{...defaultStyle, width: "25%", display: 'inline-block'}}>
        <img src="" alt=""/>
        <h3>{playlist.name }</h3>
        <ul>
        {playlist.songs.map((song, index) => {
          return  <li key={index}>{song.name}</li>
        }) }
        </ul>
      </div>
    );
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      serverData : {},
      filterString : ''
    }
  }
  componentWillMount() {
    this.setState({
      serverData : fakeServerData,
      filterString : ''
    })
  }

  render() {
    const {serverData,filterString } = this.state
    return (
      <div className="App">
        <header>
          <h1>{serverData.user.name}'s Playlists</h1>p>
          <PlaylistCounter playlists={serverData.user.playlists} />
          <HoursCounter playlists={serverData.user.playlists} />
        </header>
        <div className="">
          <Filter onTextChange = {text => this.setState({filterString : text})}  />
          {
            serverData.user.playlists.filter(playlist =>
              playlist.name
                .toLowerCase()
                  .includes(filterString.toLowerCase())
            ).map((playlist, index) => {
              return <Playlist key={index} playlist={playlist} />
            }
          )}
        </div>
      </div>
    );
  }
}

export default App;
