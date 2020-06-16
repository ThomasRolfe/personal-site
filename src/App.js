import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./styles/main.css";
import Toolbar from "./components/navbar/Toolbar";
import SideDrawer from "./components/navbar/SideDrawer";
import Backdrop from "./components/Backdrop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Page404 from "./pages/Page404";
import Footer from "./components/Footer";
import Tags from "./dataFetch/Tags";
import Portfolios from "./dataFetch/Portfolios";
import PortfolioPost from "./pages/PortfolioPost";
import Blogs from "./dataFetch/BlogPosts";
import { DataProvider } from "./context/DataContext";
import ScrollToTop from "./components/helpers/ScrollToTop";
import { Helmet } from "react-helmet";

export default class App extends React.Component {
  state = {
    sideDrawerOpen: false,
    loading: true,
    tags: [],
    blogTags: [],
    portfolios: [],
    blogs: [],
  };

  routes = [
    { routeName: "home", path: "/", component: Home, menu: true },
    { routeName: "about", path: "/about", component: About, menu: true },
    {
      routeName: "blogpost",
      path: "/blog/:slug",
      component: BlogPost,
      menu: false,
    },
    { routeName: "blog", path: "/blog", component: Blog, menu: true },
    {
      routeName: "portfoliopost",
      path: "/portfolio/:slug",
      component: PortfolioPost,
      menu: false,
    },
    {
      routeName: "portfolio",
      path: "/portfolio",
      component: Portfolio,
      menu: true,
    },
    { routeName: "contact", path: "/contact", component: Contact, menu: true },
  ];

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

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  closeDrawer = (event) => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    return (
      <DataProvider value={this.state}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Tom Rolfe | Full Stack Web Developer</title>
          <link rel="canonical" href="http://thomasrolfe.co.uk" />
        </Helmet>
        <Router>
          <ScrollToTop />
          <Toolbar
            drawerClickHandler={this.drawerToggleClickHandler}
            siteRoutes={this.routes}
          />

          <SideDrawer
            show={this.state.sideDrawerOpen}
            closeDrawer={this.closeDrawer}
            siteRoutes={this.routes}
            onClick={this.closeDrawer}
          />

          {this.state.sideDrawerOpen && (
            <Backdrop click={this.backdropClickHandler} />
          )}
          <main className="mb-auto flex-grow">
            <Switch>
              {this.routes.map((routes, key) => (
                <Route
                  exact
                  path={routes.path}
                  render={(props) => {
                    return (
                      <routes.component
                        scrollCoord={this.state.scrollCoord}
                        tags={this.state.tags}
                        loading={this.state.loading}
                        {...props}
                      />
                    );
                  }}
                  key={key}
                  scrollCoord={this.state.scrollCoord}
                />
              ))}
              <Route path="/" exact component={Home} />
              <Route component={Page404} />
            </Switch>
          </main>
          <Footer routes={this.routes} />
        </Router>
      </DataProvider>
    );
  }
}
