import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    const optionsArr = Object.keys(options);

    return (
      <div className={s.buttons}>
        {optionsArr.map(option => (
          <button
            key={option}
            type="button"
            className={s.button}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
