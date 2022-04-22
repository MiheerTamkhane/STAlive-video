import { Sidebar, useHistory, HorizontalCard, useAuth } from "../../index";
import "./HistoryPage.css";
const HistoryPage = () => {
  const {
    auth: { authToken },
  } = useAuth();
  const { historyVideos, removeAllFromHistoryHandler } = useHistory();
  return (
    <>
      <Sidebar />
      <div className="page-text">
        <h1>Your History</h1>
        <button
          className="ct-nav-icons ct-btn clear-history-btn"
          onClick={() => removeAllFromHistoryHandler(authToken)}
        >
          Clear History
        </button>
      </div>
      <div className="videos-container">
        {historyVideos.map((item) => (
          <HorizontalCard key={item._id} data={item} />
        ))}
      </div>
    </>
  );
};

export { HistoryPage };
