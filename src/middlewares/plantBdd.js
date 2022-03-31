import axios from "axios";

import {
  HANDLE_CREATION_PLANT_SUBMIT,
  updatePlantsDatabasePage,
} from "../actions/plantBdd";

const plantBdd = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_CREATION_PLANT_SUBMIT: {
      const token = localStorage.getItem("token");
      const plant = store.getState().plantBdd;
      const user = store.getState().user;
      axios
        .post(
          "https://omyplant.herokuapp.com/plantdb",
          {
            commonname: plant.commonname,
            photo: plant.photo,
            description: plant.description,
            member_id: user.id,
            dateadded: null,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {})
        .catch((err) => {
          console.log("erreur: ", err.response.data);
        })
        .finally(() => {
          store.dispatch(updatePlantsDatabasePage());
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default plantBdd;
