// Import React
import React from 'react';
// Import the input screen styling
import './InputScreen.css';
// Create my input screen class
export class InputScreen extends React.Component {
    render() {
        return (
            // Input screen display
            <div className="input">{this.props.input}</div>
        )
    }
}