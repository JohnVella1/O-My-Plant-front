import {
  CHANGE_FIELD,
  UPDATE_PLANTS_DATABASE_PAGE,
  EMPTY_FIELDS,
} from "../actions/plantBdd";

const initialState = {
  commonname: "",
  description: "",
  photo: "",
  member_id: "",
  plantCreated: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case UPDATE_PLANTS_DATABASE_PAGE:
      return {
        ...state,
        plantCreated: !state.plantCreated,
      };
    case EMPTY_FIELDS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
