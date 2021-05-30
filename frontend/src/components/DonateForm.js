import { useState, useGlobal} from "reactn";
import "./DonateForm.css";
import ABI from '../contracts/newABI.json'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
//import {Table, FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap'
import {
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  InputLabel,
  Button,
  InputAdornment,
  makeStyles,
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

const DonateForm = () => {
  const [account] = useGlobal('account')
  const [web3]= useGlobal('web3')
  const classes = useStyles();
  const [data, setData] = useState({
    name: "",
    fund: "",
    threshold: "",
    service: "",
    donateAmount: "",
  });
  const [modalState, setModalState] = useState(false);

  const handleInputChange = (event, name) => {
    setData((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  const ModalComponent = () => {
    return (
      <Modal
        
        show={modalState}
        onHide={() => setModalState(false)}
      >
        <Modal.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Click me!
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body>Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                        Click me!
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Modal.Body>
      </Modal>
    );
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.root}>
        <main>
          <Paper>
            <Grid container spacing={6} alignItems="center" justify="center">
              <Grid item xs={10}>
                <Typography variant="h1" component="h1">
                  Donate
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  variant="outlined"
                  label="Name"
                  fullWidth
                  value={data.name}
                  InputProps={{
                    className: classes.textfield,
                  }}
                  className={classes.textfield}
                  onChange={(e) => handleInputChange(e, "name")}
                />
              </Grid>
              <Grid item xs={10}>
                <FormControl fullWidth>
                  <InputLabel style={{ marginLeft: "15px" }}>
                    Donation Fund
                  </InputLabel>
                  <Select
                    className={classes.select}
                    variant="outlined"
                    onChange={(e) => handleInputChange(e, "fund")}
                    value={data.fund}
                  >
                    <MenuItem value="indiaFund">Covid Relief Fund</MenuItem>
                  </Select>
                  <FormHelperText>Addr: 0x545</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={10}>
                <Button
                  className={classes.textfield}
                  fullWidth
                  variant="contained"
                  onClick={() => setModalState(true)}
                >
                  Choose Services
                </Button>
              </Grid>
              <Grid item xs={10}>
                <center>
                  <Typography
                    className={classes.select}
                    component="h6"
                    variant="subtitle1"
                  >
                    Threshold: ~
                  </Typography>
                </center>
              </Grid>
              <Grid item xs={10}>
                <FormControl fullWidth>
                  <TextField
                    id="standard-adornment-password"
                    type="number"
                    label="Amount"
                    InputProps={{
                      className: classes.textfield,
                    }}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          style={{
                            width: "20%",
                          }}
                        >
                          <TextField
                            id="unit"
                            select
                            fullWidth
                            variant="filled"
                            InputProps={{
                              className: classes.adornment,
                            }}
                          >
                            <MenuItem value="sup">KG</MenuItem>
                          </TextField>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={10}>
                <Button
                  className={classes.donate}
                  fullWidth
                  onClick={() => setModalState(true)}
                >
                  Donate
                </Button>
              </Grid>
            </Grid>
            <br />
          </Paper>
          <ModalComponent />
        </main>
      </Container>
    </>
  );
};

export default DonateForm;
//export default class DonateForm extends Component {
//     constructor() {
//         super();
//         this.state = {

//         };

//         this.showModal = this.showModal.bind(this);
//         this.hideModal = this.hideModal.bind(this);

//         // this is where we'll pass services data to the modal, then the modal will return the selection

//         // this.onSubmit = this.onSubmit.bind(this);
//     }

//     // handleChange(e) {

//     // }

//     showModal() {
//         this.setState({ isOpen: true });
//     };

//     hideModal() {
//         this.setState({ isOpen: false });
//     };

//     render() {
//         return (
//             <div className="donate-container">
//                  <Form.Group onSubmit={this.onSubmit} className="donate-form">
//                     <h1 className="donate-title">Donate</h1>

//                     <input type="text" placeholder="Name (optional)" className="donate-inputField" />

//                     <br />

//                     <select className="donate-inputField">
//                         <option value="indiaFund">Crypto Relief India Fund</option>
//                     </select>

//                     <br />

//                         <Button id="ServiceButton" variant="primary" onClick={this.showModal}>
//                             Choose a Service
//                         </Button>

//                         <Modal id="serviceModal" show={this.state.isOpen} onHide={this.hideModal}>
                            // <Modal.Body>
                            //     <Accordion defaultActiveKey="0">
                            //         <Card>
                            //             <Accordion.Toggle as={Card.Header} eventKey="0">
                            //             Click me!
                            //             </Accordion.Toggle>
                            //             <Accordion.Collapse eventKey="0">
                            //             <Card.Body>Hello! I'm the body</Card.Body>
                            //             </Accordion.Collapse>
                            //         </Card>
                            //         <Card>
                            //             <Accordion.Toggle as={Card.Header} eventKey="1">
                            //             Click me!
                            //             </Accordion.Toggle>
                            //             <Accordion.Collapse eventKey="1">
                            //             <Card.Body>Hello! I'm another body</Card.Body>
                            //             </Accordion.Collapse>
                            //         </Card>
                            //     </Accordion>
                            // </Modal.Body>
//                         </Modal>
//                     <br />

//                     <label className="threshold">Threshold: ~ xxx amount </label>

//                     <br />

//                     <input type="text" placeholder="Amount" className="donate-inputField" />

//                     <br />

//                     <button type="submit" id="donate-submit"className="donate-inputField">Donate</button>
//                 </Form.Group>
//             </div>
//         )
//     }
// }

// function CustomToggle({ children, eventKey }) {
//     const decoratedOnClick = useAccordionToggle(eventKey, () =>
//     console.log('totally custom!'),
//     );
//     return (
//     <div onClick={decoratedOnClick} >
//     <Form.Check
//     >
//     <Form.Check.Input type="radio" />
//     {children}
//     </Form.Check>
//     </div>
//     );
// }
