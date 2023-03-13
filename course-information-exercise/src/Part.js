// step 2
// const Part = (props) =>{
//     return (
//         <><p>{props.part1} {props.exercise1}</p><p>{props.part2} {props.exercise2}</p><p>{props.part3} {props.exercise3}</p></>
//     )
// }

// export default Part
// step 4
const Part = (props) => {
    return (
      <>
        <p>
          {props.part1} {props.exercise1}
        </p>
        <p>
          {props.part2} {props.exercise2}
        </p>
        <p>
          {props.part3} {props.exercise3}
        </p>
      </>
    );
  };
  
  export default Part;