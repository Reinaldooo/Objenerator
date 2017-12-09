import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import './App.css';
import Field from './components/Field'
import { getFriends, getHIMYM, randomYear, random18to90, getImages } from './helpers/helpers'
import Logo from './Logo.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import beautify from 'js-beautify';
  

class App extends Component {

  state = {
    fields: ['fa78f93e-2d9c-4867-95f0-51b99ad3bc58'],
    results: false,
    objectsCount: '',
    obj: {}
  }

  removeKey = () => this.setState((prevState) => {
    if(this.state.fields.length > 1) {
    return {fields: prevState.fields.slice(0, -1)};
  }});

  addKey = () => this.setState((prevState) => {
    if(this.state.fields.length < 8) {
    return {fields: prevState.fields.concat(uuidv4())};
  }});

  objCreator = (key) => {
    switch(key.body) {
      case "friends": {
        this.setState(prevState => ({
          obj: {
              ...prevState.obj,
              [key.name]: getFriends()
          }
      }))
        break  
      }
      case "himym": {
        this.setState(prevState => ({
          obj: {
              ...prevState.obj,
              [key.name]: getHIMYM()
          }
      }))
        break 
      }
      case "year": {
        this.setState(prevState => ({
          obj: {
              ...prevState.obj,
              [key.name]: randomYear()
          }
      }))
        break 
      }
      case "18to90": {
        this.setState(prevState => ({
          obj: {
              ...prevState.obj,
              [key.name]: random18to90()
          }
      }))
        break 
      }
      case "600": {
        this.setState(prevState => ({
          obj: {
              ...prevState.obj,
              [key.name]: getImages()
          }
      }))
        break 
      }
      case true: {
        this.setState(prevState => ({
          obj: {
              ...prevState.obj,
              [key.name]: true
          }
      }))
        break 
      }
      case false: {
        this.setState(prevState => ({
          obj: {
              ...prevState.obj,
              [key.name]: false
          }
      }))
        break 
      }
      default:
      this.setState(prevState => ({
        obj: {
            ...prevState.obj,
            [key.name]: key.body
        }
    }))
    }
  }
  
  render() {
    return (
      <div className="App">
      {console.log(this.state.obj)}
        <header className="App-header">
            <img className="App-logo" alt='logo' src={Logo}/>     
            <h1 className="App-title">Objenerator<span style={{color: 'red'}}>.</span></h1>
            <p>Create random but customizable Javascript objects or Python dictionaries.</p>
        </header>        
          {!this.state.results ?
          <div className="container">
            <div className="introduction"></div>
            <div className="array">{"["}</div>
            <div className="obj">{"{"}
              <span className={this.state.fields.length === 8 ? "add-field-error" : "add-field"} onClick={this.addKey}><i className="fa fa-plus-circle" aria-hidden="true"></i></span>
              <label>Objects:
                <input
                type="text"
                placeholder='2'
                value={this.state.objectsCount}
                onChange={(event) => {
                  Number(event.target.value) <= 50 ?
                  this.setState({ objectsCount: Number(event.target.value) })
                  :
                  this.setState({ objectsCount: 50 })
                  }
                }
                />
              </label>  
            </div>
            {
              this.state.fields.map(field => <Field objCreator={this.objCreator} id={field} key={field}/>)
            }
            <div className="obj">{"},"}
              <span className={this.state.fields.length === 1 ? "remove-field-error" : "remove-field"} onClick={this.removeKey}><i className="fa fa-minus-circle" aria-hidden="true"></i></span>
            </div>
            <div className="array">
                {"]"}
                <button className="submit" onClick={() => this.setState({ results: true })}>Generate Objects</button>
            </div>
          </div>
          :
          <div style={{marginTop: '30px'}}>
            <CopyToClipboard text={JSON.stringify(this.state.obj)}
            onCopy={() => this.setState({copied: true})}>
            <button className="submit">Copy All</button>
            </CopyToClipboard>
            <button
              className="submit"
              onClick={() => this.setState({
                results: false,
                fields: ['fa78f93e-2d9c-4867-95f0-51b99ad3bc58'],
                objectsCount: ''
              })}>Reset
            </button>
            <h1>Your objects:</h1>
            <textarea defaultValue={beautify(JSON.stringify(this.state.obj), { indent_size: 2 })}/>
          </div>
          }
      </div>
    );
  }
}

export default App;

