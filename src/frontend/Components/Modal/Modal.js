import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import { useAuth, usePlaylists } from "../../Contexts";
import { useOnClickOutside } from "../../hooks";
import {
  deletePlaylistService,
  addToPlaylistsService,
  addVideoToPlaylistService,
  removeVideoFromPlaylistService,
} from "../../Services";
import "./Modal.css";
const Modal = ({ video, setShowModalClose }) => {
  const modalRef = useRef();
  const {
    auth: { authToken },
  } = useAuth();
  const { playlists, setPlaylists } = usePlaylists();
  const [showForm, setShowForm] = useState(false);
  const [currentPlaylist, setCurrentPlaylist] = useState({
    title: "",
    description: "",
  });

  useOnClickOutside(modalRef, () => {
    setCurrentPlaylist({
      title: "",
      description: "",
    });
    setShowModalClose();
  });

  const submitPlaylistHandler = async (authToken, currentPlaylist) => {
    const data = await addToPlaylistsService(authToken, currentPlaylist);
    setPlaylists(data);
    setCurrentPlaylist({
      title: "",
      description: "",
    });
    toast.success("Playlist created!", {
      style: {
        fontSize: "16px",
      },
    });
  };

  const addVideoToPlaylistHandler = async (playlistId) => {
    const data = await addVideoToPlaylistService(authToken, video, playlistId);
    setPlaylists(
      playlists.map((playlist) => (playlist._id === data._id ? data : playlist))
    );
  };

  const removeVideoFromPlaylistHandler = async (playlistId) => {
    const data = await removeVideoFromPlaylistService(
      authToken,
      video._id,
      playlistId
    );
    setPlaylists(
      playlists.map((playlist) => (playlist._id === data._id ? data : playlist))
    );
  };

  const deletePlaylistHandler = async (playlistId) => {
    const newPlaylists = await deletePlaylistService(authToken, playlistId);

    setPlaylists(newPlaylists);
    toast.success("Playlist removed!", {
      style: {
        fontSize: "16px",
      },
    });
  };

  return (
    <div
      className="modal-background-container"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="playlist-modal-container" ref={modalRef}>
        <div className="title-and-close">
          <h2>Save to...</h2>
          <span
            className="material-icons close-model"
            onClick={setShowModalClose}
          >
            close
          </span>
        </div>
        <div className="user-playlist">
          {playlists.map((playlist) => {
            return (
              <div key={playlist._id} className="single-playlist-container">
                <div className="playlist-checkbox">
                  <input
                    type="checkbox"
                    id={playlist.title}
                    checked={playlist.videos.some(
                      (playlistVideo) => playlistVideo._id === video._id
                    )}
                    onChange={(e) => {
                      if (e.target.checked) {
                        addVideoToPlaylistHandler(playlist._id);
                      } else {
                        removeVideoFromPlaylistHandler(playlist._id);
                      }
                    }}
                  />
                  <label htmlFor={playlist.title} className="checkbox-title">
                    {playlist.title}
                  </label>
                </div>
                <button
                  className="material-icons-outlined delete-playlist-btn"
                  onClick={() => deletePlaylistHandler(playlist._id)}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
        {!showForm ? (
          <button
            className="ct-nav-icons signin-text ct-btn create-btn"
            onClick={() => setShowForm(true)}
          >
            Create Playlist
          </button>
        ) : (
          <form
            className="ct-form playlist-form"
            onSubmit={(e) => {
              e.preventDefault();
              submitPlaylistHandler(authToken, currentPlaylist);
            }}
          >
            <div className="ct-input-div">
              <input
                type="text"
                className="ct-input playlist-title"
                placeholder="Title"
                required
                value={currentPlaylist.title}
                onChange={(e) =>
                  setCurrentPlaylist({
                    ...currentPlaylist,
                    title: e.target.value,
                  })
                }
              />
            </div>
            <div className="ct-input-div">
              <textarea
                type="text"
                className="ct-input playlist-desc"
                placeholder="Description"
                rows="2"
                cols="30"
                value={currentPlaylist.description}
                onChange={(e) =>
                  setCurrentPlaylist({
                    ...currentPlaylist,
                    description: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <button className="signin-text ct-btn create-btn" type="submit">
              Create
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export { Modal };
