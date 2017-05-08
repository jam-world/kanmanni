/**
 * @fileOverview
 * @name MainPage.js
 * @author Cha Chen
 * @license MIT
 */

import React, { Component } from 'react';
import {Link, DirectLink, Element, Events, animatieScroll as scroll, scrollSpy, scroller} from "react-scroll";
import "./MainPage.css";
import companyIntroduction from "./image/Schwarzkopf.jpg"
import product from "./image/product.jpg"
import school from "./image/school1.jpg"
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

/* config the scroller*/
scroller.scrollTo("school", {
    duration: 1500,
    delay: 100,
    smooth: "easeInOutQuint",
    containerId: "container"
})

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);

        this.height = 250
        this.totalHeight = this.height * 9;
        console.log(this.height)
        console.log(this.totalHeight)
    };

    componentDidMount() {
        Events.scrollEvent.register('begin', (to, element) => {
            console.log("begin", arguments);
        })

        Events.scrollEvent.register('end', (to, element) => {
            console.log("end", arguments);
        })

        scrollSpy.update();
    };

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    };

    scrollToTop() {
        scroll.scrollToTop();
    };

    scrollToBottom() {
        scroll.scrollToBottom();
    };

    scollTo() {
        scroll.scollTo(100);
    };

    scrollMore() {
        scroll.scrollMore(100);
    };

    handleSetActive(to) {
        console.log(to);
    };

    render() {
            {/* <div id="container">
                <Element name="CompanyIntroduction" className="element">
                <img src={companyIntroduction} alt="company introduction" height="100%" width="100%" />
                </Element>

                <Element name="product" className="element">
                <img src={product} alt="product" height="100%" width="100%" />
                </Element>

                <Element name="school" className="element">
                <img src={school} alt="school" height="100%" width="100%" />
                </Element>

                <Element name="contact" className="element">
                联系方式
                </Element>
                </div> */}

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
                                      [posTopTop + this.height * 7, { bottom: 0, backgroundColor: rgb(0, 131, 47), opacity: 1, transform: translate3d(0,0,0)}],
                                      [posTopTop + this.height * 8, { bottom: this.height, backgroundColor: rgb(92, 0, 47), opacity: 0, transform: translate3d(0,100,0)}]
                                      ])}>

                                {/* when we hit the appropriate scroll position, change the
                                text to 'slide' or 'color' depending on the position */}
                                <h3 className="slide-txt">
                                    {scrollY}
                                </h3>

                            </div>

                            <div
                                className={cx("slide")}
                                style={tween(scrollY, [
                                        [posTopTop + this.height * 5, { bottom: 0, backgroundColor: rgb(0, 92, 0), opacity: 1, transform: translate3d(0,0,0) }],
                                        [posTopTop + this.height * 6, { bottom: this.height, backgroundColor: rgb(92, 0, 47), opacity: 0, transform: translate3d(0,100,0)}]
                                      ])}>

                                {/* when we hit the appropriate scroll position, change the
                                text to 'slide' or 'color' depending on the position */}
                                <h3 className="slide-txt">
                                    {scrollY}
                                </h3>

                            </div>

                            <div
                                className={cx("slide")}
                                style={tween(scrollY, [
                                      [posTopTop + this.height * 3, { bottom: 0, backgroundColor: rgb(0, 0, 92), opacity: 1, transform: translate3d(0,0,0)}],
                                      [posTopTop + this.height * 4, { bottom: this.height, backgroundColor: rgb(92, 0, 47), opacity: 0, transform: translate3d(0,100,0)}]
                                      ])}>

                                {/* when we hit the appropriate scroll position, change the
                                text to 'slide' or 'color' depending on the position */}
                                <h3 className="slide-txt">
                                    {scrollY}
                                </h3>

                            </div>

                            <div
                                className={cx("slide")}
                                style={tween(scrollY, [
                                        [posTopTop + this.height, { bottom: 0, backgroundColor: rgb(92, 0, 0), opacity: 1, transform: translate3d(0,0,0) }],
                                      [posTopTop + this.height * 2, { bottom: this.height, backgroundColor: rgb(92, 0, 47), opacity: 0, transform: translate3d(0,100,0)}]
                                      ])}>

                                {/* when we hit the appropriate scroll position, change the
                                text to 'slide' or 'color' depending on the position */}
                                <h3 className="slide-txt">
                                    {scrollY}
                                </h3>

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
