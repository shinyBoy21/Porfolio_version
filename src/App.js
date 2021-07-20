import { BrowserRouter as Switch, Route } from "react-router-dom";
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
      <Header />
      <div  className="app">
      <Switch>
        <Route path="/about me" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/projects" component={Projects} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/" exact component={Home} />
      </Switch>
      </div>
    </>
  );
}

export default App;
