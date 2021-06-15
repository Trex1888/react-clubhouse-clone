import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PlanLayout from "./pages/layouts/PlanLayout";
import Welcome from "./pages/Welcome";
import Phone from "./pages/Phone";
import Confirm from "./pages/Confirm";
import Notification from "./pages/Notification";
import AppLayout from "./pages/layouts/AppLayout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Route path={["/", "/invite", "/confirm", "/notification"]} exact>
        <PlanLayout>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/invite" component={Phone} />
            <Route exact path="/confirm" component={Confirm} />
            <Route exact path="/notification" component={Notification} />
          </Switch>
        </PlanLayout>
      </Route>
      <Route exact path={["/home", "/explore", "/profile"]}>
        <AppLayout>
          <Switch>
            <Route exact path="/home" component={() => <Home />} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </AppLayout>
      </Route>
    </Router>
  );
}

export default App;
