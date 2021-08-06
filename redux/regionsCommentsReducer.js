import * as ActionTypes from './ActionTypes';

export const regionsCommentsReducer = (state = {
                                    errMess: null,
                                    regionsComments: []
                                } , action) => {
        switch(action.type) {
            case ActionTypes.ADD_REGIONS_COMMENTS :
                return {...state, errMess: null, regionsComments: action.payload};
            case ActionTypes.REGIONS_COMMENTS_FAILED :
                return {...state, errMess: action.payload}
            default:
                return state;
        }
    }