// src/context/ContextProvider.jsx
import PropTypes from "prop-types";
import { useState } from "react";
import { StateContext } from "./stateContext";

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("ACCESS_TOKEN");
  };

  const [token, setToken] = useState(() =>
    localStorage.getItem("ACCESS_TOKEN")
  );

  const _setToken = (token) => {
    setToken(token);

    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  return (
    <StateContext.Provider
      value={{ user, token, setUser, setToken: _setToken, updateUser, logout }}
    >
      {children}
    </StateContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
