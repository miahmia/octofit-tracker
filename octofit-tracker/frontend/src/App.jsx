import { Link, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Users from './components/Users'
import Teams from './components/Teams'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Workouts from './components/Workouts'

function Nav() {
  return (
    <nav className="nav">
      <Link to="/users">Users</Link>
      <Link to="/teams">Teams</Link>
      <Link to="/activities">Activities</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/workouts">Workouts</Link>
    </nav>
  )
}

function App() {
  return (
    <div className="app-root">
      <header>
        <h1>Octofit Tracker</h1>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
