import * as ActionTypes from './ActionTypes';

export const charitiesReducer = (state = {
                                    isLoading: true,
                                    errMess: false,
                                    charities: []
                                } , action) => {
            switch(action.type){
                case ActionTypes.ADD_CHARITIES :
                    return {...state, isLoading: false, errMess: null, charities: action.payload};
                case ActionTypes.CHARITIES_LOADING : 
                    return {...state, isLoading: true, errMess: null, charities: []};
                case ActionTypes.CHARITIES_FAILED : 
                    return {...state, isLoading: false, errMess: action.payload};
                default:
                    return state;
        }
    }