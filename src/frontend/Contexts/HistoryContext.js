import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import {
  useAuth,
  addToHistory,
  removeFromHistory,
  removeAllFromHistory,
} from "../index";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const [historyVideos, setHistoryVideos] = useState([]);
  const {
    auth: { authToken, status },
  } = useAuth();

  useEffect(() => {
    if (status) {
      (async () => {
        try {
          const { data } = await axios.get("/api/user/history", {
            headers: {
              authorization: authToken,
            },
          });
          setHistoryVideos(data.history);
        } catch (e) {
          console.error(e);
        }
      })();
    } else {
      setHistoryVideos([]);
    }
  }, [status]);

  const removeFromHistoryHandler = async (authToken, id) => {
    const data = await removeFromHistory(authToken, id);
    setHistoryVideos(data);
  };
  const removeAllFromHistoryHandler = async (authToken) => {
    const data = await removeAllFromHistory(authToken);
    setHistoryVideos(data);
  };

  const addToHistoryHandler = async (authToken, video) => {
    // if (historyVideos.find((historyVideo) => historyVideo._id === video._id)) {
    //   removeFromHistoryHandler(authToken, video._id);
    // }
    const data = await addToHistory(authToken, video);
    setHistoryVideos(data);
  };

  return (
    <HistoryContext.Provider
      value={{
        historyVideos,
        setHistoryVideos,
        removeFromHistoryHandler,
        addToHistoryHandler,
        removeAllFromHistoryHandler,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => {
  const context = useContext(HistoryContext);

  if (context === undefined) throw new Error("History Context Error!");

  return context;
};

export { useHistory, HistoryProvider };
