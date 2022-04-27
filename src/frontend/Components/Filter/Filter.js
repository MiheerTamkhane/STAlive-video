import { useFilter } from "../../Contexts";
import "./Filter.css";
const Filter = () => {
  const { state, dispatch } = useFilter();
  return (
    <div className="filter-container">
      <div className="filter-wrapper">
        <select
          name="sort"
          id="filters-sort"
          className="form-control"
          value={state.sortBy}
          onChange={(e) =>
            dispatch({ type: "SORT_BY", payload: e.target.value })
          }
        >
          <optgroup label="Sort by...">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="popular">Most viewed</option>
          </optgroup>
        </select>
      </div>
      <div className="filter-wrapper">
        <select
          name="topic"
          value={state.topic}
          id="filters-topic"
          className="form-control"
          onChange={(e) =>
            dispatch({
              type: "BY_TOPIC",
              payload: e.target.value,
            })
          }
        >
          <option value="">Topics</option>
          <optgroup label="Top topics...">
            <option value="leadership">Leadership</option>
            <option value="focus">Focus</option>
            <option value="mastery">Mastery</option>
            <option value="creativity">Creativity</option>
            <option value="code">Code</option>
            <option value="computer">Computer</option>
            <option value="meditation">Meditation</option>
            <option value="science">Science</option>
          </optgroup>
        </select>
      </div>
      <div className="filter-wrapper">
        <select
          name="duration"
          id="filters-duration"
          value={state.duration}
          className="form-control"
          onChange={(e) =>
            dispatch({ type: "BY_TIME", payload: e.target.value })
          }
        >
          <option value="">Duration</option>
          <option value="0-6">0-6 minutes</option>
          <option value="6-12">6-12 minutes</option>
          <option value="12-18">12-18 minutes</option>
          <option value="18+">18+ minutes</option>
        </select>
      </div>
    </div>
  );
};

export { Filter };
