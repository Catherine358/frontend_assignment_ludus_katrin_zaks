import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import challengesReducer from './reducers/challenges';
import challengeReducer from './reducers/challenge';
import favouritesReducer from './reducers/favourites';

const rootReducer = combineReducers({
    challenges: challengesReducer,
    challenge: challengeReducer,
    favourites: favouritesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store
