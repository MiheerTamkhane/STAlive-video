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

// Seriveces exporst below:
export { signupService } from "./Services/AuthServices/signupSerivice";
export { loginService } from "./Services/AuthServices/loginService";
