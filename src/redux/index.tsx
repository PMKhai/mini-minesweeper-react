
import { createStore, combineReducers } from 'redux';
import gameReducer from './duck/game';


const rootReducer = combineReducers({
  game: gameReducer,
});

const store = createStore(rootReducer);

export default store;