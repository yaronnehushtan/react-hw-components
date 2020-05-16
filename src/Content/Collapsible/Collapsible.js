import React, { Component } from 'react';
import './Collapsible.css';


class Collapsible extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    
    
    handleClick(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <section className="Collapsible">
                <header className="Collapsible-header" onClick={this.handleClick.bind(this)}>{this.props.header}</header>
                { this.state.isOpen ? <div className="Collapsible-content">{this.props.children}</div> : null}
            </section>
        );
    }
}

export default Collapsible;