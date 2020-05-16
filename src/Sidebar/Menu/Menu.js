import React, { Component } from 'react';
import './Menu.css';
// import MenuItem from './MenuItem/MenuItem';


class Menu extends Component {

    render() {
        return (
            <nav className="Menu">
                <ul>
                  {this.props.children}  
                </ul>                
            </nav>
        );
    }
}

export default Menu;