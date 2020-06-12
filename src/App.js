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
import Footer from "./components/Footer";
import Axios from "axios";
import Tags from "./dataFetch/Tags";
import Portfolios from "./dataFetch/Portfolios";
import Blogs from "./dataFetch/BlogPosts";
import { DataProvider } from "./context/DataContext";

export default class App extends React.Component {
  state = {
    sideDrawerOpen: false,
    loading: true,
    tags: [],
    portfolios: [],
    blogs: [],
  };

  routes = [
    { routeName: "home", path: "/", component: Home },
    { routeName: "about", path: "/about", component: About },
    { routeName: "blog", path: "/blog", component: Blog },
    { routeName: "portfolio", path: "/portfolio", component: Portfolio },
    { routeName: "contact", path: "/contact", component: Contact },
  ];

  componentDidMount() {
    Promise.all([Tags(), Portfolios(), Blogs()]).then((responses) => {
      this.setState({
        tags: responses[0].data.reduce((obj, item) => {
          obj[item.id] = item.name;
          return obj;
        }, {}),
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
        <Router>
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
                      />
                    );
                  }}
                  key={key}
                  scrollCoord={this.state.scrollCoord}
                />
              ))}
              <Route path="/" component={Home} />
            </Switch>
          </main>
          <Footer routes={this.routes} />
        </Router>
      </DataProvider>
    );
  }
}
