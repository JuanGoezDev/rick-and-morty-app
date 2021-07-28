import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeStyles, Container, Typography } from "@material-ui/core";

import { getCharactersData } from "../../redux/actions/characters";
import CharactersList from "../../components/CharactersList";

const useStyles = makeStyles({
  title: {
    fontFamily: "Creepster",
    textAlign: "center",
    fontSize: 100,
    color: "#AFE6F0",
  },
});

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharactersData());
  }, [dispatch]);

  return (
    <Container fixed>
      <Typography className={classes.title}>Rick & Morty</Typography>
      <CharactersList />
    </Container>
  );
};

export default Home;
