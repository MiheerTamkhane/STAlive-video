// All comps exporst below
export { Header } from "./Components/Header/Header";
export { Navbar } from "./Components/Navbar/Navbar";
export { Sidebar } from "./Components/Sidebar/Sidebar";
export { Banner } from "./Components/Banner/Banner";
export { Poster } from "./Components/Poster/Poster";
export { CardSwiper } from "./Components/CardSwiper/CardSwiper";
export { SliderVideoCard } from "./Components/SliderVideoCard/SliderVideoCard";
export { VideoCard } from "./Components/VideoCard/VideoCard";
export { Login } from "./Components/Login/Login";
export { Signup } from "./Components/Signup/Signup";
export { ReactPlayerFrame } from "./Components/ReactPlayerFrame/ReactPlayerFrame";
export { Filter } from "./Components/Filter/Filter";
export { HorizontalCard } from "./Components/HorizontalCard/HorizontalCard";
export { Modal } from "./Components/Modal/Modal";

// MyRoutes exports
export { MyRoutes } from "./MyRoutes/MyRoutes";
export { ProtectedRoute } from "./MyRoutes/ProtectedRoute";

// All pages exports belows
export { LandingPage } from "./Pages/LandingPage/LandingPage";
export { SigninPage } from "./Pages/SigninPage/SigninPage";
export { VideoListing } from "./Pages/VideoListing/VideoListing";
export { PlaylistPage } from "./Pages/PlaylistPage/PlaylistPage";
export { HistoryPage } from "./Pages/HistoryPage/HistoryPage";
export { LikedPage } from "./Pages/LikedPage/LikedPage";
export { WatchlaterPage } from "./Pages/WatchlaterPage/WatchlaterPage";
export { SingleVideoPage } from "./Pages/SingleVideoPage/SingleVideoPage";

// All context exports below
export { useAuth, AuthProvider } from "./Contexts/AuthContext";
export { useVideos, VideosProvider } from "./Contexts/VideosContext";
export { useNav, NavProvider } from "./Contexts/NavContext";
export { useFilter, FilterProvider } from "./Contexts/FilterContext";
export { useLikedVideos, LikeProvider } from "./Contexts/LikeContext";
export {
  useWatchLater,
  WatchLaterProvider,
} from "./Contexts/WatchLaterContext";
export { useHistory, HistoryProvider } from "./Contexts/HistoryContext";
export { usePlaylists, PlaylistsProvider } from "./Contexts/PlaylistContext";

// Seriveces exporst below:
export { signupService } from "./Services/AuthServices/signupSerivice";
export { loginService } from "./Services/AuthServices/loginService";
export { addToLikedVideos } from "./Services/LikeServices/addToLikedVideos";
export { removeFromLikedVideos } from "./Services/LikeServices/removeFromLikedVideos";
export { addToWatchLater } from "./Services/WatchLaterServices/addToWatchLater";
export { removeFromWatchLater } from "./Services/WatchLaterServices/removeFromWatchLater";
export { addToHistory } from "./Services/HistoryServices/addToHistory";
export { removeFromHistory } from "./Services/HistoryServices/removeFromHistory";
export { removeAllFromHistory } from "./Services/HistoryServices/removeAllFromHistory";
export { addToPlaylistsService } from "./Services/PlaylistServices/addToPlaylistsService";
export { addVideoToPlaylistService } from "./Services/PlaylistServices/addVideoToPlaylistService";
export { removeVideoFromPlaylistService } from "./Services/PlaylistServices/removeVideoFromPlaylistService";
// Utils functions below
export { getVideoLink } from "./Utils/getVideoLink";
export { getThumbnailLink } from "./Utils/getThumbnailLink";
export {
  filterByTopics,
  filterByDuration,
  filterBySorting,
} from "./Utils/filterUtilsFunctions";
export { numFormatter } from "./Utils/numFormatter";

// Reducer Functions below:
export { filterReducerFunction } from "./Reducers/filterReducerFunction";
