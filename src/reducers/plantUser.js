import { CHANGE_FIELD, UPDATE_PLANT, SAVE_PLANT } from "../actions/plant";

const initialState = {
  nickname: "",
  wateringfrequency: "",
  numberoftimes: "",
  reppoting: "",
  trimming: "",
  exposure: "",
  site: "",
  photo_member: "",
  garden_id: "",
  plantdb_id: "",
  plantUpdateDisabled: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case UPDATE_PLANT:
      return {
        ...state,
        plantUpdateDisabled: action.payload,
      };
    case SAVE_PLANT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
