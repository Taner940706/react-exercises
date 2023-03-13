import Header from './Header';
import Content from './Content';
import Total from './Total';



//  step 1

// import React from 'react'
// import ReactDOM from 'react-dom/client'

// import App from './App'
// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// and App.js to match the following

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

// export default App


// step 2
// const App = () => {
//   // const-definitions
//   const course = 'Half Stack application development'
//   const exercises1 = 10
//   const exercises2 = 7
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course={course} />
//       <Content/>
//       <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
//     </div>
//   )
// }

// export default App

// step 3
const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  };
  const part3 = {
    name: "State of a component",
    exercises: 14
  };

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
    </div>
  );
};

export default App;