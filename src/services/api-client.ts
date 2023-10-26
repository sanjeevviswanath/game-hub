import axios from "axios";

export default axios.create({
  params: {
    base: "https://api.rawg.io/api",
    key: "xxxx",
  },
});
