import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import SearchBar from './SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './css/Navbar.css'
import ShoppingCartModal from './ShoppingCartModal';
import SignupFormModal from './auth/SignupFormModal';
import LoginFormModal from './auth/LoginFormModal';
import SubNavBar from './SubNavBar';

const NavBar = ({ email, password }) => {
  const history = useHistory()
  const user = useSelector(state => state.session.user)
  return (
    <>
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
              style={{ textDecoration: "none", color: "#E2E3E5" }}
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>

          {!user && (
            <li>
              <LoginFormModal />
            </li>
          )}
          {!user && (
            <li>
              <SignupFormModal />
            </li>
          )}
          {user && <li className="username"> {user.username} </li>}
          {user && (
            <ShoppingCartModal />
          )}
          {user && (
            <li>
              <LogoutButton />
            </li>
          )}
        </ul>
      </nav>
      <SubNavBar user={user} />
    </>
  );
}

export default NavBar;
