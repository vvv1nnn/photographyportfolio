import { Link } from 'react-router-dom'

export default function MiniNav() {
  return (
    <>
      <div id="mininav">
        <ul>
          <Link to="/portfolio/portaits">
            <li>Portaits</li>
          </Link>
          {/* <Link>
            <li>Portaits</li>
          </Link>
          <Link>
            <li>Portaits</li>
          </Link> */}
        </ul>
      </div>
    </>
  )
}
