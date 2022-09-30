import { createContext, useState } from "react";

export const AllStore = createContext();

export const Context = ({ children }) => {
  const [token, setToken] = useState(window.localStorage.getItem("authToken"));
  const [filter, setFilter] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  return (
    <AllStore.Provider
      value={{ token, setToken, filter, setFilter, darkMode, setDarkMode }}
    >
      {children}
    </AllStore.Provider>
  );
};
