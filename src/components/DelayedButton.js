import React, { Component } from 'react';

export default class DelayedButton extends Component {
  
    handleClick = () => {
        setTimeout(() => {
            this.props.onDelayedClick()
        }, this.props.delay)
    }
  
    render() {
        return (
            <button
            onClick={this.handleClick}
            >Delay</button>
        )
    }
  
}