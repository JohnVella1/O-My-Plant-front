export const CHANGE_FIELD = "CHANGE_FIELD";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SUBSCRIBE = "SUBSCRIBE";
export const SAVE_SUBSCRIPTION = "SAVE_SUBSCRIPTION";
export const SAVE_USER = "SAVE_USER";
export const FETCH_USER = "FETCH_USER";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const HANDLE_UPDATE_PROFILE_SUBMIT = "HANDLE_UPDATE_PROFILE_SUBMIT";
export const ADD_IMAGE = "ADD_IMAGE";
export const SEND_IMAGE = "SEND_IMAGE";
export const FETCH_GARDEN_ID = "FETCH_GARDEN_ID";
export const SAVE_GARDEN_ID = "SAVE_GARDEN_ID";
export const DELETE_USER = "DELETE_USER";

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  payload: {
    value: value,
    name,
  },
});

export const updateProfile = () => ({
  type: UPDATE_PROFILE,
});

export const handleProfileUpdateSubmit = (profileUpdated) => ({
  type: HANDLE_UPDATE_PROFILE_SUBMIT,
  payload: profileUpdated,
});

export const addImage = (base64, fileInputName) => ({
  type: ADD_IMAGE,
  payload: {
    value: base64,
    name: fileInputName,
  },
});

export const login = () => ({
  type: LOGIN,
});

export const subscribe = () => ({
  type: SUBSCRIBE,
});

export const logout = () => ({
  type: LOGOUT,
});

export const saveUser = (user) => ({
  type: SAVE_USER,
  payload: {
    ...user,
  },
});

export const saveSubscription = () => ({
  type: SAVE_SUBSCRIPTION,
});

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const fetchGardenId = () => ({
  type: FETCH_GARDEN_ID,
});

export const saveGardenId = (gardenId) => ({
  type: SAVE_GARDEN_ID,
  payload: gardenId.id,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});
