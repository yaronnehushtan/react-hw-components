import React, { Component } from 'react';
import './Sidebar.css';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem/MenuItem';


class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <h2>Menu</h2>
                <Menu>
                    <MenuItem>
                        <a href="#">Item one</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#">Item two</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#">Item tree</a>
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

export default Sidebar;