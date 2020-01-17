// export {
//     setData,
//     fetchDataFailed,
//     toggleFav,
//     initData
// } from './products';

export {
    requestFavorites,
    requestInit,
    requestFavoritesStart,
    requestFavoritesSuccess,
    requestFavoritesFail,
    fetchFavorites,
    fetchFavoritesSuccess,
    fetchFavoritesFail,
    fetchFavoritesStart
} from './favorites';

export {
    auth,
    logout,
    setAuthRedirectPath,
    authCheckState,
    logoutSucceed,
    authStart,
    authSuccess,
    authFail,
    checkAuthTimeout
} from './auth';

export {
    addData,
    getData
} from './api';