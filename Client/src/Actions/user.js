import * as api from "../Api";

export const signup = (formData, navigate) => async (dispatch) => {
  const { data } = await api.signup(formData);
  const action = {
    type: "SIGNUP",
    payload: data,
  };
  dispatch(action);
  navigate("/");
};

export const login = (formData, navigate) => async (dispatch) => {
  const { data } = await api.login(formData);
  const action = {
    type: "LOGIN",
    payload: data,
  };
  dispatch(action);
  navigate("/");
};
