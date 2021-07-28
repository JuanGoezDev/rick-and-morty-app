import React, { useState } from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import CharacterModal from "../CharacterModal";

const useStyles = makeStyles({
  media: {
    height: 200,
  },
  title: {
    fontFamily: "Creepster",
    fontSize: 24,
  },
});

const Character = ({ characterData }) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenCharacterModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      {openModal && (
        <CharacterModal
          open={openModal}
          handleClose={handleOpenCharacterModal}
          characterData={characterData}
        />
      )}
      <Card className={classes.root}>
        <CardActionArea onClick={handleOpenCharacterModal}>
          <CardMedia
            className={classes.media}
            image={characterData.image}
            title={characterData.name}
          />
          <CardContent>
            <Typography className={classes.title}>
              {characterData.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Character;
