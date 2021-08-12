import * as ActionTypes from  './ActionTypes';

export const regionsReducer = (state ={
                            isLoading: true,
                            errMess: null,
                            regions: []
                        } , action) => {
        switch(action.type) {
            case ActionTypes.ADD_REGIONS :
                return {...state, isLoading: false, errMess:null, regions: action.payload};
            case ActionTypes.REGIONS_FAILED :
                return {...state, isLoading: false , errMess: action.payload};
            case ActionTypes.REGIONS_LOADING :
                return {...state, isLoading: true, errMess: null, regions: []};
            default:
                return state;
        }
    }