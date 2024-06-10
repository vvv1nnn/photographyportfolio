import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
