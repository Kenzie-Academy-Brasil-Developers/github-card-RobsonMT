import { AnimatePresence } from "framer-motion";
import { Switch, Route } from "react-router-dom";
// import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        {/* <Route exact path="/">
          <Home />
        </Route> */}

        <Route exact path="/">
          <SearchPage />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
