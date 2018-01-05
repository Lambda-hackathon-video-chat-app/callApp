import React, { Component } from 'react';
import './App.css';

import call from './Call.js'


class callApp extends Component {
  render() {

    return (
      <div className="callApp">
        <header className="App-header">
          <h1 className="App-title">Welcome to Call App!</h1>
        </header>
        <div>
          <label>Your ID:</label>
          <br/>
          <textarea id="yourId"></textarea>
          <br/>
          <label>Other ID:</label>
          <br/>
          <textarea id="otherId"></textarea>
          <button id="connect">connect</button>
          <br/>

          <label>Enter Message:</label>
          <br/>
          <textarea id="yourMessage"></textarea>
          <button id="send">send</button>
          <pre id="messages"></pre>

          <script src="bundle.js" charset="utf-8"></script>
        </div>
        <p className="App-intro">
         To call a friend gain access to your code and share with your friend to connect!
        </p>
        <call />
      </div>
    );
  }
}

export default callApp;
