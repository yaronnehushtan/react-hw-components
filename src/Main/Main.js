import React, { Component } from 'react';
import './Main.css';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';


class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Sidebar />
                <Content />
            </div>
        );
    }
}

export default Main;