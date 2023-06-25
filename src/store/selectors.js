export const contactSelector = state => state.contacts;
/* --------------------------------- filter --------------------------------- */
export const filterSelector = state => state.filter;
/* ---------------------------------- Auth ---------------------------------- */
export const setToken = state => state.auth.token;
export const setUserName = state => state.auth.user.name;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsFetchingCurrentUser = state => state.auth.isLoading;
