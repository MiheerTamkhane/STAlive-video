import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const VideosContext = createContext();

const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/videos");
        setVideos(data.videos);
      } catch (error) {
        console.error(error);
        return;
      }
    })();
  }, []);
  return (
    <VideosContext.Provider
      value={{ videos, setVideos, searchInput, setSearchInput }}
    >
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => {
  const context = useContext(VideosContext);
  if (context === undefined) throw new Error("Video Context Error!");

  return context;
};

export { useVideos, VideosProvider };
