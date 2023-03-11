import React, { Component } from 'react';
import { FeedbackButtons } from './buttons/buttons';
import { Stats } from './stats/stats';
import {StatList, StatItem} from './feedbackControls.styled'

export class FeedbackControls extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackClick = ({ target }) => {
    this.setState(prevState => {
      return { [target.name]: prevState[target.name] + 1 };
    });
  };

  totalFeedbacks = state => {
    return Object.values(state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  };

  render() {
    return (
      <>
        <h1>Please, leave a feedback</h1>

        <FeedbackButtons
          onFeedbackClick={this.onFeedbackClick}
          state={this.state}
        />

        <h2>Statistics</h2>
        <StatList>
          <StatItem>Good: {this.state.good}</StatItem>
          <StatItem>Neutral: {this.state.neutral}</StatItem>
          <StatItem>Bad: {this.state.bad}</StatItem>
          <StatItem>Total feedbacks {this.totalFeedbacks(this.state)}</StatItem>
        </StatList>
        <Stats state={this.state} />
      </>
    );
  }
}
