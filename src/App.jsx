import React from "react";
import Router from "./router";
import "./App.css";
import StorageProvider from "./Context";

function App() {
  return (
    <StorageProvider>
      <Router />
    </StorageProvider>
  );
}

export default App;
