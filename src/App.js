import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PlanLayout from "./pages/layouts/PlanLayout";
import Welcome from "./pages/Welcome";
import Phone from "./pages/Phone";
import Confirm from "./pages/Confirm";
import Notification from "./pages/Notification";
import AppLayout from "./pages/layouts/AppLayout";
import Home from "./pages/Home";
//123
function App() {
  return (
    <Router>
      <Route exact path={["/", "/invite", "/confirm", "/notification"]}>
        <PlanLayout>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/invite" component={Phone} />
            <Route exact path="/confirm" component={Confirm} />
            <Route exact path="/notification" component={Notification} />
          </Switch>
        </PlanLayout>
      </Route>
      <Route exact path={["/home"]}>
        <AppLayout>
          <Switch>
            <Route exact path="/home" component={() => <Home />} />
          </Switch>
        </AppLayout>
      </Route>
    </Router>
  );
}

export default App;
