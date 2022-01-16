import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, demoUser } from '../../store/session';
import '../css/LoginForm.css'

const LoginForm = ({ setModal }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();

    const validationErrors = [];
    const regex = /^\S+@\S+\.\S+$/;
    const data = await dispatch(login(email, password));
    if (data) validationErrors.push('Credentials are invalid')
    if (!regex.test(email)) validationErrors.push('Please enter a valid email')
    if (password.length === 0) validationErrors.push('Please enter your password')
    setErrors(validationErrors)

    if (!data) setModal(false)
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleDemo = () => {
    setEmail('demo@aa.io')
    setPassword('password')
  }

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onLogin} className='form-container'>
      <div className='elements-container'>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='login-fields'>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            type='text'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className='login-fields'>
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            value={password}
            onChange={updatePassword}
            height='20'
          />
          <button type='submit' className='login-button'>Login</button>
          <button onClick={handleDemo} className='login-button'>Demo User</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
