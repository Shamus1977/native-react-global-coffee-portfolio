import * as ActionTypes from  './ActionTypes';

export const regionsHistoryReducer = (state ={
                            isLoading: true,
                            errMess: null,
                            regionsHistory: []
                        } , action) => {
        switch(action.type) {
            case ActionTypes.ADD_REGIONS_HISTORY :
                return {...state, isLoading: false, errMess:null, regionsHistory: action.payload};
            case ActionTypes.REGIONS_HISTORY_FAILED :
                return {...state, isLoading: false , errMess: action.payload};
            case ActionTypes.REGIONS_HISTORY_LOADING :
                return {...state, isLoading: true, errMess: null, regionsHistory: []};
            default:
                return state;
        }
    }