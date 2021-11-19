import { Switch, Route } from "react-router-dom";
import SearchPage from "../pages/SearchPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <SearchPage />
      </Route>
    </Switch>
  );
};

export default Routes;
