import React, { useEffect, useState } from 'react'

const App = () => {
  const [name, setName] = useState([]);
  useEffect ( () => {
    const Api = 'https://jsonplaceholder.typicode.com/users'


    fetch(Api).then((response) => response.json())
    .then ((name)=> setName(name))
  },[])
  return (
    <div>
      {
        name.map((data, index) =>
          <p key={index}>
            Name: {data.name} <br />
            Email : {data.email}
        </p>
        
        )
      }

    </div>
  )
}

export default App