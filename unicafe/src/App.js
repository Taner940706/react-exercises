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



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <button type="button" onClick={() => setGood(good + 1)}>
        good
      </button>
      <button type="button" onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button type="button" onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {(good * 1 + bad * -1) / (good + neutral + bad)}</p>
      <p>positive {good / (good + neutral + bad)}</p>
    </div>
  );
};

export default App;