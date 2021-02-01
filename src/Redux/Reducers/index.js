import {counterReducer} from './counterReducer';
import {loggedReducer} from './loggedReducer';
import {combineReducers} from 'redux';

export const rootReducers = combineReducers({
    counterReducer,
    loggedReducer
});
