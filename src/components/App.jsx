import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statisticks from './Statisticks/Statisticks';


const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const totalFeedback = Object.values(feedback).reduce((a, b) => a + b, 0);
  const positiveFeedbackPercentage = Math.round(feedback.good / totalFeedback * 100);
  
  const handleLeaveFeedback = event => {
    event.target.blur()
    const option = event.target.name;
    setFeedback(prevState => ({...prevState, [option]: prevState[option] + 1}))
  }

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={Object.keys(feedback)}
        onLeaveFeedback={handleLeaveFeedback}
      />
      {totalFeedback > 0
        ? (<Statisticks
          stats={feedback}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />)
        : (<Notification message="There is no feedback"></Notification>)
      }
    </Section>
  )
};

export default App;
