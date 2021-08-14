import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { regionsReducer } from './regionsReducer';
import { regionsHistoryReducer } from './regionsHistoryReducer';
import { regionsCommentsReducer } from './regionsCommentsReducer';
import { charitiesReducer } from './charitiesReducer';
import { toursReducer } from './toursReducer';
import { favoritesReducer } from './favoritesReducer';
import { regionsGeographyReducer } from './regionsGeographyReducer';
import { cartItemReducer } from './cartItemReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            regions: regionsReducer,
            regionsHistory: regionsHistoryReducer,
            regionsGeography: regionsGeographyReducer,
            regionsComments: regionsCommentsReducer,
            charities: charitiesReducer,
            tours: toursReducer,
            favorites: favoritesReducer,
            cartItems: cartItemReducer,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}