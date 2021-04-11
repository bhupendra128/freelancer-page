import { AppProvider } from "./context/AppProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListingPage from "./Page/ListingPage";
import ProfileDetailPage from "./Page/ProfileDetailPage";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={ListingPage} />
            <Route path="/profile-detail/:id" component={ProfileDetailPage} />
          </Switch>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
