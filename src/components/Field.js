import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import { objCreator } from '../App'


class Field extends Component {

    state = {
        keyName: '',
        keyPlaceholder: 'Key name',
        typedString: '',
        stringPlaceholder: "Your text here",
        firstDefaultValue: 'choose',
        secondFieldChoice: null,
        thirdFieldChoice: null,
        fieldOk: false
    }
    second = (x) => {
        switch(x) {
            case "string":
            this.setState({ secondFieldChoice: 'string', thirdFieldChoice: null, fieldOk: false, typedString: '' })
            break

            case "number":
            this.setState({ secondFieldChoice: 'number', thirdFieldChoice: null, fieldOk: false, typedString: '' })
            break

            case "img":
            this.setState({ secondFieldChoice: 'img', thirdFieldChoice: null, fieldOk: false, typedString: '' })
            break

            case "bool":
            this.setState({ secondFieldChoice: 'bool', thirdFieldChoice: null, fieldOk: false, typedString: '' })
            break
            
            case "id":
                let newKey = {};
                newKey.name = this.state.keyName;
                newKey.body = uuidv4();
                this.setState({ secondFieldChoice: null, thirdFieldChoice: null, fieldOk: false, typedString: '' });
                objCreator(newKey);
            break

            default:
            console.log('default')
        }
    }
    third = (x) => {
        switch(x) {
            case "text":
            this.setState({ thirdFieldChoice: 'text' });
            break

            case "number":
            this.setState({ thirdFieldChoice: 'number' });
            break

            case "friends": {
                    let newKey = {};
                    newKey.name = this.state.keyName;
                    newKey.body = 'friends';
                    this.setState({ thirdFieldChoice: null, fieldOk: false, typedString: '' });
                    objCreator(newKey);
            }
            break

            case "himym": {
                    let newKey = {};
                    newKey.name = this.state.keyName;
                    newKey.body = 'himym';
                    this.setState({ thirdFieldChoice: null, fieldOk: false, typedString: '' });
                    objCreator(newKey);
            }
            break

            case "year": {
                let newKey = {};
                newKey.name = this.state.keyName;
                newKey.body = 'year';
                this.setState({ thirdFieldChoice: null, fieldOk: false, typedString: '' });
                objCreator(newKey);
            }
            break

            case "18to90": {
                let newKey = {};
                newKey.name = this.state.keyName;
                newKey.body = '18to90';
                this.setState({ thirdFieldChoice: null, fieldOk: false, typedString: '' });
                objCreator(newKey);
            }
            break

            case "600": {
                let newKey = {};
                newKey.name = this.state.keyName;
                newKey.body = '600';
                this.setState({ thirdFieldChoice: null, fieldOk: false, typedString: '' });
                objCreator(newKey);
            }
            break

            case "true": {
                let newKey = {};
                newKey.name = this.state.keyName;
                newKey.body = true;
                this.setState({ thirdFieldChoice: null, fieldOk: false, typedString: '' });
                objCreator(newKey);
            }
            break

            case "false": {
                let newKey = {};
                newKey.name = this.state.keyName;
                newKey.body = false;
                this.setState({ thirdFieldChoice: null, fieldOk: false, typedString: '' });
                objCreator(newKey);
            }
            break

            default:
            console.log('default')
        }
    }

    stringSubmit = (newKey) => {
        if(this.state.keyName === '') {
            let newKey = {};
            newKey.name = 'EmptyKey';
            newKey.body = this.state.typedString;
            this.setState({ fieldOk: true });
            objCreator(newKey);
        } else {
            let newKey = {};
            newKey.name = this.state.keyName;
            newKey.body = this.state.typedString;
            objCreator(newKey);
            this.setState({ fieldOk: true });
        }
    }

    numberSubmit = (newKey) => {
        if(this.state.keyName === '') {
            let newKey = {};
            newKey.name = 'EmptyKey';
            newKey.body = Number(this.state.typedString);
            this.setState({ fieldOk: true });
            objCreator(newKey);
        } else {
            let newKey = {};
            newKey.name = this.state.keyName;
            newKey.body = Number(this.state.typedString);
            objCreator(newKey);
            this.setState({ fieldOk: true });
        }
    }

  render() {
    return (
        <div className="field-container">
            <div className="first-field"><input type="text" placeholder={this.state.keyPlaceholder} value={this.state.keyName} onChange={(event) => this.setState({ keyName: event.target.value })}/></div>
            <div className="colon">:</div>
            <div className={!this.state.fieldOk ? "second-field" : "second-field-ok" }>
                <div className="field-item">
                    <select defaultValue="choose" onChange={(event) => this.second(event.target.value)}>
                        <option value="choose" disabled>Choose One</option>
                        <option value="string">String</option>
                        <option value="number">Number</option>
                        <option value="img">Img URL</option>
                        <option value="bool">Boolean</option>
                        <option value="id">Unique ID</option>
                    </select>
                </div>
                <div className="field-item">                    
                    {this.state.secondFieldChoice === 'string' &&
                    <select defaultValue="choose" onChange={(event) => this.third(event.target.value)}>
                        <option value="choose" disabled>Choose One</option>
                        <option value="text">Custom</option>
                        <option value="friends">Random character from F.R.I.E.N.D.S</option>
                        <option value="himym">Random character from HIMYM</option>
                    </select>
                    }
                    {this.state.secondFieldChoice === 'number' &&
                    <select defaultValue="choose" onChange={(event) => this.third(event.target.value)}>
                        <option value="choose" disabled>Choose One</option>
                        <option value="number">Custom</option>
                        <option value="year">Random year from 1940</option>
                        <option value="18to90">Random age from 18 to 90</option>
                    </select>
                    }
                    {this.state.secondFieldChoice === 'img' &&
                    <select defaultValue="choose" onChange={(event) => this.third(event.target.value)}>
                        <option value="choose" disabled>Choose One</option>
                        <option value="text">Custom</option>
                        <option value="600">Random 600x600px image</option>
                    </select>
                    }
                    {this.state.secondFieldChoice === 'bool' &&
                    <select defaultValue="choose" onChange={(event) => this.third(event.target.value)}>
                        <option value="choose" disabled>Choose One</option>
                        <option value="true">True</option>
                        <option value="false">false</option>
                    </select>
                    }
                </div>
                <div className="field-item">
                    {this.state.thirdFieldChoice === 'number' &&
                    <div>
                    <input type="text" placeholder={this.state.stringPlaceholder} value={this.state.typedString} onChange={(event) => this.setState({ typedString: event.target.value })}/>
                    <button className="button" onClick={this.numberSubmit}>OK</button>
                    </div>
                    }
                    {this.state.thirdFieldChoice === 'text' &&
                    <div>
                    <input type="text" placeholder={this.state.stringPlaceholder} value={this.state.typedString} onChange={(event) => this.setState({ typedString: event.target.value })}/>
                    <button className="button" onClick={this.stringSubmit}>OK</button>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
  }
}

export default Field;

