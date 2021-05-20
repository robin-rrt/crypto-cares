import React,{useGlobal,useState} from 'reactn';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavLogo} from './NavbarElements';
import logo from '../../images/logo.png'

const NavBar = () => {

  const [account, setAccount] = useGlobal('account')
  const [chainId,setChainId] = useState(null)
  

  const onClickConnect = async (event) =>{
    try{
        if(window.ethereum){

          event.preventDefault()
          const accounts = await window.ethereum.request({method:"eth_requestAccounts"});
          const chainId = await window.ethereum.request({ method: 'eth_chainId' });
          setChainId(chainId)
          
          await setAccount(accounts[0])
          
          
        }

        

    } catch (error){
      console.error(error);
    }

  };
  const onClickdisConnect = async (event) =>{
    try{
        
          await setAccount(null)
          event.preventDefault();
          
        }

        

     catch (error){
      console.error(error);
    }

  };

window.ethereum.on('chainChanged', (_chainId) => {
  setChainId(_chainId)
  window.location.reload()
  }
  );
  window.ethereum.on('accountsChanged', (_accounts) => {
  
  window.location.reload()
  }
  );

  return (
    <>
      <Nav>
        <NavLogo to="/">
          <img src={logo} alt='logo'></img>
        </NavLogo>
        <Bars />
        <NavMenu>
          <NavLink to="/donate" activeStyle>
            Donate
          </NavLink>
          <NavLink to="/create-service" activeStyle>
            Create Service
          </NavLink>
          <NavLink to="/my-services" activeStyle>
            My Services
          </NavLink>
          <NavLink to="/redeem" activeStyle>
            Redeem
          </NavLink>
          
          <NavBtn>
            {!!account?<NavBtn onClick={onClickdisConnect}>{account}</NavBtn>:<NavBtn onClick={onClickConnect}>Connect Wallet</NavBtn>}
          </NavBtn>

        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;