import { createStore, combineReducers, applyMiddleware } from 'redux'
import { authReducer } from './authReducer'

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

/**
 * B1: tạo store
 * B2: gắn store vào reacjs -> using reacct-redux to connect
 * B3: sử dụng useSelector để lấy dữ liệu từ store
 * B4: sử dụng useDispatch để dispatch action vào store
*/

const reducers = combineReducers({
  counterReducer: counterReducer,
  authReducer,
})

const logger = store => next => action => {
    console.log(action)
    return next(action)
}

const thunk = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch)
  }

  return next(action)
}

const store = createStore(
  reducers,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, logger)
)
store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'counter/decremented' })

export default store;