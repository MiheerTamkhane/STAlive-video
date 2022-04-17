import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  LandingPage,
  SigninPage,
  useAuth,
  VideoListing,
  PlaylistPage,
  HistoryPage,
  WatchlaterPage,
  LikedPage,
} from "../index";
import Mockman from "mockman-js";
const MyRoutes = () => {
  const {
    auth: { status },
  } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {!status && <Route path="/join" element={<SigninPage />} />}

      <Route path="/videos" element={<VideoListing />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/watchlater" element={<WatchlaterPage />} />
      <Route path="/liked" element={<LikedPage />} />
      <Route path="/playlist" element={<PlaylistPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/mock" element={<Mockman />} />
    </Routes>
  );
};

export { MyRoutes };
