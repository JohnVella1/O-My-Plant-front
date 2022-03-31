import { combineReducers } from "redux";

import userReducer from "./user";
import userPlantReducer from "./plantUser";
import plantBddReducer from "./plantBdd";

const rootReducer = combineReducers({
  user: userReducer,
  plant: userPlantReducer,
  plantBdd: plantBddReducer,
});

export default rootReducer;
