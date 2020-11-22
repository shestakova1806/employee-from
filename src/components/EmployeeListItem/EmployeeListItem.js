import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "rgba(30, 170, 252, 0.3)",
      main: "#1EAAFC",
    },
    secondary: {
      light: "#909090",
      main: "#747474",
    },
  },
});

const useStyles = makeStyles({
  root: {
    width: "920px",
    height: "300px",
    radius: "5px",
    display: "flex",
    alignItems: "center",
    padding: "0",
    margin: "0",
  },
  avatar: {
    width: "162px",
    height: "162px",
    display: "flex",
    marginLeft: "32px",
    marginRight: "80px",
  },
  cardContent: {
    margin: "0",
    padding: "0px 220px 80px 0",
    display: "flex",
    flexDirection: "column",
  },
  name: {
    color: theme.palette.secondary.light,
    fontFamily: "Lato",
    fontSize: "30px",
    lineHeight: "36px",
  },
  position: {
    marginTop: "39px",
    marginBottom: "22px",
    fontSize: "30px",
    lineHeight: "36px",
    fontFamily: "Lato",
  },
  vacation: {
    color: theme.palette.secondary.main,
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "16px",
    fontFamily: "Lato",
  },
});

export const EmployeeListItem = ({ employee, onChangedVacation }) => {
  const classes = useStyles();

  const { avatar, name, position, onVacation } = employee;
  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root} variant="outlined">
        <Avatar src={avatar} className={classes.avatar} />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.name}>{name}</Typography>
          <Typography className={classes.position} color="secondary">
            {position}
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={onVacation}
                onChange={onChangedVacation}
                color="primary"
              />
            }
            label="On vacation"
            className={classes.vacation}
          />
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};
