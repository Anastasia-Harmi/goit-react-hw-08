export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserData = (state) => state.auth.user;
export const selectUserDataIsRefreshing = (state) => state.auth.isRefreshing;
export const selectUserDataToken = (state) => state.auth.token;
// export const selectUserDataError = (state) => state.auth.error;
