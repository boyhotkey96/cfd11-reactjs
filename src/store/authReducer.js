import { AUTH_LOGIN, AUTH_LOGOUT } from './type'

const userStorage = JSON.parse(localStorage.getItem('user')) || null

const initState = {
  user: userStorage
}

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH_LOGIN: {
      return { user: action.payload }
    }
    case AUTH_LOGOUT:
      return { user: null }
    default:
      return state
  }
}
