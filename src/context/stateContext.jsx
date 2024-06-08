// src/context/stateContext.js
import { createContext, useContext } from "react";

export const StateContext = createContext({
  currentUser: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
  updateUser: () => {},
  logout: () => {},
});

export const useStateContext = () => useContext(StateContext);
