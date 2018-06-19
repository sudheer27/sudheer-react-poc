import React, { Component } from 'react';

// import Styles from '../../styles.css';
import SlideOne from '../SlideOne/SlideOne';
import SlideTwo from '../SlideTwo/SlideTwo';
import SlideThree from '../SlideThree/SlideThree';
import SlideFour from '../SlideFour/SlideFour';
import SlideFive from '../SlideFive/SlideFive';
import SlideSix from '../SlideSix/SlideSix';
import RightArrow from '../Arrows/RightArrow/RightArrow';
import LeftArrow from '../Arrows/LeftArrow/LeftArrow';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
        slideCount: 1
    }
      this.nextSlide = this.nextSlide.bind(this);
      this.previousSlide = this.previousSlide.bind(this);
  }

  render() {
    return (
      <div className="slider">
        { this.state.slideCount === 1 ? <SlideOne /> : null }
        { this.state.slideCount === 2 ? <SlideTwo /> : null }
        { this.state.slideCount === 3 ? <SlideThree /> : null }
        { this.state.slideCount === 4 ? <SlideFour /> : null }
        { this.state.slideCount === 5 ? <SlideFive /> : null }
        { this.state.slideCount === 6 ? <SlideSix /> : null }
        <RightArrow nextSlide={this.nextSlide} />
        <LeftArrow previousSlide={this.previousSlide} />
      </div>
    );
  }
    nextSlide() {
      this.setState({ slideCount: this.state.slideCount + 1 })
    }

    previousSlide() {
      this.setState({ slideCount: this.state.slideCount - 1 })
    }
}