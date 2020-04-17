import React, {Component, setState} from 'react';
import logo from './assets/logo.svg'
import './App.css';
import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();

class App extends Component  {
    constructor(){
      super();
      const params = this.getHashParams();
      this.state= {
        loggedIn: params.access_token ? true : false,
        nowPlaying: {
          name: 'Not Checked',
          image: '', 
          
        },
        currentPlaylist: {
          name: '',
          image: '',
        }
      }
      if (params.access_token){
        spotifyWebApi.setAccessToken(params.access_token)
      }
    }
   getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  getNowPlaying() {
    spotifyWebApi.getMyCurrentPlaybackState()
      .then((response)=>{
        this.setState({
          nowPlaying:{
            name: response.item.name,
            image:response.item.album.images[0].url,
            
          }
        })
      })
  }
  
  getCurrentPlaylists(){
    spotifyWebApi.getPlaylist()
      .then((response)=>{
        console.log(response)
        })
      .catch(err=>console.log(err))
      }
   
  

  render(){
    return (
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="content">
          
          <a className="above" href="http://localhost:5000">
            <button className="btn"> Conecte-se ao Spotify</button>
          </a>
          <div className="now" >Now Playing: {this.state.nowPlaying.name}</div>
          <div classname="now-image">
            <img src={ this.state.nowPlaying.image } style={{width: 100}}/>
            
          </div>
          <button onClick={()=>this.getNowPlaying()}>
            Check Now Playing
          </button>
          <button onClick={()=>this.getCurrentPlaylists()} style={{marginTop: '15px'}}>
            Go to playlists!
          </button>
        </div>
      </div>
    );}
}

export default App;
