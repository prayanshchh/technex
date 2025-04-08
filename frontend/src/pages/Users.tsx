import { useEffect, useState } from 'react'
import axios from 'axios'

type User = { user_id: number; email: string }

export default function Users() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    axios.get('http://localhost:3000/users').then(res => setUsers(res.data))
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Users</h1>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.user_id}>{user.email}</li>
        ))}
      </ul>
    </div>
  )
}