import React from 'react';
import './Clear.css';

export class Clear extends React.Component {
    render() {
        return(
            // CLear button 
            <div className='clear-btn' onClick={this.props.handleClear}>
                {this.props.children}
            </div>
        )
    }
}