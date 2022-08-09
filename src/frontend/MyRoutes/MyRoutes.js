import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import {
  PlaylistVideosPage,
  LandingPage,
  SigninPage,
  VideoListing,
  PlaylistPage,
  HistoryPage,
  WatchlaterPage,
  LikedPage,
  SingleVideoPage,
} from "../Pages";
import { ScrollToTop } from "../Components";
import Mockman from "mockman-js";
const MyRoutes = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join" element={<SigninPage />} />

        <Route
          path="/liked"
          element={
            <ProtectedRoute>
              <LikedPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <HistoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/playlist"
          element={
            <ProtectedRoute>
              <PlaylistPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/watchlater"
          element={
            <ProtectedRoute>
              <WatchlaterPage />
            </ProtectedRoute>
          }
        />

        <Route path="/videos" element={<VideoListing />} />
        <Route path="/videos/:videoID" element={<SingleVideoPage />} />
        <Route path="/playlist/:playlistId" element={<PlaylistVideosPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </ScrollToTop>
  );
};

export { MyRoutes };
