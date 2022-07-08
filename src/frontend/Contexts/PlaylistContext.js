import { createContext, useContext, useState } from "react";

const PlaylistsContext = createContext();

const PlaylistsProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);
  const [showModal, setShowModal] = useState(false);
  return (
    <PlaylistsContext.Provider
      value={{ playlists, setPlaylists, showModal, setShowModal }}
    >
      {children}
    </PlaylistsContext.Provider>
  );
};

const usePlaylists = () => {
  const context = useContext(PlaylistsContext);
  if (context === undefined) throw new Error("Playlist context error");

  return context;
};

export { usePlaylists, PlaylistsProvider };
