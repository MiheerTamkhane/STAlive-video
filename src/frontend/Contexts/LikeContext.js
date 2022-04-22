import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth, addToLikedVideos, removeFromLikedVideos } from "../index";

const LikeContext = createContext();

const LikeProvider = ({ children }) => {
  const [likedVideos, setLikedVideos] = useState([]);
  const {
    auth: { authToken },
  } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/user/likes", {
          headers: {
            authorization: authToken,
          },
        });
        setLikedVideos(data.likes);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const addToLikedVideosHandler = async (authToken, video) => {
    const data = await addToLikedVideos(authToken, video);
    setLikedVideos(data);
  };
  const removeFromLikedVideosHandler = async (authToken, id) => {
    const data = await removeFromLikedVideos(authToken, id);
    setLikedVideos(data);
  };

  return (
    <LikeContext.Provider
      value={{
        likedVideos,
        setLikedVideos,
        addToLikedVideosHandler,
        removeFromLikedVideosHandler,
      }}
    >
      {children}
    </LikeContext.Provider>
  );
};

const useLikedVideos = () => {
  const context = useContext(LikeContext);

  if (context === undefined) throw new Error("Like Context Error!");

  return context;
};

export { useLikedVideos, LikeProvider };
