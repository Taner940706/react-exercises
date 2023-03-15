import { useState } from "react";


// part 1
// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   return (
//     <div>
//       <h2>give feedback</h2>
//       <button type="button" onClick={() => setGood(good + 1)}>
//         good
//       </button>
//       <button type="button" onClick={() => setNeutral(neutral + 1)}>
//         neutral
//       </button>
//       <button type="button" onClick={() => setBad(bad + 1)}>
//         bad
//       </button>
//       <h2>statistics</h2>
//       <p>good {good}</p>
//       <p>neutral {neutral}</p>
//       <p>bad {bad}</p>
//     </div>
//   );
// };

// export default App;


// part 2
// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   return (
//     <div>
//       <h2>give feedback</h2>
//       <button type="button" onClick={() => setGood(good + 1)}>
//         good
//       </button>
//       <button type="button" onClick={() => setNeutral(neutral + 1)}>
//         neutral
//       </button>
//       <button type="button" onClick={() => setBad(bad + 1)}>
//         bad
//       </button>
//       <h2>statistics</h2>
//       <p>good {good}</p>
//       <p>neutral {neutral}</p>
//       <p>bad {bad}</p>
//       <p>all {good + neutral + bad}</p>
//       <p>average {(good * 1 + bad * -1) / (good + neutral + bad)}</p>
//       <p>positive {good / (good + neutral + bad)}</p>
//     </div>
//   );
// };

// export default App;


//part 3

const Statistics = (props) => {
  return (
    <div>
      <h2>give feedback</h2>
      <button type="button" onClick={() => props.setGood(props.good + 1)}>
        good
      </button>
      <button type="button" onClick={() => props.setNeutral(props.neutral + 1)}>
        neutral
      </button>
      <button type="button" onClick={() => props.setBad(props.bad + 1)}>
        bad
      </button>
      <h2>statistics</h2>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.good + props.neutral + props.bad}</p>
      <p>
        average{" "}
        {(props.good * 1 + props.bad * -1) /
          (props.good + props.neutral + props.bad)}
      </p>
      <p>positive {props.good / (props.good + props.neutral + props.bad)}</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <Statistics
      good={good}
      setGood={setGood}
      neutral={neutral}
      setNeutral={setNeutral}
      setBad={setBad}
      bad={bad}
    />
  );
};

export default App;