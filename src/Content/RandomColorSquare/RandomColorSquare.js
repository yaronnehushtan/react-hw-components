import React, { Component } from 'react';
import './RandomColorSquare.css';


class RandomColorSquare extends Component {

    constructor(props) {
        super(props);
        this.state= {
            color: this.getRandomColor()
        }
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    handleClick () {
        this.setState({
            color: this.getRandomColor()
        })
    }

    render() {
        return (
            <section className="RandomColorSquare">
                <div className="square" onClick={this.handleClick.bind(this)} style={{background:this.state.color}}></div>
            </section>
        );
    }
}

export default RandomColorSquare;