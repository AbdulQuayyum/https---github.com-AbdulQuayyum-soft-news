import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/About'>About</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
