import { createContext, useContext, useReducer } from "react";
import { filterReducerFunction } from "../Reducers";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducerFunction, {
    sortBy: "newest",
    topic: "",
    duration: "",
    searchInput: "",
  });
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) throw new Error("Filter context error!");

  return context;
};

export { useFilter, FilterProvider };
