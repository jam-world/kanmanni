/**
 * @fileOverview
 * @name MainPage.js
 * @author Cha Chen
 * @license MIT
 */

import React, { Component } from 'react';
import "./MainPage.css";
import CompanyIntroduction from "./CompanyIntroduction";
import ProductIntroduction from "./ProductIntroduction";
import SchoolIntroduction from "./SchoolIntroduction";
import About from "./AboutAndCareer";
import product from "./image/product.jpg";
import school from "./image/school1.jpg";
import ReactDOM from 'react-dom';

import cx from "classnames";
import {Easer} from 'functional-easing';
import {Track, TrackedDiv, TrackDocument} from 'react-track';
import {tween, combine} from 'react-imation';
import {topTop,
        topBottom,
        centerCenter,
        topCenter,
        bottomBottom,
        bottomTop,
        getDocumentRect,
        getDocumentElement,
        calculateScrollY} from 'react-track/tracking-formulas';
import {rgb, rgba, scale, rotate,
        px, percent, translate3d} from 'react-imation/tween-value-factories';

class MainPage extends Component {

    constructor(props) {
        super(props);

        this.height = 1000;
        this.totalHeight = this.height * 7;
    };

    render() {
        return (
            <TrackDocument formulas={[getDocumentElement, getDocumentRect, calculateScrollY, 
                                      topTop, topBottom, topCenter, centerCenter, bottomBottom, 
                                      bottomTop]}>
                {(documentElement, documentRect, scrollY, topTop, 
                topBottom, topCenter, centerCenter, bottomBottom, bottomTop) => 
                <div style={{minHeight: this.totalHeight}}>
                    <TrackedDiv className="pin-cont" formulas={[topTop, bottomBottom]}>
                        {(posTopTop, posBottomBottom) =>
                            <div>
                            <section
                            className={cx("pin",{'pin-pin':scrollY > posTopTop})}>

                            <div
                                className={cx("slide")}
                                style={tween(scrollY, [
                                      [posTopTop + this.height * 7, { bottom: 0, opacity: 1, transform: translate3d(0,0,0)}],
                                      [posTopTop + this.height * 8, { bottom: this.height, opacity: 0, transform: translate3d(0,100,0)}]
                                      ])}>

                                {/* when we hit the appropriate scroll position, change the
                                text to 'slide' or 'color' depending on the position */}
                                <About />

                            </div>

                            <div
                                className={cx("slide")}
                                style={tween(scrollY, [
                                        [posTopTop + this.height * 5, { bottom: 0, opacity: 1, transform: translate3d(0,0,0) }],
                                        [posTopTop + this.height * 6, { bottom: this.height, opacity: 0, transform: translate3d(0,100,0)}]
                                      ])}>

                                {/* when we hit the appropriate scroll position, change the
                                text to 'slide' or 'color' depending on the position */}
                                <SchoolIntroduction />

                            </div>

                            <div
                                className={cx("slide")}
                                style={tween(scrollY, [
                                      [posTopTop + this.height * 3, { bottom: 0, opacity: 1, transform: translate3d(0,0,0)}],
                                      [posTopTop + this.height * 4, { bottom: this.height, opacity: 0, transform: translate3d(0,100,0)}]
                                      ])}>

                                {/* when we hit the appropriate scroll position, change the
                                text to 'slide' or 'color' depending on the position */}
                                <ProductIntroduction />

                            </div>

                            <div
                                className={cx("slide")}
                                style={tween(scrollY, [
                                        [posTopTop + this.height, { bottom: 0, opacity: 1, transform: translate3d(0,0,0) }],
                                      [posTopTop + this.height * 2, { bottom: this.height, opacity: 0, transform: translate3d(0,100,0)}]
                                      ])}>

                                {/* when we hit the appropriate scroll position, change the
                                text to 'slide' or 'color' depending on the position */}

                                <CompanyIntroduction />
                            </div>

                            </section>
                            </div>

                        }
                    </TrackedDiv>
                </div>
                }
            </TrackDocument>
        );
    }
}



export default MainPage;
