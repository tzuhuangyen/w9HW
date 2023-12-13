// src/App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ThemeToggle from "./ThemeToggle";

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Redux Theme App</h1>
        <ThemeToggle />
      </div>
    </Provider>
  );
}

export default App;
