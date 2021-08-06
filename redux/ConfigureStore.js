import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { regionsHistoryReducer } from './regionsHistoryReducer';
import { regionsCommentsReducer } from './regionsCommentsReducer';
import { charitiesReducer } from './charitiesReducer';
import { toursReducer } from './toursReducer';
import { favoritesReducer } from './favoritesReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            regionsHistory: regionsHistoryReducer,
            regionsComments: regionsCommentsReducer,
            charities: charitiesReducer,
            tours: toursReducer,
            favorites: favoritesReducer, 
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}