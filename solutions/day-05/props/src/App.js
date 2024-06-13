import React from "react";

export default function App() {
  // Header Component
  // object destructuring in the props parameter
  const Header = ({
    data: {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    },
  }) => {
    console.log(data);
    // console.log(props)

    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{showDate(date)}</small>
        </div>
      </header>
    );
  };

  const showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[time.getMonth()];
    const year = time.getFullYear();
    const date = time.getDate();
    return ` ${month} ${date}, ${year}`;
  };

  // button component

  const buttonStyles = {
    backgroundColor: "#61dbfb",
    padding: 10,
    border: "none",
    borderRadius: 5,
    margin: 3,
    cursor: "pointer",
    fontSize: 18,
    color: "white",
  };
  const Button = (props) => (
    <button onClick={props.onClick} style={buttonStyles}>
      {props.text}{" "}
    </button>
  );
  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Eugene",
      lastName: "Ng",
    },
    date: new Date(),
  };
  return (
    <div className="app">
      <Header data={data} />
      <Button text="Say Hi" onClick={() => alert("Hi!")} />
      <Button
        text="Greet People"
        onClick={() => alert("Good on you, refreshing your react")}
      />
      <Button text="Show Date" onClick={() => alert(showDate(new Date()))} />
    </div>
  );
}
