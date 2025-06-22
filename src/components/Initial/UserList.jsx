//8

const UserList = () => {

    const users = [
        {id: 1, name: 'John Doe', age: 30},
        {id: 2, name: 'Jane Smith', age: 25},
        {id: 3, name: 'Alice Johnson', age: 28},
    ]

  return (
    <div>
      {users.map((user)=>(
        <div key={user.id}>
            <h1>Name : {user.name}</h1>
            <h1>Age : {user.age}</h1>
        </div>
      ))}
    </div>
  )
}

export default UserList
