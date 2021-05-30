import React, { getGlobal, useGlobal, useState } from "reactn";
import { Form } from "react-bootstrap";
import "./createService.css";
import Web3 from "web3";
import ABI from "../contracts/newABI.json";
// import "./DonateForm.css";

import {
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
  makeStyles,
  MenuList,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    backgroundColor: "#FFF7FF",
  },
  adornment: {
    paddingRight: "0px",
    backgroundColor: "#EFF0F6",
    borderRadius: "16px",
  },
  textfield: {
    height: "64px",
    borderRadius: "16px",
    backgroundColor: "#EFF0F6",
    "&:active": {
      borderColor: " #14142B",
    },
  },
  select: {
    height: "64px",
    borderRadius: "16px",

    "&:active": {
      borderColor: " #14142B",
    },
  },
  donate: {
    backgroundColor: "#14142B",
    color: "white",
    height: "64px",
    borderRadius: "16px",
  },
}));

const CreateService = () => {
  const classes = useStyles();
  const [account] = useGlobal("account");
  const [web3] = useGlobal("web3");
  const [data, setData] = useState({
    minDonation: "",
    duration: "",
    amount: "",
    description: "",
    donateAmount: "",
    uri: "",
    unit: "",
  });

  const handleInputChange = (event) => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  var contract = new web3.eth.Contract(
    ABI,
    "0x0743c50FF0FBAb7EBcC0D2DE7F6884a72fF2c576"
  );

  const handleSubmit = async (event) => {
    let {
      minDonation,
      duration,
      amount,
      description,
      donateAmount,
      uri,
      unit,
    } = data;
    event.preventDefault();
    console.log("minimum donation amount: " + minDonation);
    console.log(ABI[5]);
    console.log(contract.methods);
    contract.methods
      .Add_Services(minDonation, duration, amount, description, uri)
      .send({ from: account })
      .on("transactionHash", (hash) => {
        console.log(hash);
      })
      .on("receipt", (receipt) => {
        console.log(receipt);
      });
  };

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
  } else
    return (
      <>
        <CssBaseline />
        <Container maxWidth="md" className={classes.root}>
          <main>
            <Paper>
              <Grid container spacing={6} alignItems="center" justify="center">
                <Grid item xs={10}>
                  <Typography variant="h1" component="h1">
                    Create Services
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    variant="outlined"
                    label="Minimum Donation Amount"
                    name="minDonation"
                    fullWidth
                    value={data.minDonation}
                    InputProps={{
                      className: classes.textfield,
                    }}
                    className={classes.textfield}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    variant="outlined"
                    label="Duration of Service"
                    name="duration"
                    fullWidth
                    value={data.duration}
                    InputProps={{
                      className: classes.textfield,
                    }}
                    className={classes.textfield}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={7}>
                  <TextField
                    variant="outlined"
                    label="Amount of Service"
                    type="number"
                    name="amount"
                    fullWidth
                    value={data.amount}
                    InputProps={{
                      className: classes.textfield,
                    }}
                    className={classes.textfield}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    variant="outlined"
                    name="unit"
                    label="Unit"
                    select
                    fullWidth
                    value={data.unit}
                    InputProps={{
                      className: classes.textfield,
                    }}
                    className={classes.textfield}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="Matic">Matic</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    variant="outlined"
                    name="description"
                    label="Description"
                    fullWidth
                    value={data.description}
                    InputProps={{
                      className: classes.textfield,
                    }}
                    className={classes.textfield}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={10}>
                  <TextField
                    variant="outlined"
                    label="Contact URI"
                    name="uri"
                    fullWidth
                    value={data.uri}
                    InputProps={{
                      className: classes.textfield,
                    }}
                    className={classes.textfield}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={10}>
                  <Button
                    className={classes.donate}
                    fullWidth
                    onClick={handleSubmit}
                  >
                    Create Service
                  </Button>
                </Grid>
              </Grid>
              <br />
            </Paper>
          </main>
        </Container>
      </>
    );
};

export default CreateService;

/**

   <div className="create-service-container">
        <div className="create-service-form">
          {!!account ? (
            <Form.Group>
              <Form onSubmit={handleSubmit}>
                <h2 className="service-title">Create Service</h2>

              
                <br />
               
                <br />
               
                <br />
                <br />
                <Form.Control
                  className="service-input-field"
                  placeholder="Contact URI"
                  onChange={(e) => setUri(e.target.value)}
                ></Form.Control>
                <br />
                <Button type="submit">Create Service</Button>
              </Form>
            </Form.Group>
          ) : (
            <h1>Account not Connected</h1>
          )}
        </div>
      </div>

 */
