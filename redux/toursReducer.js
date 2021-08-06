import * as ActionTypes from './ActionTypes';


export const toursReducer = (state = {
                                isLoading: true,
                                errMess: null,
                                tours: []
                            } , action) => {
    switch(action.type){
        case ActionTypes.ADD_TOURS :
            return {...state, isLoading: false, errMess: null, tours: action.payload};
        case ActionTypes.TOURS_FAILED :
            return {...state, isLoading: false, errMess: action.payload};
        case ActionTypes.TOURS_LOADING :
            return {...state, isLoading: true, errMess: null, tours:[]};
        default:
            return state;
    }
}