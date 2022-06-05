import React from "react";
import s from "./Feedback/Feedback.module.css"
//import { Component } from "react";


class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0 
}


handleFeedback = state => {
    console.log(state);
    // this.setState((prevState => 
    //   ({[state]: prevState[state] + 1})));
}


render() {
    // const { good, neutral, bad } = this.state;
    // const options = Object.keys(this.state);

    return (
        <section className={s.feedbackSection}> 
        <div className={s.feedback}>
            <h2 className={s.feedbackNotice}>Please leave feedback</h2>
  
        <div className={s.feedbackButtons}>
            <button type="button" onClick={this.handleFeedback}>Good</button>
            <button type="button" onClick={this.handleFeedback}>Neutral</button>
            <button type="button" onClick={this.handleFeedback}>Bad</button>
        </div>
        <span className={s.feedbackStatistic}>Statistics</span>
        <ul className={s.statisticsList}>
            <li className={s.statisticsItems}>Good:</li>
            <li className={s.statisticsItems}>Neutral:</li>
            <li className={s.statisticsItems}>Bad:</li>
        </ul>
    </div>
    </section>
    )

}
   
}

export default App;