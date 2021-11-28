import React, { Component } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementValue = (e) => {
    const optionName = e.target.innerHTML;
    this.setState((prevState) => ({ [optionName]: prevState[optionName] + 1 }));
  };

  countTotalFeedback = () =>
    Object.keys(this.state).reduce((sum, value) => sum + this.state[value], 0);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.incrementValue}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            options={this.state}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}
