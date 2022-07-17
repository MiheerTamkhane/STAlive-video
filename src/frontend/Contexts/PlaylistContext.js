import { createContext, useContext, useState } from "react";

const PlaylistsContext = createContext();

const PlaylistsProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);
  return (
    <PlaylistsContext.Provider value={{ playlists, setPlaylists }}>
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
