const filterByTopics = (state, videos) => {
  switch (state.topic) {
    case "leadership":
      return [...videos].filter((video) => video.categoryName === state.topic);
    case "focus":
      return [...videos].filter((video) => video.categoryName === state.topic);
    case "mastery":
      return [...videos].filter((video) => video.categoryName === state.topic);
    case "creativity":
      return [...videos].filter((video) => video.categoryName === state.topic);
    case "code":
      return [...videos].filter((video) => video.categoryName === state.topic);
    case "computer":
      return [...videos].filter((video) => video.categoryName === state.topic);
    case "meditation":
      return [...videos].filter((video) => video.categoryName === state.topic);
    case "science":
      return [...videos].filter((video) => video.categoryName === state.topic);
    default:
      return videos;
  }
};

function getTime(video) {
  return +video.timeStatus.split(":")[0];
}

const filterByDuration = (state, videos) => {
  switch (state.duration) {
    case "0-6":
      return [...videos].filter((video) => {
        let time = getTime(video);
        return time > 0 && time <= 6;
      });
    case "6-12":
      return [...videos].filter((video) => {
        let time = getTime(video);
        return time > 6 && time <= 12;
      });
    case "12-18":
      return [...videos].filter((video) => {
        let time = getTime(video);
        return time > 12 && time <= 18;
      });
    case "18+":
      return [...videos].filter((video) => {
        let time = getTime(video);
        return time >= 18;
      });
    default:
      return videos;
  }
};

const filterBySorting = (state, videos) => {
  switch (state.sortBy) {
    case "newest":
      return [...videos].sort(
        (a, b) => Date.parse(b.uploadAt) - Date.parse(a.uploadAt)
      );
    case "oldest":
      return [...videos].sort(
        (a, b) => Date.parse(a.uploadAt) - Date.parse(b.uploadAt)
      );
    case "popular":
      return [...videos].sort((a, b) => parseInt(b.views) - parseInt(a.views));
    default:
      return videos;
  }
};

export { filterByTopics, filterByDuration, filterBySorting };
