import React, { useContext, useReducer, createContext } from "react";
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "./action";
import reducer from "./reducer";
import axios from "axios";

const token = localStorage.getItem("token")
const user = localStorage.getItem("user")
const userLocation = localStorage.getItem("location")

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user  ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
  jobLocation: userLocation || "",
};
 
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({user, token, location})  => {
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("token", token)
    localStorage.setItem("location", location)
  }

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    localStorage.removeItem("location")
  }

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      const { user, token, location } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      });
      // local str
      addUserToLocalStorage({user, token, location})
    } catch (error) {
      // console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    console.log(currentUser);
  }

  return (
    <AppContext.Provider
      value={{ ...state, displayAlert, clearAlert, registerUser, loginUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
