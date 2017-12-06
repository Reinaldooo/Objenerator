import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import './App.css';
import Field from './components/Field'


class App extends Component {
  state = {
    fields: [1]
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
            <span className="add-field" onClick={this.addKey}>Add key</span>
          </div>
          {
            this.state.fields.map(field => <Field key={field}/>)
          }
          <div className="array">{"},"}
            <span className="remove-field" onClick={this.removeKey}>Remove key</span>
          </div>
          <div className="array">{"]"}</div>
        </div>
      </div>
    );
  }
}

export default App;
