import React from "react";
import App from "./App";
import { Helmet } from "react-helmet";
import { DataProvider } from "./context/DataContext";
import { BrowserRouter as Router } from "react-router-dom";
import Blogs from "./dataFetch/BlogPosts";
import Tags from "./dataFetch/Tags";
import Portfolios from "./dataFetch/Portfolios";

class Routing extends React.Component {
  state = {
    loading: true,
    tags: [],
    blogTags: [],
    portfolios: [],
    blogs: [],
  };

  componentDidMount() {
    Promise.all([Tags(), Portfolios(), Blogs()]).then((responses) => {
      this.setState({
        tags: responses[0].data.reduce((obj, item) => {
          obj[item.id] = item.name;
          return obj;
        }, {}),
        blogTags: Array.from(
          new Set(
            responses[2].data
              .map((blogs) => {
                return blogs.tags;
              })
              .flat()
          )
        ),
        portfolios: responses[1].data,
        blogs: responses[2].data,
        loading: false,
      });
    });
  }

  render() {
    return (
      <DataProvider value={this.state}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Tom Rolfe | Full Stack Web Developer</title>
          <link rel="canonical" href="https://tomrolfe.co.uk" />
          <meta name="theme-color" content="#7510f7" />
        </Helmet>
        <Router>
          <App />
        </Router>
      </DataProvider>
    );
  }
}

export default Routing;
