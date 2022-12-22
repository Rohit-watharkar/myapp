import { Route, Routes } from 'react-router-dom'
import AppNavLinks from './components/AppNavLinks'
import Explore from './components/Explore'
import Home from './components/Home'
import Notifications from './components/Notifications'
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <div>
      <AppNavLinks />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
