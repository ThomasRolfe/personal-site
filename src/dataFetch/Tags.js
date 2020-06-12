import Axios from "axios";

const Tags = () => {
  return Axios.get(`${process.env.REACT_APP_API_ROOT}tags?per_page=100`).then(
    (response) => {
      return response;
    }
  );
};

export default Tags;
