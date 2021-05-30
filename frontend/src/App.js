import React, { useGlobal, useEffect, lazy } from "reactn";
import Web3 from "web3";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Home = lazy(() => import("./Pages/index"));
const Donate = lazy(() => import("./Pages/Donate"));
const CreateService = lazy(() => import("./Pages/CreateService"));
const MyServices = lazy(() => import("./Pages/MyServices"));
const Redeem = lazy(() => import("./Pages/Redeem"));

const App = () => {
    const [web3, setWeb3] = useGlobal("web3");
    const loadWeb3 = async () => {
        const h = new Web3(Web3.givenProvider || "http://localhost:9545");
        setWeb3(h);
    };
    useEffect(() => {
        loadWeb3();
    }, []);

    console.log(web3);
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/donate" exact component={Donate} />
                <Route path="/create-service" exact component={CreateService} />
                <Route path="/my-services" exact component={MyServices} />
                <Route path="/redeem" exact component={Redeem} />
            </Switch>
        </Router>
    );
};

export default App;
