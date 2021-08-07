import * as ActionTypes from './ActionTypes';

export const regionsCommentsReducer = (state = {
                                    errMess: null,
                                    regionsComments: []
                                } , action) => {
        switch(action.type) {
            case ActionTypes.ADD_REGIONS_COMMENTS :
                return {...state, errMess: null, regionsComments: action.payload};
            case ActionTypes.REGIONS_COMMENTS_FAILED :
                return {...state, errMess: action.payload};
            case ActionTypes.ADD_REGION_COMMENT :
                const comment = action.payload;
                comment.id = state.regionsComments.length;
                return {...state, regionsComments: state.regionsComments.concat(comment)};
            default:
                return state;
        }
    }