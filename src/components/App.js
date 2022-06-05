import React from "react";
import s from "../index.css"
//import { Component } from "react";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";


class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0 
}

 onLeaveFeedback = options => {
    this.setState(prevState => ({ [options]: prevState[options] + 1 }));
  };

  countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      const total = good + neutral + bad;
      return total;
      };
      
  

countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return !total ? 0 : Math.round(this.state.good / total * 100);
};

render() {
    const { good, neutral, bad } = this.state;
    const objOptions = Object.keys(this.state)
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
        <div className={s.feedbackContainer}>
            <Section title="Please leave feedback">
            <FeedbackOptions
            options={objOptions}
            onLeaveFeedback={this.onLeaveFeedback}
            />
            
            </Section>
            <Section title="Statistics">
                {total ? (
                    <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={positivePercentage}
                    />
                ) : (
                    <Notification message="There is no feetback" />
                )}
        
        </Section>
    </div>
    )
}
   
}

export default App;