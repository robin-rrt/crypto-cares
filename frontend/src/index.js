import React, { setGlobal, Suspense } from "reactn";
import CircularProgress from "@material-ui/core/CircularProgress";
import ReactDOM from "react-dom";
import App from "./App";

setGlobal({
    account: null,
    web3: null,
    contract: null,
});

ReactDOM.render(
    <Suspense fallback={<CircularProgress />}>
        <App />,
    </Suspense>,
    document.getElementById("root")
);
