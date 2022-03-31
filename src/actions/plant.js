export const CHANGE_FIELD = "CHANGE_FIELD";
export const UPDATE_PLANT = "UPDATE_PLANT";
export const HANDLE_UPDATE_PLANT_SUBMIT = "HANDLE_UPDATE_PLANT_SUBMIT";
export const SAVE_PLANT = "SAVE_PLANT";
export const FETCH_PLANT = "FETCH_PLANT";
export const HANDLE_ADD_CLICK = "HANDLE_ADD_CLICK";
export const DELETE_PLANT = "DELETE_PLANT";

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  payload: {
    value: value,
    name,
  },
});

export const updatePlant = (disabled) => ({
  type: UPDATE_PLANT,
  payload: disabled,
});

export const handlePlantUpdateSubmit = () => ({
  type: HANDLE_UPDATE_PLANT_SUBMIT,
});

export const handleAddClick = (plantId) => ({
  type: HANDLE_ADD_CLICK,
  payload: plantId,
});

export const fetchPlant = (plantId) => ({
  type: FETCH_PLANT,
  payload: plantId,
});

export const savePlant = (plant) => ({
  type: SAVE_PLANT,
  payload: {
    ...plant,
  },
});

export const deletePlant = () => ({
  type: DELETE_PLANT,
});
