import React from "react";
import { useSelector } from "react-redux";
import {
  makeStyles,
  Grid,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import Character from "../Character";
import Paginator from "../../components/Paginator";

const useStyles = makeStyles({
  spinnerContainer: {
    display: "flex",
    justifyContent: "center",
  },
  spinner: {
    color: "#fff",
  },
  errorMessage: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Creepster",
  },
});

const CharactersList = () => {
  const classes = useStyles();

  const { isLoading, errorMessage } = useSelector((state) => state.characters);
  const paginationInfo = useSelector(
    (state) => state.characters.characters?.info
  );
  const characters = useSelector(
    (state) => state.characters.characters?.results
  );

  const mapCharacters = () => {
    return characters?.map((character) => (
      <Grid key={character.id} item xs={4}>
        <Character key={character.id} characterData={character} />
      </Grid>
    ));
  };

  return (
    <>
      {errorMessage && (
        <Typography className={classes.errorMessage}>
          error: {errorMessage}
        </Typography>
      )}
      {isLoading ? (
        <div className={classes.spinnerContainer}>
          <CircularProgress className={classes.spinner} />
        </div>
      ) : (
        <>
          <Paginator
            nextPageUrl={paginationInfo?.next}
            prevPageUrl={paginationInfo?.prev}
          />
          <Grid container spacing={3}>
            {mapCharacters()}
          </Grid>
        </>
      )}
    </>
  );
};

export default CharactersList;
