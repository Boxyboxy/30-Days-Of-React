import "./App.css";
import NumberGrid from "./components/NumberGrid";

function App() {
  const numbers = [1, 2, 3, 4, 5];
  // Numbers component
  const Numbers = ({ numbers }) => {
    const list = numbers.map((number) => <li>{number}</li>);
    return list;
  };

  const skills = [
    ["HTML", 10],
    ["CSS", 7],
    ["JavaScript", 9],
    ["React", 8],
  ];

  // Skill Component
  const Skill = ({ skill: [tech, level] }) => (
    <li>
      {tech} {level}
    </li>
  );

  // Skills Component
  const Skills = ({ skills }) => {
    const skillsList = skills.map((skill) => <Skill skill={skill} />);
    console.log(skillsList);
    return <ul>{skillsList}</ul>;
  };

  const countries = [
    { name: "Finland", city: "Helsinki" },
    { name: "Sweden", city: "Stockholm" },
    { name: "Denmark", city: "Copenhagen" },
    { name: "Norway", city: "Oslo" },
    { name: "Iceland", city: "Reykjavík" },
  ];
  //Country component
  const Country = ({ country: { name, city } }) => {
    return (
      <>
        <h2>{name}</h2>
        <small>{city}</small>
      </>
    );
  };

  //countries component
  const Countries = ({ countries }) => {
    const countryList = countries.map((country) => (
      <Country key={country.name} country={country} />
    ));
    return <div className="countries">{countryList}</div>;
  };

  let gridNumbers = [];
  for (let i = 0; i < 33; i++) {
    gridNumbers.push(i);
  }
  console.log(gridNumbers);

  return (
    <div className="container">
      <div>
        <h1>Skills level</h1>
        <Skills skills={skills} />
      </div>

      <div>
        <h1>Countries List</h1>
        <Countries countries={countries} />
      </div>

      <NumberGrid numbers={gridNumbers} />
    </div>
  );
}

export default App;
