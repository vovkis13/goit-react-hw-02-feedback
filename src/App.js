import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./components/Statistics/Statistics";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementValue = (e) => {
    const option = e.target.innerHTML;
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () =>
    Object.keys(this.state).reduce((sum, value) => sum + this.state[value], 0);

  countPositiveFeedbackPercentage = () =>
    this.state.good / this.countTotalFeedback();

  render() {
    return (
      <>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.incrementValue}
        />
        <Statistics
          options={this.state}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </>
    );
  }
}
