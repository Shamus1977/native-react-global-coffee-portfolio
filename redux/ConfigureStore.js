import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { regionsHistoryReducer } from './regionsHistoryReducer';
import { regionsCommentsReducer } from './regionsCommentsReducer';
import { charitiesReducer } from './charitiesReducer';
import { toursReducer } from './toursReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            regionsHistory: regionsHistoryReducer,
            regionsComments: regionsCommentsReducer,
            charities: charitiesReducer,
            tours: toursReducer
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}