import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ReactQueryConfig, SiteTheme } from "./lib";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CookiesPage from "./pages/CookiesPage";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ReactQueryConfig>
        <SiteTheme>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/about-us">
              <AboutPage />
            </Route>
            <Route exact path="/cookies-and-consent">
              <CookiesPage />
            </Route>
          </Switch>
        </SiteTheme>
      </ReactQueryConfig>
    </BrowserRouter>
  );
}

export default App;
