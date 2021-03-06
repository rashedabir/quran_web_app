import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SurahHome from "./components/SurahHome";
import SurahDetail from "./components/SurahDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={SurahHome} />
          <Route exact path="/surah/:id" component={SurahDetail} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
