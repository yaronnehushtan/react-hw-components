import React, { Component } from 'react';
import './Content.css';
import Collapsible from './Collapsible/Collapsible';
import RandomColorSquare from './RandomColorSquare/RandomColorSquare';


class Content extends Component {
    


    render() {
        return (
            <div className="Content">
                <Collapsible header="This is the header">
                    this is the content <br/>
                    this is the content
                </Collapsible>
                <Collapsible header="This is the header2">
                    this is the content2 <br/>
                    this is the content2
                </Collapsible>

                <RandomColorSquare />

            </div>
        );
    }
}

export default Content;