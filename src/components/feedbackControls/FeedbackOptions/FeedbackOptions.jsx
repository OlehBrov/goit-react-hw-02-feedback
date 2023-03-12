export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <button type="button" name="good" label="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button
        type="submit"
        name="neutral"
        label="neutral"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button type="submit" name="bad" label="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};
