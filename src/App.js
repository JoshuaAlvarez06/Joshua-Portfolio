import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./Main";
import NoMatch from "./NoMatch";
import Footer from "./components/Footer/Footer";
import FormSubmitted from "./components/FormSubmitted";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/form-submitted">
          <FormSubmitted />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
