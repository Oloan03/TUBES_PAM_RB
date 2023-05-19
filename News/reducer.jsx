export const dataReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_DATA':
        return action.payload;
      default:
        return state;
    }
  };
  
  export const loadingReducer = (state = true, action) => {
    switch (action.type) {
      case 'SET_LOADING':
        return action.payload;
      default:
        return state;
    }
  };
  
  export const sidebarOpenReducer = (state = false, action) => {
    switch (action.type) {
      case 'SET_SIDEBAR_OPEN':
        return action.payload;
      default:
        return state;
    }
  };
  
  export const searchQueryReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_SEARCH_QUERY':
        return action.payload;
      default:
        return state;
    }
  };
  
  export const refreshingReducer = (state = false, action) => {
    switch (action.type) {
      case 'SET_REFRESHING':
        return action.payload;
      default:
        return state;
    }
  };
  