import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles, Button } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import { getCharactersData } from "../../redux/actions/characters";

const useStyles = makeStyles({
  pagButtonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  pagButton: {
    color: "#fff",
    fontFamily: "Creepster",
    fontSize: 24,
  },
});

const Paginator = ({ prevPageUrl, nextPageUrl }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const fetchPage = (pageUrl) => {
    dispatch(getCharactersData(pageUrl));
  };

  return (
    <div className={classes.pagButtonContainer}>
      <Button
        onClick={prevPageUrl ? () => fetchPage(prevPageUrl) : null}
        className={classes.pagButton}
        startIcon={<ArrowBackIosIcon />}
        disabled={prevPageUrl ? false : true}
      >
        Prev Page
      </Button>
      <Button
        onClick={nextPageUrl ? () => fetchPage(nextPageUrl) : null}
        className={classes.pagButton}
        endIcon={<ArrowForwardIosIcon />}
        disabled={nextPageUrl ? false : true}
      >
        Next Page
      </Button>
    </div>
  );
};

export default Paginator;
