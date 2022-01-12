// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const GET_USERS = 'session/GET_USERS';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

const getUsers = (users) => ({
  type: GET_USERS,
  users
})

const initialState = { user: null, users: {} };

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });


  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout/', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const signUp = (firstName, lastName, username, email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/signup/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      username,
      email,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const allUsers = () => async (dispatch) => {
  const response = await fetch('/api/users/')
  const data = await response.json()
  dispatch(getUsers(data))
  return data
}

export const demoUser = (email, password) => async (dispatch) => {
  const res = await fetch('/api/users/demo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      email,
      password
    })
  })
  const data = await res.json();
  dispatch(setUser(data.user));
  return res
}

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      return { user: action.payload, users: { ...state.users }}
    case REMOVE_USER:
      return { user: null, users: { ...state.users }}
    case GET_USERS:
      newState = { ...state, users: { ...state.users } }
      action.users.users.forEach(user => {
        newState.users[user.id] = user
      })
      return newState;
    default:
      return state;
  }
}
