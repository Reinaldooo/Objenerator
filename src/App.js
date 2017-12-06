import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Objenerator</h1>
        </header>
        <div className="container">
          <div className="introduction"></div>
        </div>
        <div className="container">
          <div className="array">{"{"}</div>
            <div className="field-container">
              <div className="first-field"><input type="text"/></div>
              <div className="colon">:</div>
              <div className="second-field">
                <div className="field-item">
                  <select defaultValue="choose" onChange={(event) => console.log(event.target.value) }>
                    <option value="choose" disabled>Choose One</option>
                    <option value="currentlyReading">String</option>
                    <option value="wantToRead">Number</option>
                    <option value="read">Img URL</option>
                    <option value="none">Boolean</option>
                  </select>
                </div>
                <div className="field-item">
                  <select defaultValue="choose" onChange={(event) => console.log(event.target.value) }>
                    <option value="choose" disabled>Choose One</option>
                    <option value="currentlyReading">String</option>
                    <option value="wantToRead">Number</option>
                    <option value="read">Img URL</option>
                    <option value="none">Boolean</option>
                  </select>
                </div>
                <div className="field-item">
                  <select defaultValue="choose" onChange={(event) => console.log(event.target.value) }>
                    <option value="choose" disabled>Choose One</option>
                    <option value="currentlyReading">String</option>
                    <option value="wantToRead">Number</option>
                    <option value="read">Img URL</option>
                    <option value="none">Boolean</option>
                  </select>
                </div>
              </div>
            </div>
          <div className="array">{"}"}</div>
        </div>
      </div>
    );
  }
}

export default App;
