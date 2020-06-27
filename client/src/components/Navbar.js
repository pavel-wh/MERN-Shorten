import React, { useEffect, useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import M from 'materialize-css'

export const Navbar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)

  useEffect(() => {
    let sidenav = document.querySelector('#mobile-demo')
    M.Sidenav.init(sidenav, {})
  })

  const logoutHandler = (event) => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <div>
      <nav class="navbar-fixed">
        <div
          className="nav-wrapper yellow darken-4"
          style={{ padding: '0 1.5rem' }}
        >
          <span className="brand-logo">Сокращай</span>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/create">Сократить</NavLink>
            </li>
            <li>
              <NavLink to="/links">Ссылки</NavLink>
            </li>
            <li>
              <a href="/" onClick={logoutHandler}>
                Выйти
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <NavLink to="/create" className="sidenav-close">
            Сократить
          </NavLink>
        </li>
        <li>
          <NavLink to="/links" className="sidenav-close">
            Ссылки
          </NavLink>
        </li>
        <li>
          <a href="/" className="sidenav-close" onClick={logoutHandler}>
            Выйти
          </a>
        </li>
      </ul>
    </div>
  )
}
