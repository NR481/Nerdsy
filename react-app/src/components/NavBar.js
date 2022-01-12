import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import SearchBar from './SearchBar';
import { useSelector } from 'react-redux';
import './css/Navbar.css'

const NavBar = () => {
  const user = useSelector(state => state.session.user)

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} style={{textDecoration: 'none'}}activeClassName='active'>
            Home
          </NavLink>
        </li>

        { !user &&
          <li>
            <NavLink to='/login' exact={true} style={{textDecoration: 'none'}} activeClassName='active'>
              Login
            </NavLink>
          </li>
        }
        { !user &&
          <li>
            <NavLink to='/sign-up' exact={true} style={{textDecoration: 'none'}} activeClassName='active'>
              Sign Up
            </NavLink>
          </li>
        }
        { user &&
          <li className='username'> {user.username} </li>
        }
        { user &&
          <li>
            <LogoutButton />
          </li>
        }
          <div>
            <SearchBar />
          </div>

      </ul>
    </nav>
  );
}

export default NavBar;
