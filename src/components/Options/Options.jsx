import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={css.wrapper_btn}>
      <button className={css.vote_btn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={css.vote_btn}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={css.vote_btn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 ? (
        <button className={css.vote_btn} onClick={resetFeedback}>
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Options;
