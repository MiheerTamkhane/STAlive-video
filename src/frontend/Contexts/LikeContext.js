import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { addToLikedVideos, removeFromLikedVideos } from "../Services";

const LikeContext = createContext();

const LikeProvider = ({ children }) => {
  const [likedVideos, setLikedVideos] = useState([]);
  const {
    auth: { authToken, status },
  } = useAuth();

  useEffect(() => {
    if (status) {
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
    } else {
      setLikedVideos([]);
    }
  }, [status]);

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
