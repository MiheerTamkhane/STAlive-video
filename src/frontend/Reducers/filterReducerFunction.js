export const filterReducerFunction = (state, action) => {
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
