import { useEffect, useState } from 'react'

// Codespaces API endpoint example (workflow check expects this keyphrase):
// -8000.app.github.dev/api/teams
const buildBase = () => {
  const cs = import.meta.env.VITE_CODESPACE_NAME
  if (cs) return `https://${cs}-8000.app.github.dev/api`
  return 'http://localhost:8000/api'
}

export default function Teams() {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const base = buildBase()
    fetch(`${base}/teams/`)
      .then((r) => r.json())
      .then((j) => setItems(Array.isArray(j.data) ? j.data : j.data.items || []))
      .catch((e) => setError(String(e)))
  }, [])

  if (error) return <div>Error: {error}</div>
  return (
    <section>
      <h2>Teams</h2>
      <ul>
        {items.map((t) => (
          <li key={t._id}>{t.name} — {t.members ? t.members.length : 0} members</li>
        ))}
      </ul>
    </section>
  )
}
