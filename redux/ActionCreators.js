import * as ActionTypes from './ActionTypes';
import { REGIONS } from '../shared/regions';
import { REGIONS_HISTORY } from '../shared/regionsHistory';
import { REGIONS_COMMENTS } from '../shared/regionsComments';
import { CHARITIES } from '../shared/charities';
import { TOURS } from '../shared/tours';
import { REGIONS_GEOGRAPHY } from '../shared/regionsGeography';
import { CART_ITEMS } from '../shared/cartItems';


/***************************************  REGIONS ACTIONS ***********************************/
/****************************************************************************************** */
export const fetchRegions = () => dispatch => {

    dispatch(regionsLoading(REGIONS));

    setTimeout(() => {
        dispatch(addRegions(REGIONS));
    }, 1000);
};

export const regionsLoading = () => ({
    type: ActionTypes.REGIONS_LOADING
});

export const regionsFailed = errMess => ({
    type: ActionTypes.REGIONS_FAILED,
    payload: errMess
});

export const addRegions = regions => ({
    type: ActionTypes.ADD_REGIONS,
    payload: regions
});



/*************************************** REGIONS COMMENTS ACTIONS ***********************************/
/****************************************************************************************** */


export const fetchRegionsComments = () => dispatch => {
    dispatch(addRegionsComments(REGIONS_COMMENTS));
};

export const regionsCommentsLoading = () => ({
    type: ActionTypes.REGIONS_COMMENTS_LOADING
});

export const regionsCommentsFailed = errMess => ({
    type: ActionTypes.REGIONS_COMMENTS_FAILED,
    payload: errMess
});

export const addRegionsComments = regionsComments => ({
    type: ActionTypes.ADD_REGIONS_COMMENTS,
    payload: regionsComments
});

export const postRegionComment =( regionId , rating, author, text ) => dispatch => {
    const newComment = {
        regionId,
        rating,
        author,
        text,
        date: new Date().toISOString(),
    };

    setTimeout( () => {
        dispatch(addRegionComment(newComment));
    },
    2000);
};

export const addRegionComment = comment => (
    {
        type: ActionTypes.ADD_REGION_COMMENT,
        payload: comment
    }
);



/***************************************  REGIONS HISTORY ACTIONS ***********************************/
/****************************************************************************************** */



export const fetchRegionsHistory = () => dispatch => {

    dispatch(regionsHistoryLoading(REGIONS_HISTORY));

    setTimeout(() => {
        dispatch(addRegionsHistory(REGIONS_HISTORY));
    }, 1000);
};

export const regionsHistoryLoading = () => ({
    type: ActionTypes.REGIONS_HISTORY_LOADING
});

export const regionsHistoryFailed = errMess => ({
    type: ActionTypes.REGIONS_HISTORY_FAILED,
    payload: errMess
});

export const addRegionsHistory = regionsHistory => ({
    type: ActionTypes.ADD_REGIONS_HISTORY,
    payload: regionsHistory
});


/***************************************  REGIONS GEOGRAPHY ACTIONS ***********************************/
/****************************************************************************************** */



export const fetchRegionsGeography = () => dispatch => {

    dispatch(regionsGeographyLoading(REGIONS_GEOGRAPHY));

    setTimeout(() => {
        dispatch(addRegionsGeography(REGIONS_GEOGRAPHY));
    }, 1000);
};

export const regionsGeographyLoading = () => ({
    type: ActionTypes.REGIONS_GEOGRAPHY_LOADING
});

export const regionsGeographyFailed = errMess => ({
    type: ActionTypes.REGIONS_GEOGRAPHY_FAILED,
    payload: errMess
});

export const addRegionsGeography = regionsGeography => ({
    type: ActionTypes.ADD_REGIONS_GEOGRAPHY,
    payload: regionsGeography
});


/***************************************  CHARITIES ACTIONS ***********************************/
/**********************************************************************************************/



export const fetchCharities = () => dispatch => {

    dispatch(charitiesLoading());

    setTimeout(() => {
        dispatch(addCharities(CHARITIES));
    }, 1000);
};

export const charitiesLoading = () => ({
    type: ActionTypes.CHARITIES_LOADING
});

export const charitiesFailed = errMess => ({
    type: ActionTypes.CHARITIES_FAILED,
    payload: errMess
});

export const addCharities = charities => ({
    type: ActionTypes.ADD_CHARITIES,
    payload: charities
});


/***************************************  TOURS ACTIONS ***************************************/
/**********************************************************************************************/



export const fetchTours = () => dispatch => {

    dispatch(toursLoading());

    setTimeout(() => {
        dispatch(addTours(TOURS));
    }, 1000);
};

export const toursLoading = () => ({
    type: ActionTypes.TOURS_LOADING
});

export const toursFailed = errMess => ({
    type: ActionTypes.TOURS_FAILED,
    payload: errMess
});

export const addTours = tours => ({
    type: ActionTypes.ADD_TOURS,
    payload: tours
});


/***************************************  FAVORITES ACTIONS ***************************************/
/**********************************************************************************************/



export const postFavorite = regionId => dispatch => {
    setTimeout( () => {
        dispatch(addFavorite(regionId));
    }, 2000)
}

const addFavorite = regionId => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: regionId
})



/***************************************  CART ITEMS ACTIONS ***************************************/
/**********************************************************************************************/



export const fetchCartItems = () => dispatch => {

    dispatch(cartItemsLoading());

    setTimeout(() => {
        dispatch(addCartItems(CART_ITEMS));
    }, 1000);
};

export const cartItemsLoading = () => ({
    type: ActionTypes.CART_ITEMS_LOADING
});

export const cartItemsFailed = errMess => ({
    type: ActionTypes.CART_ITEMS_FAILED,
    payload: errMess
});

export const addCartItems = cartItems => ({
    type: ActionTypes.ADD_CART_ITEMS,
    payload: cartItems
});



export const postToCart =( productNumber, price, itemCount, name, donation, weight) => dispatch => {
    const newItem = {
        productNumber,
        name,
        price,
        itemCount,
        donation,
        weight
    }
    setTimeout( () => {
        dispatch(addToCart(newItem));
    },
    2000);
};

export const addToCart = item => (
    {
        type: ActionTypes.ADD_TO_CART,
        payload: item
    }
);

