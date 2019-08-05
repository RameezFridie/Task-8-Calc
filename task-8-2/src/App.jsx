import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Clear } from './components/Clear';
import { InputScreen } from './components/InputScreen';
import * as math from 'mathjs';


class App extends React.Component {
    // constructor that gets the data in the input screen
    constructor(props) {
        super(props);
        // Updates every time a button is clicked
        this.state = {
            input: ""
        }
    }
    // Displays the values in the display screen
    display_input = val => {
        this.setState({input: this.state.input + val});
    }
    // Logic that evaluates the values behind each button and returns the answer
    result = () => {
        this.setState({input: math.evaluate(this.state.input)})
    }
    render() {
        return (
            // Buttons
            <div className = "App" >
                <div className="wrapper">
                    {/* Input screen component */}
                    <InputScreen input={this.state.input}></InputScreen>
                    <div className="row">
                        {/* Button that is linked to display in the input screen */}
                        <Button handleClick={this.display_input}>7</Button>
                        <Button handleClick={this.display_input}>8</Button>
                        <Button handleClick={this.display_input}>9</Button>
                        <Button handleClick={this.display_input}>/</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.display_input}>4</Button>
                        <Button handleClick={this.display_input}>5</Button>
                        <Button handleClick={this.display_input}>6</Button>
                        <Button handleClick={this.display_input}>*</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.display_input}>3</Button>
                        <Button handleClick={this.display_input}>2</Button>
                        <Button handleClick={this.display_input}>1</Button>
                        <Button handleClick={this.display_input}>-</Button>
                    </div>
                    <div className="row">
                        {/* Button that returns the result of what is evaluated */}
                        <Button handleClick={() => this.result()}>=</Button>
                        <Button handleClick={this.display_input}>0</Button>
                        <Button handleClick={this.display_input}>.</Button>
                        <Button handleClick={this.display_input}>+</Button>
                    </div>
                    <div className="row">
                        {/* Clears whatever is in the input variable */}
                        <Clear handleClear={() => this.setState({input:""})}>Clear</Clear>
                    </div>
                </div>
            </div>
         );
    }
}

export default App;