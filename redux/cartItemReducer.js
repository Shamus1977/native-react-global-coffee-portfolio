import * as ActionTypes from './ActionTypes';

export const cartItemReducer = (state ={
                                    isLoading: true,
                                    errMess: false,
                                    itemCount: 0,
                                    totalCost: 0,
                                    totalDonation: 0,
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
            const itemId = item.id;
            const findItem = state.cartItems.filter(index => index.id === itemId);
            const itemTally = state.itemCount + 1;
            const totalPrice = state.totalCost + action.payload.price;
            const totalGiven = state.totalDonation + action.payload.donation;
                if(findItem.length > 0){
                    const foundItem = findItem[0];
                    foundItem.count ++;
                    const newCart = state.cartItems.filter(index => index.id !== itemId);
                    newCart.push(foundItem);
                    return {...state, cartItems: newCart, itemCount: itemTally, totalCost: totalPrice, totalDonation: totalGiven}
                }else{
                    item.count = 1;
                    return {...state, cartItems: state.cartItems.concat(item), itemCount: itemTally, totalCost: totalPrice, totalDonation: totalGiven};
                }
        case ActionTypes.DELETE_FROM_CART:
            const findProduct = state.cartItems.filter(index => index.id === action.payload.id);
            const foundItem = findProduct[0];
            const productTally = state.itemCount -1;
            const totalAmount = state.totalCost - action.payload.price;
            const totalGift = state.totalDonation - action.payload.donation;
            alert(JSON.stringify(action.payload.price));
            if(foundItem.count > 1){
                foundItem.count --;
                const newCart = state.cartItems.filter(index => index.id !== action.payload.id);
                newCart.push(foundItem);
                return {...state, cartItems: newCart, itemCount: productTally, totalCost: totalAmount, totalDonation: totalGift}
            }else{
                const cart = state.cartItems.filter(item => item.id !== action.payload.id);
            return {...state, cartItems: cart, itemCount: productTally, totalCost: totalAmount, totalDonation: totalGift};
            }
        default:
            return state;   
    }
}