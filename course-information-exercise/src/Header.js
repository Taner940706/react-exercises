// step 2
// const Header = (props) => {
//     return (
//         <h1>{props.course}</h1>
//     )
// }

// export default Header
// step 4
import Part from "./Part";

const parts = [
  {
    name: "Fundamentals of React",
    exercises: 10
  },
  {
    name: "Using props to pass data",
    exercises: 7
  },
  {
    name: "State of a component",
    exercises: 14
  }
];

const Content = (props) => {
  return (
    <Part
      part1={parts[0].name}
      part2={parts[1].name}
      part3={parts[2].name}
      exercise1={parts[0].exercises}
      exercise2={parts[1].exercises}
      exercise3={parts[2].exercises}
    />
  );
};

export default Content;