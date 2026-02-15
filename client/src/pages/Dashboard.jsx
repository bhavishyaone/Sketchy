import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    
    if (!userInfo || !userInfo.token) {
      navigate('/login')
      return
    }

    const fetchMessages = async () => {
      try {
        const res = await fetch('/api/contact', {
          headers: {
            Authorization: `Bearer ${userInfo.token}`
          }
        })
        const data = await res.json()
        
        if (res.ok) {
          setMessages(data)
        } else {
          setError(data.message)
          if (res.status === 401) {
            localStorage.removeItem('userInfo')
            navigate('/login')
          }
        }
      } catch (err) {
        setError('Failed to fetch messages')
      } finally {
        setLoading(false)
      }
    }

    fetchMessages()
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('userInfo')
    navigate('/login')
  }

  if (loading) return <div className="dashboard-loading">Loading...</div>

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <button onClick={handleLogout} className="dashboard-logout">Logout</button>
      </div>

      {error && <div className="dashboard-error">{error}</div>}

      <div className="dashboard-content">
        <h2>Recent Messages</h2>
        {messages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          <div className="messages-list">
            {messages.map(msg => (
              <div key={msg._id} className="message-card">
                <div className="message-card-header">
                  <strong>{msg.name}</strong>
                  <a href={`mailto:${msg.email}`}>{msg.email}</a>
                </div>
                <p className="message-card-body">{msg.message}</p>
                <span className="message-card-date">
                  {new Date(msg.createdAt).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
