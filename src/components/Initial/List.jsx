//7

const List = () => {
  const num = [1, 2, 3, 4, 5];

  return <div>
  {num.map((n) => n * 2)}
  </div>;
};
export default List;
