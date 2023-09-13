import "./Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return <header>
    <nav>
      <NavLink to="/">Domů</NavLink>
      <NavLink to="all-kempy">Kempy</NavLink>
    </nav>
  </header>
}

export default Navbar