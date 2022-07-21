import "./HorizontalCard.css";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts";
import { getThumbnailLink } from "../../Utils";
const HorizontalCard = ({ data, onRemoveHandler, showRmvBtn }) => {
  const {
    auth: { authToken },
  } = useAuth();
  const { _id, speaker, title, uploadAt } = data;
  const date = new Date(uploadAt);
  return (
    <div className="horizontal-card-wrapper">
      <Link to={`/videos/${_id}`} className="horizontal-card-container">
        <div className="horizontal-card-img">
          <img src={getThumbnailLink(_id)} alt={title} />
        </div>
        <div className="horizontal-card-content">
          <em>
            <p>{speaker}</p>
          </em>
          <h3>{title}</h3>
          <small>{date.toDateString()}</small>
        </div>
      </Link>
      {showRmvBtn && (
        <button
          className="material-icons-outlined delete-btn ct-btn ct-red"
          onClick={() => {
            onRemoveHandler(authToken, _id);
            toast.success("Video removed successfully!", {
              style: {
                fontSize: "16px",
              },
            });
          }}
        >
          delete
        </button>
      )}
    </div>
  );
};

export { HorizontalCard };
