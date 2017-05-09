import React, { Component } from 'react';
import image from './image/frontPage.jpg';
import {slideStyle, slideTxtStyle} from './slideStyle';

class CampanyIntroduction extends Component {

    render() {
        return (
            <div style={slideStyle}>
                <img src={image} style={{height: "100%", width: "100%"}}/>
                <h1 style={{...{color: 'white'} ,...slideTxtStyle}}>公司简介</h1>
            </div>
        )
    };
};

export default CampanyIntroduction;

