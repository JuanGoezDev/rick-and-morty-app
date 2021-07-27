import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharactersData } from "../../redux/actions/characters";
import CharactersList from "../../components/CharactersList";

const Home = () => {
  const dispatch = useDispatch();

  const paginationInfo = useSelector((state) => state.characters.characters?.info);
  const characters = useSelector((state) => state.characters.characters?.results);
  const { isLoading, errorMessage } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharactersData());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>is loading</p>}
      {errorMessage && <p>error</p>}
      <CharactersList characters={characters} paginationInfo={paginationInfo} />
    </>
  );
};

export default Home;
