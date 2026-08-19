
import { Switch, Route, Router as WouterRouter } from "wouter";
import Home from "@/Pages/Home";
import About from "@/Pages/About";
import OurHistory from "@/Pages/OurHistory";
import Genealogy from "@/Pages/Genealogy";
import Biographies from "@/Pages/Biographies";
import Events from "@/Pages/Events";
import TermsOfService from "@/Pages/TermsOfService";
import PrivacyPolicy from "@/Pages/PrivacyPolicy";
//import Register from "@/Pages/Register";



function Router() {
  return (
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/OurHistory" component={OurHistory} />
        <Route path="/Genealogy" component={Genealogy} />
        <Route path="/Biographies" component={Biographies} />
        <Route path="/Events" component={Events} />
        <Route path="/TermsOfService" component={TermsOfService} />
        <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
      </Switch>
  );
}
  
  function App() {
  const routerBase = import.meta.env.BASE_URL === './' ? '/' : import.meta.env.BASE_URL.replace(/\/$/, '')

  return (
    <WouterRouter base={routerBase}>
      <Router />
    </WouterRouter>
  );
}

export default App;

