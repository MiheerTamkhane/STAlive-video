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
  WatchLaterProvider,
  HistoryProvider,
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
                <WatchLaterProvider>
                  <HistoryProvider>
                    <App />
                  </HistoryProvider>
                </WatchLaterProvider>
              </LikeProvider>
            </FilterProvider>
          </VideosProvider>
        </NavProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
