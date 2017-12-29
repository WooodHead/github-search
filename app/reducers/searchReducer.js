import * as actions from '../constants/action-types';

const initialState = {
    loading: true,
    repos: [],
    avatar: null,
    searchInput: '',
    showRepos: false
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.TRACK_USER_SEARCH:
            return {
                ...state,
                searchInput: action.searchInput
            };
        case actions.FLAG_LOADING:
            return {
                ...state,
                loading: action.loading
            };
        case actions.GET_REPOS:
            return {
                ...state,
                repos: action.repos
            };
        case actions.GET_AVATAR:
            return {
                ...state,
                avatar: action.avatar
            };
        case actions.TOGGLE_REPOS:
            return {
                ...state,
                showRepos: action.showRepos
            };
        default:
            return state;
    }
};

export default searchReducer;