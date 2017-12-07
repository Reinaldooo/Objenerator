import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import './App.css';
import Field from './components/Field'
import { getFriends, getHIMYM } from './helpers/helpers'

const obj = {}

export const objCreator = (key) => {
  switch(key.body) {
    case "friends": {
      obj[key.name] = getFriends();
      console.log(obj)
      break
    }
    case "himym": {
      obj[key.name] = getHIMYM();
      console.log(obj)
      break
    }
    default:
      obj[key.name] = key.body;
      console.log(obj)
  }
}

class App extends Component {
  state = {
    fields: ['fa78f93e-2d9c-4867-95f0-51b99ad3bc58']
  }

  removeKey = () => this.setState((prevState) => {
    if(this.state.fields.length > 1) {
    return {fields: prevState.fields.slice(0, -1)};
  }});

  addKey = () => this.setState((prevState) => {
    if(this.state.fields.length < 10) {
    return {fields: prevState.fields.concat(uuidv4())};
  }});

  
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
          <div className="array">{"["}</div>
          <div className="array">{"{"}
            <span className="add-field" onClick={this.addKey}><i className="fa fa-plus-circle" aria-hidden="true"></i></span>
          </div>
          {
            this.state.fields.map(field => <Field id={field} key={field}/>)
          }
          <div className="array">{"},"}
            <span className="remove-field" onClick={this.removeKey}><i className="fa fa-minus-circle" aria-hidden="true"></i></span>
          </div>
          <div className="array">{"]"}</div>
        </div>
      </div>
    );
  }
}

export default App;
