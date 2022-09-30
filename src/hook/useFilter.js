import { useContext } from "react";
import { AllStore } from "../context/store";

function useFilter() {
  const { filter, setFilter } = useContext(AllStore);
  return [filter, setFilter];
}

export default useFilter;
