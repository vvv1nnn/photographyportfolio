import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import App from './components/App'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Portaits from './components/Portaits'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<About />} />
    {/* <Route path="/about" element={<About />} /> */}
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/portfolio/portaits" element={<Portaits />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/Contact" element={<Contact />} />
  </Route>,
)

export const router = createBrowserRouter(routes)
