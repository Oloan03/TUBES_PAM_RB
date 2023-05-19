import { combineReducers } from 'redux';

// Actions
export const SET_DATA = 'SET_DATA';
export const SET_LOADING = 'SET_LOADING';
export const SET_SIDEBAR_OPEN = 'SET_SIDEBAR_OPEN';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_REFRESHING = 'SET_REFRESHING';

// Action Creators
export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const setSidebarOpen = (isOpen) => ({
  type: SET_SIDEBAR_OPEN,
  payload: isOpen,
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const setRefreshing = (isRefreshing) => ({
  type: SET_REFRESHING,
  payload: isRefreshing,
});

// Reducers
const dataReducer = (state = [], action) => {
  switch (action.type) {
    case SET_DATA:
      return action.payload;
    default:
      return state;
  }
};

const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};

const sidebarOpenReducer = (state = false, action) => {
  switch (action.type) {
    case SET_SIDEBAR_OPEN:
      return action.payload;
    default:
      return state;
  }
};

const searchQueryReducer = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return action.payload;
    default:
      return state;
  }
};

const refreshingReducer = (state = false, action) => {
  switch (action.type) {
    case SET_REFRESHING:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer,
  loading: loadingReducer,
  sidebarOpen: sidebarOpenReducer,
  searchQuery: searchQueryReducer,
  refreshing: refreshingReducer,
});

export default rootReducer;
