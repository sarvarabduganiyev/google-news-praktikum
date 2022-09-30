import { useContext } from "react";
import { AllStore } from "../context/store";

function useAuth() {
  const { token, setToken } = useContext(AllStore);
  return [token, setToken];
}

export default useAuth;
