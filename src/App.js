import "./App.css";

// const App = () => {
//   return (
//     <div>
//       <h1> hello from app</h1>
//       <h2>I am Rae</h2>
//       <Person name="Rae" age="32" job="junior developer" pet="Cat" /><br></br>
//       <Person name="Nash" age="33" job="Unemployed" pet="Dog" /><br></br>
//       <Person name="Poppy" age="31" job="Dog walker" pet="Fish" /><br></br>
//     </div>
//   );
// };

// const Person = (props) => {
//   return (
//     <div className="person">
//       <p>
//         Hi I'm {props.name} and I'm {props.age}
//       </p>
//       <Job job={props.job} />
//       <Pet pet={props.pet} />
//     </div>
//   );
// };

// const Job = (props) => {
//   return <p>Job role: {props.job}</p>;
// };

// const Pet = (props) => {
//   return <p>Their pet is a {props.pet}</p>;
// };

// -----x-----x-----x-----x----

// const App = () => {
//   return (
//     <div >
//       < ArticleRow />
//       < ArticleRow />

//     </div>
//   );
// };

// const ArticleRow = () => {
//   return (
//     <div className="articleRow">

//       <Article image="https://ichef.bbci.co.uk/news/976/cpsprodpb/46CF/production/_122072181_queues.jpg"/>
//       <Article image="https://ichef.bbci.co.uk/news/976/cpsprodpb/14859/production/_122075048_072600904-1.jpg" />
//       <Article image="https://ichef.bbci.co.uk/news/976/cpsprodpb/4B6B/production/_122070391_tpotd_ks_0055.jpg"/>
//       <Article image="https://ichef.bbci.co.uk/news/976/cpsprodpb/2929/production/_122073501_sandhammar_olycka_5.jpg"/>

//     </div>
//   );
// };

// const Article = (props) => {
//   return (
//     <div className="box2">

//       <Image image={props.image} />
//       <h1>
//         Title of article
//       </h1>

//     </div>
//   );
// };

// const Image = (props) => {
//   return <img className="image" src={props.image} />
// }

// import { useState } from "react";

// const IntroState = () => {
//   const [persons, setPersons] = useState([
//     { name: "dan", age: 33 },
//     { name: "ben", age: 21 },
//   ]);

//   return (
//     <div>
//       <Person name={persons[0].name} func={greeting} />
//       <Person name={persons[1].name} func={greeting} />
//     </div>
//   );
// };

// const greeting = (value) => {
//   alert("hello " + value);
// };

// const Person = (props) => {
//   return (
//     <div>
//       <h1 onClick={() => props.func(props.name)}> {props.name}</h1>
//     </div>
//   );
// };

// import { useState } from "react";

// const IntroState = () => {
//   const [num, setNum] = useState(0);
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={() => setNum(num + 1)}>add one</button>
//       <button onClick={() => setNum(num - 1)}>minus one</button>
//     </div>
//   );
// };

// MAP METHOD

// import { useState } from "react";

// const IntroState = () => {
//   const [christmasMovies, setChristmasMovies] = useState([
//     { movie: "point break", date: "1991" },
//     { movie: "fellowship of the ring", date: "2001" },
//     { movie: "potter", date: "2001" },
//     { movie: "die hard", date: "1989" },
//   ]);

//   return (
//     <div>
//       <h1>map method - movies</h1>
//       {christmasMovies.map((film, index) => {
//         return <Card key={index} name={film.movie} date={film.date} />;
//       })}
//     </div>
//   );
// };

// const Card = (props) => {
//   return (
//     <div>
//       <h2>movie: {props.name}</h2>
//       <p>release date: {props.date}</p>
//     </div>
//   );
// };

//   return (
//     <div>
//       <h1>map method - movies</h1>
//       {people.map((firstName, index) => {
//         return <Person key={index} name={firstName} />;
//       })}
//     </div>
//   );
// };

// // A LESS DRY VERSION IS TO DO THIS:
// const Person = (props) => {
//   return <h2>Hello there {props.name}</h2>;
// };

// export default App;

// COMMON

import { useState } from "react";

const IntroState = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);
  const [userInput, setUserInput] = useState("");

  const addHandler = () => {
    const newArray = [...numbers];
    newArray.push(numbers[numbers.length - 1] + 1);
    setNumbers(newArray);
  };

  const removeHandler = (index) => {
    const newArray = [...numbers];
    newArray.splice(index, 1);
    setNumbers(newArray);
  };

  const update = (event) => {
    setUserInput(event.target.value);
  };
  return (
    <div>
      <h1>numbers</h1>

      <input type="text" onChange={update} />
      <h3>{userInput}</h3>
      {numbers.map((num, index) => {
        return (
          <>
            <h1 key={index}>{num}</h1>
            <button onClick={() => removeHandler(index)}>remove</button>
          </>
        );
      })}
      <button onClick={addHandler}>add one</button>
    </div>
  );
};
export default IntroState;
