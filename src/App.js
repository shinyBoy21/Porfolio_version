import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/aboutMe/About";
import Contacts from "./pages/contacts/Contacts";
import Services from "./pages/myservices/Services";
import Projects from "./pages/projects/Projects";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="app">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/projects" component={Projects} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
