import React from 'react';
import css from 'components/FeedbackStatiatics/FeedbackStatistics.module.css';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodFeedbackIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralFeedbackIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badFeedbackIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor(
      (this.state.good * 100) / Number(this.countTotalFeedback())
    );
  };

  render() {
    return (
      <div className={css.counter}>
        <div className="section_button">
          <p className={css.title}>Please leave feedback</p>
          <button
            type="button"
            className={css.button}
            onClick={this.goodFeedbackIncrement}
          >
            Good
          </button>
          <button
            type="button"
            className={css.button}
            onClick={this.neutralFeedbackIncrement}
          >
            Neutral
          </button>
          <button
            type="button"
            className={css.button}
            onClick={this.badFeedbackIncrement}
          >
            Bad
          </button>
        </div>

        <div className={css.section_statistic}>
          <p className={css.title}>Statistics</p>
          <span className={css.item}>Good: {this.state.good}</span>
          <span className={css.item}>Neutral: {this.state.neutral}</span>
          <span className={css.item}>Bad: {this.state.bad}</span>
          <span className={css.item}>Total: {this.countTotalFeedback()}</span>
          <span className={css.item}>
            Positive feedback: {this.countPositiveFeedbackPercentage()}%
          </span>
        </div>
      </div>
    );
  }
}

export default Counter;
