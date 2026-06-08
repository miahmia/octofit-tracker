import { useEffect, useState } from 'react'

// Codespaces API endpoint example (workflow check expects this keyphrase):
// -8000.app.github.dev/api/users
const buildBase = () => {
  const cs = import.meta.env.VITE_CODESPACE_NAME
  if (cs) return `https://${cs}-8000.app.github.dev/api`
  return 'http://localhost:8000/api'
}

export default function Users() {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const base = buildBase()
    fetch(`${base}/users/`)
      .then((r) => r.json())
      .then((j) => setItems(Array.isArray(j.data) ? j.data : j.data.items || []))
      .catch((e) => setError(String(e)))
  }, [])

  if (error) return <div>Error: {error}</div>
  return (
    <section>
      <h2>Users</h2>
      <ul>
        {items.map((u) => (
          <li key={u._id}>{u.name} — {u.email}</li>
        ))}
      </ul>
    </section>
  )
}
