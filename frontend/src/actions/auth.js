import { AUTH, ERROR, SUCCESS, ERRORLOGIN, ERRORREGISTER } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });

    // go to home after successful login
    router("/");
  } catch (error) {
    dispatch({ type: ERRORLOGIN, errorMessageLogin: error.response.data.errorMessageLogin });
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: SUCCESS, successMessage: data.successMessage });
    dispatch({ type: AUTH, data });
    router('/emailSuccessfull');
  } catch (error) {
    dispatch({ type: ERRORREGISTER, errorMessageRegister: error.response.data.errorMessageRegister });
  }
};

export const resetpassword = (formData) => async (dispatch) => {
  try {
    const { data } = await api.resetpassword(formData);
    dispatch({ type: SUCCESS, successMessage: data.successMessage });
  } catch (error) {
    dispatch({ type: ERROR, errorMessage: error.response.data.errorMessage });
  }
};

export const forgetpassword = (formData) => async (dispatch) => {
  try {
    const { data } = await api.forgetpassword(formData);
    dispatch({ type: SUCCESS, successMessage: data.successMessage });
  } catch (error) {
    dispatch({ type: ERROR, errorMessage: error.response.data.errorMessage });
  }
};
