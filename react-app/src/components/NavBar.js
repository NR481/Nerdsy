import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import SearchBar from './SearchBar';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
=======
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
>>>>>>> main
import './css/Navbar.css'
import ShoppingCartModal from './ShoppingCartModal';

<<<<<<< HEAD
const NavBar = () => {
=======
const NavBar = ({ email, password }) => {
  const history = useHistory()
>>>>>>> main
  const user = useSelector(state => state.session.user)

  return (
    <nav>
      <Link to="/">
        <h1 className="name-banner">Nerdsy</h1>
      </Link>
      <div className="search-bar">
        <SearchBar />
      </div>
      <ul className="nav-items">
        <li>
          <NavLink
            to="/"
            exact={true}
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            Home
          </NavLink>
        </li>

        {!user && (
          <li>
            <NavLink
              to="/login"
              exact={true}
              style={{ textDecoration: "none" }}
              activeClassName="active"
            >
              Login
            </NavLink>
          </li>
        )}
        {!user && (
          <li>
            <NavLink
              to="/sign-up"
              exact={true}
              style={{ textDecoration: "none" }}
              activeClassName="active"
            >
              Sign Up
            </NavLink>
          </li>
        )}
        {user && (
          <ShoppingCartModal />
        )}
        {user && <li className="username"> {user.username} </li>}
        {user && (
          <li>
            <LogoutButton />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
