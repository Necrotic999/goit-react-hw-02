import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import { useEffect, useState } from "react";
import Notification from "./components/Notification/Notification";

function App() {
  const [vote, setVote] = useState(() => {
    const data = JSON.parse(window.localStorage.getItem("vote"));
    if (data?.good || data?.neutral || data?.bad) {
      return data;
    } else {
      return { good: 0, neutral: 0, bad: 0 };
    }
  });

  function updateFeedback(feedbackType) {
    switch (feedbackType) {
      case "good":
        setVote((prev) => ({ ...prev, good: prev.good + 1 }));
        break;

      case "neutral":
        setVote((prev) => ({ ...prev, neutral: prev.neutral + 1 }));
        break;

      case "bad":
        setVote((prev) => ({ ...prev, bad: prev.bad + 1 }));
        break;

      default:
        break;
    }
  }

  const totalFeedback = vote.good + vote.neutral + vote.bad;

  function resetFeedback() {
    setVote({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  useEffect(() => {
    window.localStorage.setItem("vote", JSON.stringify(vote));
  }, [vote]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={vote.good}
          neutral={vote.neutral}
          bad={vote.bad}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
