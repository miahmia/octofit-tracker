import { useEffect, useState } from 'react'

const buildBase = () => {
  const cs = import.meta.env.VITE_CODESPACE_NAME
  if (cs) return `https://${cs}-8000.app.github.dev/api`
  return 'http://localhost:8000/api'
}

export default function Activities() {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const base = buildBase()
    fetch(`${base}/activities/`)
      .then((r) => r.json())
      .then((j) => setItems(Array.isArray(j.data) ? j.data : j.data.items || []))
      .catch((e) => setError(String(e)))
  }, [])

  if (error) return <div>Error: {error}</div>
  return (
    <section>
      <h2>Activities</h2>
      <ul>
        {items.map((a) => (
          <li key={a._id}>{a.type} — {a.durationMinutes}m {a.distanceKm ? `— ${a.distanceKm}km` : ''}</li>
        ))}
      </ul>
    </section>
  )
}
