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
    obj: [],
    endResult: [],
    empty: false
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
        this.setState((prevState) => {
          return {
          obj: prevState.obj.concat({
            [key.id]: {                
              key: key.name,
              body: () => getFriends()
            }
          })
        }
      })
        break  
      }
      case "himym": {
        this.setState((prevState) => {
          return {
          obj: prevState.obj.concat({
            [key.id]: {                
              key: key.name,
              body: () => getHIMYM()
            }
          })
        }
      })
        break
      }
      case "year": {
        this.setState((prevState) => {
          return {
          obj: prevState.obj.concat({
            [key.id]: {                
              key: key.name,
              body: () => randomYear()
            }
          })
        }
      })
        break
      }
      case "18to90": {
        this.setState((prevState) => {
          return {
          obj: prevState.obj.concat({
            [key.id]: {                
              key: key.name,
              body: () => random18to90()
            }
          })
        }
      })
        break
      }
      case "600": {
        this.setState((prevState) => {
          return {
          obj: prevState.obj.concat({
            [key.id]: {                
              key: key.name,
              body: () => getImages()
            }
          })
        }
      })
        break
      }
      case true: {
        this.setState((prevState) => {
          return {
          obj: prevState.obj.concat({
            [key.id]: {                
              key: key.name,
              body: true
            }
          })
        }
      })
        break
      }
      case false: {
        this.setState((prevState) => {
          return {
          obj: prevState.obj.concat({
            [key.id]: {                
              key: key.name,
              body: false
            }
          })
        }
      })
        break
      }
      default:
      this.setState((prevState) => {
        return {
        obj: prevState.obj.concat({
          [key.id]: {                
            key: key.name,
            body: key.body
          }
        })
      }
    })
      break
    }
  }

  repeat = async() => {
    const count = this.state.objectsCount === '' ? 2 : this.state.objectsCount
    const x = Array.apply(null, {length: count}).map(Number.call, Number);
    await x.map((x) => this.create())
  }

  endResult = async () => {
    if(this.state.obj.length === 0) {
      await this.setState({ empty: true });
      setTimeout(() => {this.setState({ empty: false })}, 3000)
    } else {
    await this.repeat();
    await this.setState({ results: true })
    console.log(this.state.endResult)
    }
  }

  create = async () => {
    const endResult = {};
    await this.state.obj.map((key) => {
      const keyName = key[Object.keys(key)[0]].key;
      const keyBody = key[Object.keys(key)[0]].body;
      if(typeof keyBody === 'function') {
        return endResult[keyName] = keyBody()
      } else {
        return endResult[keyName] = keyBody
      }
    });
    await this.setState({ endResult: this.state.endResult.concat(endResult) })
  }

  render() {
    return (
      <div className="App">
      {/* {console.log(this.state)} */}
        <header className="App-header">
            <img className="App-logo" alt='logo' src={Logo}/>     
            <h1 className="App-title">Objenerator<span style={{color: 'red'}}>.</span></h1>
            <p>Create random, customizable Javascript objects or Python dictionaries.</p>
        </header>        
          {!this.state.results ?
          <div className="container">
            {
              this.state.empty && 
              <div className="empty-keys">You need to set at least one key!</div>
            }
            <div className="introduction"></div>
            <div className="array">{"["}</div>
            <div className="obj">{"{"}
              <div style={{fontSize: '.35em', marginLeft: '10px', textTransform: 'uppercase', fontWeight: 700, color: 'rgb(207, 207, 207)'}}>Keys:</div>
              <span className={this.state.fields.length === 8 ? "add-field-error" : "add-field"} onClick={this.addKey}><i className="fa fa-plus-circle" aria-hidden="true"></i></span>
              <span className={this.state.fields.length === 1 ? "remove-field-error" : "remove-field"} onClick={this.removeKey}><i className="fa fa-minus-circle" aria-hidden="true"></i></span>
              <label>Objects:
                <input
                className={this.state.objectsCount === '' ? 'obj-input' : 'obj-input-ok'}
                type="text"
                placeholder='2'
                value={this.state.objectsCount}
                onChange={(event) => {
                  Number(event.target.value) <= 100 ?
                  this.setState({ objectsCount: Number(event.target.value) })
                  :
                  this.setState({ objectsCount: 100 })
                  }
                }
                />
              </label>  
            </div>
            {
              this.state.fields.map(field => <Field objCreator={this.objCreator} id={field} key={field}/>)
            }
            <div className="obj">{"},"}</div>
            <div className="array">
                {"]"}
                {/* <button className="submit" onClick={() => this.setState({ results: true })}>Generate Objects</button> */}
                <button className="submit" onClick={this.endResult}>Generate Objects</button>
            </div>
          </div>
          :
          <div style={{marginTop: '30px'}}>
            <CopyToClipboard text={beautify(JSON.stringify(this.state.endResult), { indent_size: 2 })}
            onCopy={() => this.setState({copied: true})}>
            <button className="submit">Copy All</button>
            </CopyToClipboard>
            <button
              className="submit"
              onClick={() => this.setState({
                results: false,
                fields: ['fa78f93e-2d9c-4867-95f0-51b99ad3bc58'],
                objectsCount: '',
                obj: [],
                endResult: [],
                empty: false
              })}>Reset
            </button>
            <h1>Your objects:</h1>
            <textarea defaultValue={beautify(JSON.stringify(this.state.endResult), { indent_size: 2 })}/>
          </div>
          }
      </div>
    );
  }
}

export default App;

