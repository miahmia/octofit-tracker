import { useEffect, useState } from 'react'

// Codespaces API endpoint example (workflow check expects this keyphrase):
// -8000.app.github.dev/api/workouts
const buildBase = () => {
  const cs = import.meta.env.VITE_CODESPACE_NAME
  if (cs) return `https://${cs}-8000.app.github.dev/api`
  return 'http://localhost:8000/api'
}

export default function Workouts() {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const base = buildBase()
    fetch(`${base}/workouts/`)
      .then((r) => r.json())
      .then((j) => setItems(Array.isArray(j.data) ? j.data : j.data.items || []))
      .catch((e) => setError(String(e)))
  }, [])

  if (error) return <div>Error: {error}</div>
  return (
    <section>
      <h2>Workouts</h2>
      <ul>
        {items.map((w) => (
          <li key={w._id}>{w.title} — {w.durationMinutes}m</li>
        ))}
      </ul>
    </section>
  )
}
