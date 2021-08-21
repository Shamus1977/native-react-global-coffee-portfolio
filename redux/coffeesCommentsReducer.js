import * as ActionTypes from './ActionTypes';

export const coffeesCommentsReducer = (state = {
                                    errMess: null,
                                    coffeesComments: []
                                } , action) => {
        switch(action.type) {
            case ActionTypes.ADD_COFFEES_COMMENTS :
                return {...state, errMess: null, coffeesComments: action.payload};
            case ActionTypes.COFFEES_COMMENTS_FAILED :
                return {...state, errMess: action.payload};
            case ActionTypes.ADD_COFFEE_COMMENT :
                const comment = action.payload;
                comment.id = state.coffeesComments.length;
                return {...state, coffeesComments: state.coffeesComments.concat(comment)};
            default:
                return state;
        }
    }