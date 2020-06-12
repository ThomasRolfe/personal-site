import Axios from "axios";

const Portfolios = () => {
  return Axios.get(
    `${process.env.REACT_APP_API_ROOT}posts/?categories=16`
  ).then((response) => {
    return response;
  });
};

export default Portfolios;
