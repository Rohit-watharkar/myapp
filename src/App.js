import {
  createBrowserRouter,
  Link,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
} from 'react-router-dom'

function App() {
  let router = createBrowserRouter([
    { path: '/', element: <P1 /> },
    { path: '/p1', element: <P1 /> },
    { path: '/p2', element: <P2 /> },
    { path: '/p3', element: <P3 /> },
    { path: '*', element: <h1>Not found</h1> },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
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
