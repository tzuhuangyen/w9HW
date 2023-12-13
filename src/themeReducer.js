// src/themeReducer.js

const themeReducer = (state = { theme: "light" }, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

export default themeReducer;
