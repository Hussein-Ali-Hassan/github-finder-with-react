import { Route, Switch } from "react-router-dom";
import Nav from "./components/layout/nav";
import Home from "./components/pages/home";
import NotFound from "./components/pages/notFound";
import Alert from "./components/utils/alert";
import UserInfo from "./components/users/userInfo";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <div className="App">
          <Nav />
          <div className="container">
            <Alert />
            <Switch>
              <Route path="/users/:login" component={UserInfo} />
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </AlertState>
    </GithubState>
  );
};

export default App;
