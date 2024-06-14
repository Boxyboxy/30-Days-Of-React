function NumberGrid({ numbers }) {
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const getStyle = (num) => {
    if (isPrime(num)) {
      return { backgroundColor: "red" };
    } else if (num % 2 === 0) {
      return { backgroundColor: "green" };
    } else {
      return { backgroundColor: "yellow" };
    }
  };

  //GridBlock component
  const GridBlock = ({ number }) => {
    console.log();
    const style = getStyle(number);

    return (
      <div
        key={number}
        style={{
          ...style,
          width: "40px",
          height: "40px",
          display: "inline-block",
          textAlign: "center",
          border: "1px solid white",
        }}
      >
        {number}
      </div>
    );
  };

  //Grids component
  const grids = numbers.map((number) => (
    <GridBlock key={number} number={number} />
  ));

  return <div>{grids}</div>;
}

export default NumberGrid;
