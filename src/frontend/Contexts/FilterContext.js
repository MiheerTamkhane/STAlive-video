import { createContext, useContext, useReducer } from "react";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const reducerFun = (state, action) => {
    switch (action.type) {
      case "SORT_BY":
        return { ...state, sortBy: action.payload };
      case "BY_TOPIC":
        return { ...state, topic: action.payload };
      case "BY_TIME":
        return { ...state, duration: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducerFun, {
    sortBy: "newest",
    topic: "",
    duration: "",
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
