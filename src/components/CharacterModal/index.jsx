import React from "react";
import {
  makeStyles,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  content: {
    fontFamily: "Creepster",
    fontSize: 20,
  },
  button: {
    fontFamily: "Creepster",
    fontSize: 25,
  }
});

const CharacterModal = ({
  open,
  handleClose,
  characterData: { gender, species, status, location },
}) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <Typography className={classes.content}>gender: {gender}</Typography>
        <Typography className={classes.content}>species: {species}</Typography>
        <Typography className={classes.content}>status: {status}</Typography>
        <Typography className={classes.content}>location: {location.name}</Typography>
      </DialogContent>
      <DialogActions>
        <Button className={classes.button} onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CharacterModal;
