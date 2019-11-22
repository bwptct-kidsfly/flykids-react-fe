import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListContainer from './UserListContainer'

export default function UserList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res)
        setUsers(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      {users.map(users => {
        return <ListContainer key={users.id} users={users} />
      })}
    </div>
  )
}