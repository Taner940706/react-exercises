import Part from './Part'

// step 2
// const part1 = 'Fundamentals of React'
// const exercises1 = 10
// const part2 = 'Using props to pass data'
// const exercises2 = 7
// const part3 = 'State of a component'
// const exercises3 = 14

// const Content = (props) => {
//     return (
//         <Part part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
//     )
// }

// export default Content

// step 3
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
  
  const Content = (props) => {
    return (
      <Part
        part1={part1.name}
        part2={part2.name}
        part3={part3.name}
        exercise1={part1.exercises}
        exercise2={part2.exercises}
        exercise3={part3.exercises}
      />
    );
  };
  
  export default Content;