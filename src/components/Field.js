import React, { Component } from 'react';
// import uuidv4 from 'uuid/v4';
import { getFriends } from '../helpers'
import { objCreator } from '../App'


class Field extends Component {

    state = {
        keyName: '',
        keyPlaceholder: 'Key name',
        typedString: '',
        stringPlaceholder: "Your text here",
        firstDefaultValue: 'choose',
        secondFieldChoice: null,
        thirdFieldChoice: null
    }
    second = (x) => {
        switch(x) {
            case "img":
            this.setState({ secondFieldChoice: 'img', thirdFieldChoice: null })
            break

            case "id":
            this.setState({ secondFieldChoice: 'id', thirdFieldChoice: null })
            break

            case "string":
            this.setState({ secondFieldChoice: 'string', thirdFieldChoice: null })
            break

            default:
            console.log('default')
        }
    }
    third = (x) => {
        switch(x) {
            case "img":
            this.setState({ thirdFieldChoice: 'img' });
            break

            case "id":
            this.setState({ thirdFieldChoice: 'id' });
            break

            case "text":
            this.setState({ thirdFieldChoice: 'text' });
            break

            default:
            console.log('default')
        }
    }
    stringSubmit = (newKey) => {
        if(this.state.typedString === '') {
        alert(this.state.stringPlaceholder)
        } else {
        let newKey = {};
        newKey.name = this.state.keyName;
        newKey.body = getFriends();
        objCreator(newKey)
        }
    }

  render() {
    return (
        <div className="field-container">
            <div className="first-field"><input type="text" placeholder={this.state.keyPlaceholder} value={this.state.keyName} onChange={(event) => this.setState({ keyName: event.target.value })}/></div>
            <div className="colon">:</div>
            <div className="second-field">
                <div className="field-item">
                    <select defaultValue="choose" onChange={(event) => this.second(event.target.value)}>
                        <option value="choose" disabled>Choose One</option>
                        <option value="string">String</option>
                        <option value="number">Number</option>
                        <option value="img">Img URL</option>
                        <option value="boolean">Boolean</option>
                        <option value="method">Method</option>
                        <option value="id">Unique ID</option>
                    </select>
                </div>
                <div className="field-item">
                    {this.state.secondFieldChoice === 'img' &&
                    <select defaultValue="choose" onChange={(event) => this.third(event.target.value)}>
                        <option value="choose" disabled>Choose One</option>
                        <option value="img">Img URL</option>
                    </select>
                    }
                    {this.state.secondFieldChoice === 'id' &&
                    <select defaultValue="choose" onChange={(event) => this.third(event.target.value)}>
                        <option value="choose" disabled>Choose One</option>
                        <option value="id">Unique ID</option>
                    </select>
                    }
                    {this.state.secondFieldChoice === 'string' &&
                    <select defaultValue="choose" onChange={(event) => this.third(event.target.value)}>
                        <option value="choose" disabled>Choose One</option>
                        <option value="text">I want to type it</option>
                        <option value="friends">Random name from F.r.i.e.n.d.s</option>
                        <option value="himym">Random name from HIMYM</option>
                    </select>
                    }
                </div>
                <div className="field-item">
                    {this.state.thirdFieldChoice === 'img' &&
                    <select defaultValue="choose">
                    {console.log(this.state)}
                        <option value="choose" disabled>Choose One</option>
                        <option value="img">HUE IMG</option>
                    </select>
                    }
                    {this.state.thirdFieldChoice === 'id' &&
                    <select defaultValue="choose">
                    {console.log(this.state)}
                        <option value="choose" disabled>Choose One</option>
                        <option value="id">HUE ID</option>
                    </select>
                    }
                    {this.state.thirdFieldChoice === 'text' &&
                    <div>
                    <input type="text" placeholder={this.state.stringPlaceholder} value={this.state.typedString} onChange={(event) => this.setState({ typedString: event.target.value })}/>
                    <button onClick={this.stringSubmit}>OK</button>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
  }
}

export default Field;

