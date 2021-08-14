import * as ActionTypes from './ActionTypes';

export const cartItemReducer = (state ={
                                    isLoading: true,
                                    errMess: false,
                                    cartItems: []
                                }, action) => {
    switch(action.type){
        case ActionTypes.ADD_CART_ITEMS :
                return {...state, isLoading: false, errMess: null, cartItems: action.payload};
        case ActionTypes.CART_ITEMS_LOADING :
            return {...state, isLoading: true, errMess: null, cartItems: {}};
        case ActionTypes.CART_ITEMS_FAILED :
            return {...state, errMess: action.payload};
        case ActionTypes.ADD_TO_CART :
            const item = action.payload;
            item.id = state.cartItems.length;
            return {...state, cartItems: state.cartItems.concat(item)};
        case ActionTypes.DELETE_FROM_CART:
            const cart = state.cartItems.filter(item => item.id !== action.payload.id);
            return {...state, cartItems: cart};
        default:
            return state;   
    }
}