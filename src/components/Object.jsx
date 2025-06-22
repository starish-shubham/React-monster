// 8

const Object = () => {

    const person = [
  {
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "contactNo": "123-456-7890"
  },
  {
    "name": "Bob Smith",
    "email": "bob@example.com",
    "contactNo": "987-654-3210"
  },
  {
    "name": "Charlie Brown",
    "email": "charlie@example.com",
    "contactNo": "555-123-4567"
  }
]

  return (
    <div>
      {person.map(({name,email,contactNo}) => (
      /* {person.map((user) => ( */
        <ul key={Math.random}>
            <li>{name}</li>
            <li>{email}</li>
            <li>{contactNo}</li>
            {/* <li>{user.name}</li> */}
            {/* <li>{user.email}</li> */}
            {/* <li>{user.contactNo}</li> */}
        </ul>
      ))}
    </div>
  )
}

export default Object
