import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import '../css/SignupForm.css'

const SignUpForm = ({ setModal }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();

    const validationErrors = []
    const regex = /^\S+@\S+\.\S+$/;
    if (!regex.test(email)) validationErrors.push('Please enter a valid email')
    if (password !== repeatPassword) validationErrors.push('Password and Repeat Password inputs must match')
    if (firstName.length < 1) validationErrors.push('Please enter your First Name')
    if (lastName.length < 1) validationErrors.push('Please enter your Last Name')
    if (username.length < 1) validationErrors.push('Please enter a User Name')
    if (validationErrors.length === 0) {
      const data = await dispatch(signUp(firstName, lastName, username, email, password));

      if (data) {
        data.forEach(item => {
          const message = item.split(' : ')[1]
          validationErrors.push(message)
        })
      }
    }
    setErrors(validationErrors)
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const updateLastName = (e) => {
    setLastName(e.target.value)
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp} className='signup-container'>
      <div className='elements-container'>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='login-fields'>
          <label>First Name</label>
          <input
            type='text'
            name='firstName'
            onChange={updateFirstName}
            value={firstName}
          ></input>
        </div>
        <div className='login-fields'>
          <label>Last Name</label>
          <input
            type='text'
            name='lastName'
            onChange={updateLastName}
            value={lastName}
          ></input>
        </div>
        <div className='login-fields'>
          <label>User Name</label>
          <input
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className='login-fields'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className='login-fields'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className='login-fields'>
          <label>Repeat Password</label>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button
          // disabled={password !== repeatPassword}
          className='signup-button'
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
