export const setData = (data) => ({
  type: 'SET_DATA',
  payload: data,
});

export const setLoading = (loading) => ({
  type: 'SET_LOADING',
  payload: loading,
});

export const setSidebarOpen = (isOpen) => ({
  type: 'SET_SIDEBAR_OPEN',
  payload: isOpen,
});

export const setSearchQuery = (query) => ({
  type: 'SET_SEARCH_QUERY',
  payload: query,
});

export const setRefreshing = (refreshing) => ({
  type: 'SET_REFRESHING',
  payload: refreshing,
});
