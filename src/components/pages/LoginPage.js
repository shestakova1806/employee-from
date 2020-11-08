import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "470px",
    height: "700px",
  },
  textField: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export const LoginPage = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>Sign up</Typography>
        <div>
          <TextField
            required
            label="First Name"
            variant="outlined"
            className={classes.textField}
          />
          <TextField
            required
            label="Last Name"
            variant="outlined"
            className={classes.textField}
          />
        </div>
        <div>
          <TextField
            required
            label="Phone Number"
            variant="outlined"
            className={classes.textField}
          />
          <TextField
            required
            select
            label="Amount to invest"
            variant="outlined"
            className={classes.textField}
          />
        </div>
        <div>
          <TextField
            required
            fullWidth
            label="Email Address"
            type="email"
            variant="outlined"
            className={classes.textField}
          />
        </div>
        <div>
          <TextField
            fullWidth
            required
            label="Confirm Email Address"
            type="email"
            variant="outlined"
            className={classes.textField}
          />
        </div>
        <div>
          <TextField
            required
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            className={classes.textField}
          />
        </div>
        <div>
          <TextField
            required
            fullWidth
            label="Confirm Password"
            variant="outlined"
            className={classes.textField}
          />
        </div>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="I certify that I am 18 years of age or older, and I agree to the Terms of Service and Privacy Policy."
          className={classes.textField}
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="I would like to receive important information and periodic news updates."
          className={classes.textField}
        />
        <Button disabled variant="contained" color="inherit" href="#">
          CREATE ACCOUNT
        </Button>
      </CardContent>
    </Card>
  );
};
