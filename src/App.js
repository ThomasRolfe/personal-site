import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
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
import PortfolioPost from "./pages/PortfolioPost";
import ScrollToTop from "./components/helpers/ScrollToTop";
import ReactGA from "react-ga";

const trackingId = "UA-120633211-4";

class App extends React.Component {
  state = {
    sideDrawerOpen: false,
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

  componentDidUpdate() {
    ReactGA.initialize(trackingId);
    ReactGA.pageview(this.props.location.pathname);
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
      <>
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
      </>
    );
  }
}

export default withRouter(App);
