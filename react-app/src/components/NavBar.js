import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from 'react-redux';

import SearchBar from './SearchBar';

import { useSelector, useDispatch } from 'react-redux';
import './css/Navbar.css'

const NavBar = ({email, password}) => {
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
          <li>
            <NavLink to='/users' exact={true} style={{textDecoration: 'none'}} activeClassName='active'>
              Users
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
          <li>
            <SearchBar />
          </li>

      </ul>
    </nav>
  );
}

export default NavBar;
