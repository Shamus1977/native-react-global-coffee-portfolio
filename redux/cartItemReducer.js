import * as ActionTypes from './ActionTypes';

export const cartItemReducer = (state ={
                                    isLoading: true,
                                    errMess: false,
                                    itemCount: 0,
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
            const name = item.name;
            item.id = state.cartItems.length;
            state.itemCount++;
            const findItem = state.cartItems.filter(index => index.name === action.payload.name);
                if(findItem.length > 0){
                    const foundItem = findItem[0];
                    foundItem.count ++;
                    const newCart = state.cartItems.filter(index => index.name !== action.payload.name);
                    newCart.push(foundItem);
                    return {...state, cartItems: newCart}
                }else{
                    item.count = 1;
                    return {...state, cartItems: state.cartItems.concat(item)};
                }
        case ActionTypes.DELETE_FROM_CART:
            const findProduct = state.cartItems.filter(index => index.name === action.payload.name);
            const foundItem = findProduct[0];
            state.itemCount --;
            if(foundItem.count > 1){
                foundItem.count --;
                const newCart = state.cartItems.filter(index => index.name !== action.payload.name);
                newCart.push(foundItem);
                return {...state, cartItems: newCart}
            }else{
                const cart = state.cartItems.filter(item => item.name !== action.payload.name);
            return {...state, cartItems: cart};
            }
        default:
            return state;   
    }
}