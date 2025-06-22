//5

const Form = () => {
  let name = "John Doe";
  const multiply = (a, b) => {
    return a * b;
  };
  return (
    <div>
      <p>{name}</p>
      <h1>{multiply(3, 4)}</h1>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" placeholder="Enter your name" />
    </div>
  );
};

export default Form;
