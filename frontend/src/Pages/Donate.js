import React, { useGlobal, useState, useRef, useEffect } from "reactn";
import ABI from "../contracts/newABI.json";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import { TableComponent } from "../components/TableComponent";
import DonateTableCol from "../components/DonateTableCol";
import {
  Container,
  CssBaseline,
  Grid,
  Paper,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    backgroundColor: "#FFF7FF",
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function Donate() {
  const [account] = useGlobal("account");
  const [web3] = useGlobal("web3");
  const classes = useStyles();
  const tableRef = useRef(null);
  const [data, setData] = useState([
    {
      service_id: "test value",
      Relief_fund_name: "test value",
      service_provider: "test value",
      minimum_donation_amount: "test value",
      service_description: "test value",
    },
  ]);
  useEffect(() => {
    //TODO: set Data;
  }, []);

  const actions = [
    //TODO: Find icon from  https://material-ui.com/components/material-icons/
    (rowData) => ({
      icon: () => <AccountBalanceWalletIcon />,
      tooltip: "Donate",
      onClick: (event, rowData) => {
        console.log({ rowData });
      },
    }),
  ];

  if (!account) {
    return (
      <>
        <CssBaseline />
        <Container className={classes.root}>
          <main>
            <Paper>
              <Grid container spacing={6} alignItems="center" justify="center">
                <Grid item xs={12}>
                  <center>
                    <h1> Account Not Connected</h1>
                  </center>
                </Grid>
              </Grid>
              <br />
            </Paper>
          </main>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <CssBaseline />
        <Container className={classes.root}>
          <main>
            <Grid container alignItems="center" justify="center">
              <Grid item xs={12}>
                <TableComponent
                  className={classes.table}
                  tableRef={tableRef}
                  actions={actions}
                  columns={DonateTableCol}
                  data={data}
                  Title="Employee Management"
                  options={{
                    search: true,
                    sorting: true,
                  }}
                  style={{
                    flexGrow: 1,
                  }}
                />
              </Grid>
            </Grid>
            <br />
          </main>
        </Container>
      </>
    );
  }
}
