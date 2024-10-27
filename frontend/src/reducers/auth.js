import * as actionType from '../constants/actionTypes';


const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.ERRORLOGIN:
      return { ...state, authData: action.data, loading: false, errors: null, errorMessageLogin: action.errorMessageLogin };
      case actionType.ERROR:
        return { ...state, authData: action.data, loading: false, errors: null, errorMessage: action.errorMessage };
        case actionType.ERRORREGISTER:
          return { ...state, authData: action.data, loading: false, errors: null, errorMessageRegister: action.errorMessageRegister };
    case actionType.SUCCESSLOGIN:
      return { ...state, authData: action.data, loading: false, errors: null, successMessage: action.successMessageLogin };
    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;