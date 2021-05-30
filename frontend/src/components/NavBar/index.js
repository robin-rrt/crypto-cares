import React, { useGlobal, useState } from "reactn";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
// import {
//     Nav,
//     NavLink,
//     Bars,
//     NavMenu,
//     NavBtn,
//     NavBtnLink,
//     NavLogo,
// } from "./NavbarElements";
import logo from "../../images/logo.png";
import {
    CssBaseline,
    Toolbar,
    Typography,
    Button,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: "White",
        borderRadius: "10px",
    },
    button: {
        marginRight: theme.spacing(2),
        borderRadius: "16px",
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
    },
    active: {
        backgroundColor: "#5F2EEA",
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        color: "White",
        borderRadius: "16px",

        "&:hover": {
            color: "black",
        },
    },
}));

const NavBar = () => {
    const [account, setAccount] = useGlobal("account");
    const [chainId, setChainId] = useState(null);
    const classes = useStyles();
    // window.account =

    const onClickConnect = async (event) => {
        try {
            if (window.ethereum) {
                event.preventDefault();
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                const chainId = await window.ethereum.request({
                    method: "eth_chainId",
                });
                setChainId(chainId);

                await setAccount(accounts[0]);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const onClickDisconnect = async (event) => {
        try {
            event.preventDefault();
            await setAccount(null);
        } catch (error) {
            console.error(error);
        }
    };

    window.ethereum.on("chainChanged", (_chainId) => {
        setChainId(_chainId);
        window.location.reload();
    });
    window.ethereum.on("accountsChanged", (_accounts) => {
        window.location.reload();
    });

    return (
        <>
            <CssBaseline />
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <img src={logo} alt="logo" className={classes.button} />
                    <Typography color="primary" variant="subtitle1">
                        <Button
                            component={Link}
                            to="/donate"
                            color="inherit"
                            className={classes.button}
                        >
                            Donate
                        </Button>
                        <Button
                            component={Link}
                            to="/create-service"
                            color="inherit"
                            className={classes.button}
                        >
                            Create Service
                        </Button>
                        <Button
                            component={Link}
                            to="/my-services"
                            color="inherit"
                            className={classes.button}
                        >
                            My Services
                        </Button>
                        <Button
                            component={Link}
                            to="/redeem"
                            color="inherit"
                            className={classes.button}
                        >
                            Redeem
                        </Button>
                    </Typography>
                    <div className={classes.grow} />
                    <Typography>
                        {!!account ? (
                            <Button
                                color="primary"
                                onClick={onClickDisconnect}
                                className={classes.active}
                            >
                                {`Disconnect ${account}`}
                            </Button>
                        ) : (
                            <Button
                                color="primary"
                                onClick={onClickConnect}
                                className={classes.active}
                            >
                                Connect
                            </Button>
                        )}
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );

    //   return (
    //     <>
    //       <Nav>
    //         <NavLogo to="/">
    //           <img src={logo} alt='logo'></img>
    //         </NavLogo>
    //         <Bars />
    //         <NavMenu>
    //           <NavLink to="/donate" activeStyle>
    //             Donate
    //           </NavLink>
    //           <NavLink to="/create-service" activeStyle>
    //             Create Service
    //           </NavLink>
    //           <NavLink to="/my-services" activeStyle>
    //             My Services
    //           </NavLink>
    //           <NavLink to="/redeem" activeStyle>
    //             Redeem
    //           </NavLink>

    //           {
    //            !!account
    //             ?
    //             <Button onClick={onClickDisconnect}>
    //             Disconnect
    //               <br />
    //             {account}

    //             </Button>
    //             :
    //             <Button onClick={onClickConnect}>Connect Wallet</Button>
    //           }
    //           {/* <NavBtn>
    //             {!!account?<NavBtn onClick={onClickDisconnect}>{account}</NavBtn>:<NavBtn onClick={onClickConnect}>Connect Wallet</NavBtn>}
    //           </NavBtn> */}

    //         </NavMenu>
    //       </Nav>
    //     </>
    //   );
};

export default NavBar;
