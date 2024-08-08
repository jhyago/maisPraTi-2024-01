import { useState } from 'react'
import UserCard from "./components/UserCard"

function App() {
  
  const [user, setUser] = useState({name: 'Gandalf', age: 1000})

  return (
    <>
      <div>
        <UserCard user={user} setUser={setUser}></UserCard>
      </div>
    </>
  )
}

export default App