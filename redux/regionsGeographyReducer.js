import * as ActionTypes from  './ActionTypes';

export const regionsGeographyReducer = (state ={
                            isLoading: true,
                            errMess: null,
                            regionsGeography: []
                        } , action) => {
        switch(action.type) {
            case ActionTypes.ADD_REGIONS_GEOGRAPHY :
                return {...state, isLoading: false, errMess:null, regionsGeography: action.payload};
            case ActionTypes.REGIONS_GEOGRAPHY_FAILED :
                return {...state, isLoading: false , errMess: action.payload};
            case ActionTypes.REGIONS_GEOGRAPHY_LOADING :
                return {...state, isLoading: true, errMess: null, regionsGeography: []};
            default:
                return state;
        }
    }