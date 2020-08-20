import hobbyReducers from './hobby'
import {combineReducers} from 'redux'
const rootReducer = combineReducers({
    hobby : hobbyReducers,
})

export default rootReducer;