// Import react
import React from 'react';
// Button styling
import './Button.css';

export class Button extends React.Component {

    render() {
        // Differentiate between numbers and operators
        var operators = val => {
            return !isNaN(val) || val === '.' || val === '=';
        }
        return (
            // When button is clicked return or get the children properties of the parent(For example when clicking the button with parent of button 7 get the child of 7)
            <div className={`btn ${
                // set the button for operators that are not numbers
                operators(this.props.children) ? null: "operator"
            }`}
            // When button is clicked function that runs is that it returns the value of children
            onClick={() => this.props.handleClick(this.props.children)}>
            {this.props.children}
            </div>
        );
    };
};