import axios from "axios";

export const removeAllFromHistory = async (authToken) => {
  try {
    const { data } = await axios.delete(`/api/user/history/all`, {
      headers: {
        authorization: authToken,
      },
    });
    return data.history;
  } catch (e) {
    console.error(e);
  }
};
