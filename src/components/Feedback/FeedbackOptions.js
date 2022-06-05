 import PropTypes from "prop-types";
 import s from "./FeedbackOptions.module.css"
 
 const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return (
        <div className={s.feedbackButtons}>
        {options.map(option => (
        <button
          type="button"
          key={option} 
          className={s.feedbackButtons}
          onClick={() => onLeaveFeedback(option)}
        >
            {option}
            </button>
      ))}
        </div>
    )
}
FeedbackOptions.prototype = {
    onLeaveFeedback: PropTypes.func,
    option: PropTypes.array,
};


export default FeedbackOptions;