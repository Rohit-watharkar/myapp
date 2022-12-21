import { Link } from 'react-router-dom'

function AppNavLinks() {
  return (
    <div>
      <Link to="/home" className="fs-4">
        Home |
      </Link>
      <Link to="/explore" className="fs-4">
        Explore |
      </Link>
      <Link to="/notifications" className="fs-4">
        Notifications
      </Link>
    </div>
  )
}

export default AppNavLinks
