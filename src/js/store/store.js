import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
//  import middleware
import thunk from 'redux-thunk'
import logger from 'redux-logger'
//  import reducers
import dataReducer from './reducers/dataReducer'
import uiReducer from './reducers/uiReducer'
import userReducer from './reducers/userReducer'

const middleware = [thunk, logger]
const reducer = combineReducers({
    user: userReducer,
    data: dataReducer,
    ui: uiReducer,
})

const store = createStore(
    reducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store

/**
 *  !! State Patterns
 *
 *  import { useSelector, useDispatch } from 'react-redux'
 *
 *  !State Hook:
 *  const global = useSelector(redux => redux)
 *
 *  !Dispatch Hook:
 *  dispatch({ type: 'increase-counter' })
 */
