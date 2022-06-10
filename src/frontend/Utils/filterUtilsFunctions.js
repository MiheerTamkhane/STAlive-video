const filterByTopics = (state, videos) => {
  if (state.topic) {
    return [...videos].filter((video) => video.categoryName === state.topic);
  }
  return videos;
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

const filterBySearch = (state, videos) => {
  console.log(state);
  // if (state.searchInput !== "") {
  //   //   return videos.filter((video) => video.title.includes(state.searchInput));
  //   return videos.filter((video) =>
  //     video.title.toUpperCase().includes(searchedText.trim().toUpperCase())
  //   );
  // } else {
  //   videos;
  // }
  // return videos;
};

export { filterByTopics, filterByDuration, filterBySorting, filterBySearch };
