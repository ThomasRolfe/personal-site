import Axios from "axios";

const BlogPosts = () => {
  return Axios.get(`${process.env.REACT_APP_API_ROOT}posts/?categories=1`).then(
    (response) => {
      return response;
    }
  );
};

export default BlogPosts;
