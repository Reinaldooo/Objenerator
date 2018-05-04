import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import beautify from 'js-beautify';
import FlipMove from 'react-flip-move';
import Field from './components/Field'
import Logo from './Logo.png';
import { 
  randomCity,
  getFriends,
  getHIMYM,
  randomYear,
  random18to90,
  getImages,
  getBool } from './helpers/helpers'
import './App.css';

const Textarea = (props) => {
  return (
    <textarea defaultValue={beautify(JSON.stringify(props.endResult), { indent_size: 2 })}/>
  )
}

class App extends Component {

  state = {
    fields: ['fa78f93e-2d9c-4867-95f0-51b99ad3bc58'],
    results: false,
    objectsCount: '',
    obj: [],
    endResult: [],
    empty: false,
    copyButton: 'Copy All',
    update: false,
    editing: false
  }

  objCreator = (key) => {
    switch(key.body) {

      case "friends": {
        this.setState((prevState) => {
          if(this.state.obj.find(obj => obj[key.id])) {
            return {
            obj: prevState.obj.filter(obj => !obj[key.id]).concat({
              [key.id]: {                
                key: key.name,
                body: () => getFriends()
              }
            })
          }
        } else {
          return {
            obj: prevState.obj.concat({
              [key.id]: {                
                key: key.name,
                body: () => getFriends()
              }
            })
          }
        }
      })
        break  
      }

      case "himym": {
        this.setState((prevState) => {
          if(this.state.obj.find(obj => obj[key.id])) {
            return {
            obj: prevState.obj.filter(obj => !obj[key.id]).concat({
              [key.id]: {                
                key: key.name,
                body: () => getHIMYM()
              }
            })
          }
        } else {
          return {
            obj: prevState.obj.concat({
              [key.id]: {                
                key: key.name,
                body: () => getHIMYM()
              }
            })
          }
        }
      })
        break
      }

      case "cities": {
        this.setState((prevState) => {
          if(this.state.obj.find(obj => obj[key.id])) {
            return {
            obj: prevState.obj.filter(obj => !obj[key.id]).concat({
              [key.id]: {                
                key: key.name,
                body: () => randomCity()
              }
            })
          }
        } else {
          return {
            obj: prevState.obj.concat({
              [key.id]: {                
                key: key.name,
                body: () => randomCity()
              }
            })
          }
        }
      })
        break
      }

      case "id": {
        this.setState((prevState) => {
          if(this.state.obj.find(obj => obj[key.id])) {
            return {
            obj: prevState.obj.filter(obj => !obj[key.id]).concat({
              [key.id]: {                
                key: key.name,
                body: () => uuidv4()
              }
            })
          }
        } else {
          return {
            obj: prevState.obj.concat({
              [key.id]: {                
                key: key.name,
                body: () => uuidv4()
              }
            })
          }
        }
      })
        break
      }

      case "year": {
        this.setState((prevState) => {
          if(this.state.obj.find(obj => obj[key.id])) {
            return {
            obj: prevState.obj.filter(obj => !obj[key.id]).concat({
              [key.id]: {                
                key: key.name,
                body: () => randomYear()
              }
            })
          }
        } else {
          return {
            obj: prevState.obj.concat({
              [key.id]: {                
                key: key.name,
                body: () => randomYear()
              }
            })
          }
        }
      })
        break
      }

      case "18to90": {
        this.setState((prevState) => {
          if(this.state.obj.find(obj => obj[key.id])) {
            return {
            obj: prevState.obj.filter(obj => !obj[key.id]).concat({
              [key.id]: {                
                key: key.name,
                body: () => random18to90()
              }
            })
          }
        } else {
          return {
            obj: prevState.obj.concat({
              [key.id]: {                
                key: key.name,
                body: () => random18to90()
              }
            })
          }
        }
      })
        break
      }

      case "600": {
        this.setState((prevState) => {
          if(this.state.obj.find(obj => obj[key.id])) {
            return {
            obj: prevState.obj.filter(obj => !obj[key.id]).concat({
              [key.id]: {                
                key: key.name,
                body: () => getImages()
              }
            })
          }
        } else {
          return {
            obj: prevState.obj.concat({
              [key.id]: {                
                key: key.name,
                body: () => getImages()
              }
            })
          }
        }
      })
        break
      }

      case 'true': {
        this.setState((prevState) => {
          if(this.state.obj.find(obj => obj[key.id])) {
            return {
            obj: prevState.obj.filter(obj => !obj[key.id]).concat({
              [key.id]: {                
                key: key.name,
                body: true
              }
            })
          }
        } else {
          return {
            obj: prevState.obj.concat({
              [key.id]: {                
                key: key.name,
                body: true
              }
            })
          }
        }
      })
        break
      }

      case 'false': {
        this.setState((prevState) => {
          if(this.state.obj.find(obj => obj[key.id])) {
            return {
            obj: prevState.obj.filter(obj => !obj[key.id]).concat({
              [key.id]: {                
                key: key.name,
                body: false
              }
            })
          }
        } else {
          return {
            obj: prevState.obj.concat({
              [key.id]: {                
                key: key.name,
                body: false
              }
            })
          }
        }
      })
        break
      }

      case 'getBool': {
        this.setState((prevState) => {
          if(this.state.obj.find(obj => obj[key.id])) {
            return {
            obj: prevState.obj.filter(obj => !obj[key.id]).concat({
              [key.id]: {                
                key: key.name,
                body: () => getBool()
              }
            })
          }
        } else {
          return {
            obj: prevState.obj.concat({
              [key.id]: {                
                key: key.name,
                body: () => getBool()
              }
            })
          }
        }
      })
        break
      }

      default:
      this.setState((prevState) => {
        if(this.state.obj.find(obj => obj[key.id])) {
        return {
        obj: prevState.obj.filter(obj => !obj[key.id]).concat({
          [key.id]: {                
            key: key.name,
            body: key.body
          }
        })
      }
    } else {
      return {
        obj: prevState.obj.concat({
          [key.id]: {                
            key: key.name,
            body: key.body
          }
        })
      }
    }
    })
      break
    }
  }
  
