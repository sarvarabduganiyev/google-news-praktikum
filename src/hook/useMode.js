import { useContext } from "react";
import { AllStore } from "../context/store";

function useMode() {
  const { darkMode, setDarkMode } = useContext(AllStore);
  return [darkMode, setDarkMode];
}

export default useMode;
