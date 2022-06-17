import React from 'react';
import s from '../index.css';
import { useState } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositivePercentage = () => {
    return Math.round((good / totalFeedback()) * 100);
  };

  const onLeaveFeedback = value => {
    switch (value) {
      case `good`:
        setGood(good + 1);
        break;
      case `neutral`:
        setNeutral(neutral + 1);
        break;
      case `bad`:
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const optionsArr = [`good`, `neutral`, `bad`];
  const total = totalFeedback();
  const positivePercentage = countPositivePercentage();

  return (
    <div className={s.feedbackContainer}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsArr}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={[positivePercentage]}
          />
        ) : (
          <Notification message="There is no feetback" />
        )}
      </Section>
    </div>
  );
};

export default App;
