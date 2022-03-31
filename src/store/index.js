import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers";
import authMW from "../middlewares/auth";
import plantMW from "../middlewares/plant";
import plantBddMW from "../middlewares/plantBdd";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMW, plantMW, plantBddMW),
);

const store = createStore(reducer, enhancers);

export default store;
