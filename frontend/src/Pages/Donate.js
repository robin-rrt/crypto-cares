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
  var contract = new web3.eth.Contract(
    ABI,
    "0x0743c50FF0FBAb7EBcC0D2DE7F6884a72fF2c576"
  );

  async function  get_Services(){
    let blockchain_data =[]
    
    for(let i =0;i<4;i++)
    {
    const list = await contract.methods.Services_list(i).call({from:account})

     let list_object={
      service_id : list[0],
      Relief_fund_name: 'crypto relief',
      service_provider: list[1],
      minimum_donation_amount: list[3],
      service_description:list[4]
    }
   blockchain_data.push(list_object)}
    
    setData(blockchain_data)
  }
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
    get_Services();
    
  }, []);

  const actions = [
    //TODO: Find icon from  https://material-ui.com/components/material-icons/
    (rowData) => ({
      icon: () => <AccountBalanceWalletIcon />,
      tooltip: "Donate",
      onClick: (event, rowData) => {
        contract.methods.Avail_Service(rowData.service_id).send({from:account,value:web3.utils.toWei(rowData.minimum_donation_amount, "ether")}).on("transactionHash", (hash) => {
          console.log(hash);
        })
        .on("receipt", (receipt) => {
          alert("Donation has been made");
        });
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
                  Title="Service Providers"
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
