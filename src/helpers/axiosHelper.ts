import axios from "axios";

export default {
  get: async (url: string) => {
    try {
      return await axios.get(url);
    } catch (error) {
      console.warn((error as Error)?.message);
    }
  },
};
