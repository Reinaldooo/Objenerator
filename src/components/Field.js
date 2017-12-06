import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';


class Field extends Component {

    state = {
        keyName: 'key',
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
            default:
            console.log('default')
        }
    }

  render() {
    return (
        <div className="field-container">
            <div className="first-field"><input type="text" value={this.state.keyName} onChange={(event) => this.setState({ keyName: event.target.value })}/></div>
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
                </div>
            </div>
        </div>
    );
  }
}

export default Field;

