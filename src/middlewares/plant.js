import axios from "axios";

import {
  HANDLE_UPDATE_PLANT_SUBMIT,
  HANDLE_ADD_CLICK,
  savePlant,
  FETCH_PLANT,
  DELETE_PLANT,
} from "../actions/plant";

const plant = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_UPDATE_PLANT_SUBMIT: {
      const token = localStorage.getItem("token");
      const plant = store.getState().plant;

      axios
        .patch(
          `https://omyplant.herokuapp.com/garden/${plant.id}`,
          {
            nickname: plant.nickname,
            wateringfrequency: plant.wateringfrequency,
            numberoftimes: plant.numberoftimes,
            reppoting: plant.reppoting,
            trimming: plant.trimming,
            exposure: plant.exposure,
            site: plant.site,
            photo_member: plant.photo_member,
            plantdb_id: plant.plantdb_id,
            garden_id: plant.garden_id,
            id: plant.id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {
          store.dispatch(savePlant(res.data));
        })
        .catch((err) => console.log("erreur:", err.response.data));
      break;
    }
    case HANDLE_ADD_CLICK: {
      const token = localStorage.getItem("token");
      const user = store.getState().user;
      axios
        .post(
          `https://omyplant.herokuapp.com/garden`,
          {
            plantdb_id: parseInt(action.payload, 10),
            garden_id: parseInt(user.garden_id, 10),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {})
        .catch((err) => console.log("erreur:", err.response.data));
      break;
    }
    case FETCH_PLANT: {
      const token = localStorage.getItem("token");
      axios
        .get(`https://omyplant.herokuapp.com/garden/${action.payload}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          store.dispatch(savePlant(res.data[0]));
        })
        .catch((err) => console.log("err", err.response.data));
      break;
    }
    case DELETE_PLANT: {
      const token = localStorage.getItem("token");
      const plant = store.getState().plant;
      axios
        .delete(`https://omyplant.herokuapp.com/garden/${plant.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          localStorage.setItem("deletePlant", "success");
        })
        .catch((err) => {
          console.log("err", err.response.data);
        });
      break;
    }
    default:
      next(action);
  }
};

export default plant;
