import charactersActionTypes from "../actionTypes/characters";

const INITIAL_STATE = {
  characters: null,
  isLoading: false,
  errorMessage: undefined,
};

const charactersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case charactersActionTypes.LOADING_CHARACTERS_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case charactersActionTypes.GET_CHARACTERS_DATA:
      return {
        ...state,
        isLoading: false,
        characters: action.payload,
        errorMessage: undefined
      };
    case charactersActionTypes.CHARACTERS_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default charactersReducer;
