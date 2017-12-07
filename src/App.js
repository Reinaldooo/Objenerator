import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import './App.css';
import Field from './components/Field'
import { getFriends, getHIMYM, randomYear, random18to90, getImages } from './helpers/helpers'

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
    case "year": {
      obj[key.name] = randomYear();
      console.log(obj)
      break
    }
    case "18to90": {
      obj[key.name] = random18to90();
      console.log(obj)
      break
    }
    case "600": {
      obj[key.name] = getImages();
      console.log(obj)
      break
    }
    case true: {
      obj[key.name] = true;
      console.log(obj)
      break
    }
    case false: {
      obj[key.name] = false;
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
    fields: ['fa78f93e-2d9c-4867-95f0-51b99ad3bc58'],
    results: false
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
          <h1 className="App-title">Objenerator<span style={{color: 'red'}}>.</span></h1>
          <p>Here you can create random, but customizable Javascript objects.</p>
        </header>        
          {!this.state.results ?
          <div className="container">
          <div className="introduction"></div>
          <div className="array">{"["}</div>
          <div className="obj">{"{"}
            <span className={this.state.fields.length === 10 ? "add-field-error" : "add-field"} onClick={this.addKey}><i className="fa fa-plus-circle" aria-hidden="true"></i></span>
            <input type="text" placeholder="Number of objects"/>
            <button className="submit" onClick={() => this.setState({ results: false })}>Ok</button>
          </div>
          {
            this.state.fields.map(field => <Field id={field} key={field}/>)
          }
          <div className="obj">{"},"}
            <span className={this.state.fields.length === 1 ? "remove-field-error" : "remove-field"} onClick={this.removeKey}><i className="fa fa-minus-circle" aria-hidden="true"></i></span>
            <button className="submit" onClick={() => this.setState({ results: true })}>Generate</button>
          </div>
          <div className="array">{"]"}</div>
          </div>
          :
          <div style={{marginTop: '30px'}}>
            <button className="submit" onClick={() => this.setState({ results: false })}>Reset</button>
            <h1>Your objects:</h1>
            <textarea>{JSON.stringify(this.state.fields)}</textarea>
          </div>
          }
      </div>
    );
  }
}

export default App;
