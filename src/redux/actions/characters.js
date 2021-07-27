import axios from "axios";

import { RICK_AND_MORTY_API_URL } from "../../api/url";
import charactersActionTypes from "../actionTypes/characters";

export const loadingCharactersData = () => ({
  type: charactersActionTypes.LOADING_CHARACTERS_DATA,
});

export const charactersDataError = (errorMessage) => ({
  type: charactersActionTypes.CHARACTERS_DATA_ERROR,
  payload: errorMessage,
});

export const getCharactersData = () => (dispatch) => {
  dispatch(loadingCharactersData());
  axios
    .get(`${RICK_AND_MORTY_API_URL}`)
    .then((response) =>
      dispatch({
        type: charactersActionTypes.GET_CHARACTERS_DATA,
        payload: response.data,
      })
    )
    .catch(
      (error) => error.message && dispatch(charactersDataError(error.message))
    );
};
