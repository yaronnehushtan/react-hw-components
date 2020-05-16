import React, { Component } from 'react';
import './MenuItem.css';


class MenuItem extends Component {

    render() {
        return (
            <li className="MenuItem">
                {this.props.children}
            </li>
        );
    }
}

export default MenuItem;