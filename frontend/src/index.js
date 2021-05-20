import React,{setGlobal} from 'reactn';
import ReactDOM from 'react-dom';
import App from './App';


setGlobal({
  account : null,
  web3 : null,
  contract : null
})



ReactDOM.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
  document.getElementById('root')
);
