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
  PlaylistsProvider,
  ThemeProvider,
} from "./frontend/Contexts";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <NavProvider>
            <VideosProvider>
              <FilterProvider>
                <LikeProvider>
                  <WatchLaterProvider>
                    <HistoryProvider>
                      <PlaylistsProvider>
                        <App />
                      </PlaylistsProvider>
                    </HistoryProvider>
                  </WatchLaterProvider>
                </LikeProvider>
              </FilterProvider>
            </VideosProvider>
          </NavProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
