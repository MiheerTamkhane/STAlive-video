import toast from "react-hot-toast";
import { Sidebar, HorizontalCard } from "../../Components";
import { useHistory, useAuth } from "../../Contexts";
import "./HistoryPage.css";
const HistoryPage = () => {
  const {
    auth: { authToken },
  } = useAuth();
  const {
    historyVideos,
    removeAllFromHistoryHandler,
    removeFromHistoryHandler,
  } = useHistory();
  return (
    <>
      <Sidebar />
      <div className="page-text">
        <h1>Your History</h1>
        <button
          className="ct-nav-icons ct-btn clear-history-btn"
          onClick={() => {
            removeAllFromHistoryHandler(authToken);
            toast.success("History cleared!", {
              style: {
                fontSize: "16px",
              },
            });
          }}
        >
          Clear History
        </button>
      </div>
      <div className="history-container">
        {historyVideos.map((item) => (
          <HorizontalCard
            key={item._id}
            data={item}
            onRemoveHandler={removeFromHistoryHandler}
            showRmvBtn={true}
          />
        ))}
      </div>
    </>
  );
};

export { HistoryPage };
