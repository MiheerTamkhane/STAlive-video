import axios from "axios";

export const removeFromHistory = async (authToken, id) => {
  try {
    const { data } = await axios.delete(`/api/user/history/${id}`, {
      headers: {
        authorization: authToken,
      },
    });
    return data.history;
  } catch (e) {
    console.error(e);
  }
};
