import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth, addToWatchLater, removeFromWatchLater } from "../index";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const [watchLaterVideos, setWatchLaterVideos] = useState([]);
  const {
    auth: { authToken, status },
  } = useAuth();

  useEffect(() => {
    if (status) {
      (async () => {
        try {
          const { data } = await axios.get("/api/user/watchlater", {
            headers: {
              authorization: authToken,
            },
          });
          setWatchLaterVideos(data.watchlater);
        } catch (e) {
          console.error(e);
        }
      })();
    } else {
      setWatchLaterVideos([]);
    }
  }, [status]);

  const addToWatchLaterHandler = async (authToken, video) => {
    const data = await addToWatchLater(authToken, video);
    setWatchLaterVideos(data);
  };
  const removeFromWatchLaterHandler = async (authToken, id) => {
    const data = await removeFromWatchLater(authToken, id);
    setWatchLaterVideos(data);
  };
  return (
    <WatchLaterContext.Provider
      value={{
        watchLaterVideos,
        setWatchLaterVideos,
        addToWatchLaterHandler,
        removeFromWatchLaterHandler,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => {
  const context = useContext(WatchLaterContext);

  if (context === undefined) throw new Error("Watch Later Context Error!");

  return context;
};

export { useWatchLater, WatchLaterProvider };
