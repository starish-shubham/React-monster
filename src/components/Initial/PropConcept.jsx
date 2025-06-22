// 9

const PropConcept = () => {
  return (
    <div>
      <User
        name="Shubham"
        age={25}
        isMarried={false}
        img={"https://picsum.photos/200"}
        hobbies={["skating", "talking"]}
      />
    </div>
  );
};

const User = ({name,img,age,isMarried,hobbies}) => {
  return <section>
    <img src={img} alt="" />
    <h1>{name}</h1>
    <h1>{age}</h1>
    <h1>{isMarried}</h1>
    <h1>{hobbies[1]}</h1>
  </section>;
};

export default PropConcept;
