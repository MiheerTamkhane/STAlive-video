import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import {
  AuthProvider,
  VideosProvider,
  NavProvider,
  FilterProvider,
  LikeProvider,
} from "./frontend/index";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NavProvider>
          <VideosProvider>
            <FilterProvider>
              <LikeProvider>
                <App />
              </LikeProvider>
            </FilterProvider>
          </VideosProvider>
        </NavProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
