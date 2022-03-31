export const CHANGE_FIELD = "CHANGE_FIELD";
export const HANDLE_CREATION_PLANT_SUBMIT = "HANDLE_CREATION_PLANT_SUBMIT";
export const CREATE_PLANT = "CREATE_PLANT";
export const UPDATE_PLANTS_DATABASE_PAGE = "UPDATE_PLANTS_DATABASE_PAGE";
export const EMPTY_FIELDS = "EMPTY_FIELDS";

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  payload: {
    value: value,
    name,
  },
});

export const handlePlantCreationSubmit = () => ({
  type: HANDLE_CREATION_PLANT_SUBMIT,
});

export const createPlant = (plant) => ({
  type: CREATE_PLANT,
  payload: {
    ...plant,
  },
});

export const updatePlantsDatabasePage = () => ({
  type: UPDATE_PLANTS_DATABASE_PAGE,
});

export const emptyFields = () => ({
  type: EMPTY_FIELDS,
});