  removeKey = () => this.setState((prevState) => {
    if(this.state.fields.length > 1) {
    return {fields: prevState.fields.slice(0, -1)};
  }});

  addKey = () => this.setState((prevState) => {
    if(this.state.fields.length < 8) {
    return {fields: prevState.fields.concat(uuidv4())};
  }});

  repeat = async() => {
    const count = this.state.objectsCount === '' ? 2 : this.state.objectsCount
    const x = Array.apply(null, {length: count}).map(Number.call, Number);
    await x.map((x) => this.create())
  }

  endResult = async () => {
    if(this.state.obj.length === 0) {
      await this.setState({ empty: true });
      setTimeout(() => {this.setState({ empty: false })}, 2500)
    } else {
    await this.repeat();
    await this.setState({ results: true })
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
    this.setState({ endResult: this.state.endResult.concat(endResult) })
  }

  edit = () => this.setState({
    results: false,
    copyButton: 'Copy All',
    endResult: [],
    editing: true
  })

  reset = () => this.setState({
    results: false,
    fields: ['fa78f93e-2d9c-4867-95f0-51b99ad3bc58'],
    objectsCount: '',
    obj: [],
    endResult: [],
    empty: false,
    update: true
  })

  copyAll = () => this.setState({ copyButton: 'Copied' })

  objectCounter = (event) => {
    Number(event) <= 100 ?
    this.setState({ objectsCount: Number(event) })
    :
    this.setState({ objectsCount: 100 })
  }

  render() {

    const hide = { display: 'none' };
    const show = {};

    return (
      <div className="App">
        <header className="App-header">
            <img className="App-logo" alt='logo' src={Logo}/>     
            <h1 className="App-title">Objenerator<span style={{color: 'red'}}>.</span></h1>
            <p>Create random, customizable Javascript objects or Python dictionaries.</p>
        </header>        
          <div className="container" style={this.state.results ? hide : show}>
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
                onChange={(event) => this.objectCounter(event.target.value)}
                />
              </label>  
            </div>
              <FlipMove duration={300} easing="ease">
                {this.state.fields.map(field => <Field editing={this.state.editing} update={this.state.update} objCreator={this.objCreator} id={field} key={field}/>)}
              </FlipMove>
            <div className="obj">{"},"}</div>
            <div className="array">
                {"]"}
                <button className="submit" onClick={this.endResult}>Generate Objects</button>
            </div>
          </div>
          {this.state.results &&
              <div style={{ marginTop: '30px' }}>
                <CopyToClipboard
                  text={beautify(JSON.stringify(this.state.endResult), { indent_size: 2 })}
                  onCopy={this.copyAll}>
                    <button className={this.state.copyButton === 'Copied' ? "submit" : 'submit-gray'} style={{ marginLeft: 0 }}>{this.state.copyButton}</button>
                </CopyToClipboard>
                <button
                  className="submit-gray"
                  onClick={this.edit}>Edit
                </button>
                <button
                  className="submit-gray"
                  style={{ backgroundColor: '#EF5350' }}
                  onClick={this.reset}>Reset
                </button>
                <h1 style={{marginBottom: 0}}>Your objects:</h1>
                <Textarea endResult={this.state.endResult}/>
              </div>
          }
          <div className="footer">
          <a target="_blanc" aria-label="Github page" title="Github page" href='https://github.com/Reinaldooo/Objenerator'><i className="fa fa-github-square" aria-hidden="true"/></a>
          </div>
      </div>
    );
  }
}

export default App;

