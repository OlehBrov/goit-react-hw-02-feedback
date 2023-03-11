export const FeedbackButtons = ({ onFeedbackClick }) => {
  return (
    <div>
      <button type="button" name="good" label="good" onClick={onFeedbackClick}>
        Good
      </button>
      <button
        type="submit"
        name="neutral"
        label="neutral"
        onClick={onFeedbackClick}
      >
        Neutral
      </button>
      <button type="submit" name="bad" label="bad" onClick={onFeedbackClick}>
        Bad
      </button>
    </div>
  );
};
