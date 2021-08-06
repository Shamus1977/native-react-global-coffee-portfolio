import * as ActionTypes from './ActionTypes';
import { REGIONS_HISTORY } from '../shared/regionsHistory';
import { REGIONS_COMMENTS } from '../shared/regionsComments';
import { CHARITIES } from '../shared/charities';
import { TOURS } from '../shared/tours'



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



/***************************************  REGIONS HISTORY ACTIONS ***********************************/
/****************************************************************************************** */



export const fetchRegionsHistory = () => dispatch => {

    dispatch(regionsHistoryLoading());

    setTimeout(() => {
        dispatch(addRegionsHistory(REGIONS_HISTORY));
    }, 2000);
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


/***************************************  CHARITIES ACTIONS ***********************************/
/**********************************************************************************************/



export const fetchCharities = () => dispatch => {

    dispatch(charitiesLoading());

    setTimeout(() => {
        dispatch(addCharities(CHARITIES));
    }, 2000);
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
    }, 2000);
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