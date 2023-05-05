import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./layout/Header";
import DestinationIndex from "./components/DestinationIndex";
import { destinationApi } from "./api/destinationApi";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider api={destinationApi}>
      <Header />
      <DestinationIndex />
    </Provider>
  </React.StrictMode>
);
