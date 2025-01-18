import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "b15d968adabb4db59bc0696652792ae2" },
});
