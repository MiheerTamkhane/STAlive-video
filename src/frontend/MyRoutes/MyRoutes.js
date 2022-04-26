import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  ProtectedRoute,
  LandingPage,
  SigninPage,
  useAuth,
  VideoListing,
  PlaylistPage,
  HistoryPage,
  WatchlaterPage,
  LikedPage,
  SingleVideoPage,
} from "../index";
import { PlaylistVideosPage } from "../Pages";
import Mockman from "mockman-js";
const MyRoutes = () => {
  return (
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
  );
};

export { MyRoutes };
