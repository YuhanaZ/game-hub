import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "14850dd6a49d43a19e779d93865039a1",
  },
});


