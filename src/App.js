import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  return (
    <>
      <AppNavLinks />

      <Routes>
        <Route path="/" element={<P1 />} />
        <Route path="/p1" element={<P1 />} />
        <Route
          path="/p2"
          element={
            <ProtectedRoute>
              <P2 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/p3"
          element={
            <ProtectedRoute>
              <P3 />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  )
}

function ProtectedRoute({ children }) {
  let login = localStorage.getItem('login')
  if (!login) {
    return <Navigate to="/" replace={true} />
  }

  return children
}

function AppNavLinks() {
  let login = localStorage.getItem('login')

  if (!login) {
    return (
      <>
        <Link to={'/'}>Home | </Link>
        <Link to={'/p1'}>P1 | </Link>
      </>
    )
  } else {
    return (
      <>
        <Link to={'/'}>Home | </Link>
        <Link to={'/p2'}>P2 | </Link>
        <Link to={'/p3'}>P3 |</Link>
      </>
    )
  }
}

function P1() {
  let navigate = useNavigate()
  let login = () => {
    localStorage.setItem('login', 'true')
    navigate(0)
  }

  return (
    <div>
      <h1>Page 1</h1>
      <input type="button" value="Login" onClick={login} />
    </div>
  )
}

function P2() {
  return (
    <div>
      <h1>Page 2</h1>
    </div>
  )
}

function P3() {
  let navigate = useNavigate()

  let logout = () => {
    localStorage.clear()
    navigate(0)
  }

  return (
    <div>
      <h1>Page 3</h1>
      <input type="button" value="Logout" onClick={logout} />
    </div>
  )
}

export default App
