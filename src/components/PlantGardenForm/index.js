import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import {
  changeField,
  updatePlant,
  handlePlantUpdateSubmit,
  deletePlant,
} from "../../actions/plant";

import Dialog from "../Dialog";
import Field from "../Field";
import FieldImage from "../FieldImage";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

import "./style.scss";

const PlantGardenForm = ({ onClose }) => {
  const currentState = useSelector((state) => state);
  const dispatch = useDispatch();

  const [wateringfrequency, setWateringfrequency] = useState(
    currentState.plant.wateringfrequency,
  );

  const changeWateringfrequency = (newWateringfrequency, name) => {
    setWateringfrequency(newWateringfrequency);
    changeFieldInput(newWateringfrequency, name);
  };

  const [exposure, setExposure] = useState(currentState.plant.exposure);

  const changeExposure = (newExposure, name) => {
    setExposure(newExposure);
    changeFieldInput(newExposure, name);
  };

  const [trimming, setTrimming] = useState(currentState.plant.trimming);

  const changeTrimming = (newTrimming, name) => {
    setTrimming(newTrimming);
    changeFieldInput(newTrimming, name);
  };

  const [reppoting, setReppoting] = useState(currentState.plant.reppoting);

  const changeReppoting = (newReppoting, name) => {
    setReppoting(newReppoting);
    changeFieldInput(newReppoting, name);
  };

  const [image, setImage] = useState("");
  const [fileInputName, setFileInputName] = useState("");

  useEffect(() => {
    if (image) {
      updateImage();
    }
  }, [image]);

  const updateImage = () => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      dispatch(changeField(reader.result, fileInputName));
    };
    reader.onerror = () => {
      console.error("La validation du formulaire a échoué :( => FileReader ");
    };
  };

  const changeFieldInput = (value, name) => {
    dispatch(changeField(value, name));
  };

  const enablePlantUpdate = (event) => {
    event.preventDefault();
    dispatch(updatePlant(false));
  };

  const onSubmitClick = (event) => {
    event.preventDefault();
    dispatch(handlePlantUpdateSubmit());
    dispatch(updatePlant(true));
  };

  // Dialog
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <form className="user-plant-form" onSubmit={onSubmitClick}>
      <div className="form-container">
        <div className="form-description-part">
          <h2>{currentState.plant.commonname}</h2>
          <label htmlFor="nickname">
            {currentState.plant.plantUpdateDisabled &&
              (currentState.plant.nickname || "Surnom à définir")}
          </label>
          <Field
            name="nickname"
            type="text"
            className={`${
              currentState.plant.plantUpdateDisabled
                ? "hidden-input"
                : "plant-input-field"
            }`}
            onChange={changeFieldInput}
            placeholder="Surnom de la plante"
            value={
              currentState.plant.nickname ? currentState.plant.nickname : ""
            }
            disabled={currentState.plant.plantUpdateDisabled}
          />

          <img
            className="plant-picture"
            src={
              currentState.plant.photo_member
                ? currentState.plant.photo_member
                : currentState.plant.photo
            }
            alt="plant"
          />
          <FieldImage
            type="file"
            name="photo_member"
            className={`${
              currentState.plant.plantUpdateDisabled
                ? "hidden-input"
                : "plant-file-input"
            }`}
            accept=".jpg, .jpeg, .png"
            disabled={currentState.plant.plantUpdateDisabled}
            onChange={(e) => {
              setImage(e.target.files[0]);
              setFileInputName(e.target.name);
            }}
          />
          <h3>Description</h3>
          <p>{currentState.plant.description}</p>
        </div>
        <div className="form-care-part">
          <h3>Entretien</h3>
          <fieldset className="form-care-watering">
            <legend>Fréquence d'arrosage</legend>
            <label htmlFor="wateringfrequency">
              Périodicité:{" "}
              {currentState.plant.plantUpdateDisabled &&
                (currentState.plant.wateringfrequency || "A définir")}
              <select
                name="wateringfrequency"
                disabled={currentState.plant.plantUpdateDisabled}
                className={`${
                  currentState.plant.plantUpdateDisabled
                    ? "hidden-input"
                    : "plant-input-select"
                }`}
                onChange={(event) =>
                  changeWateringfrequency(event.target.value, event.target.name)
                }
                value={wateringfrequency || ""}
              >
                <option value="">
                  Sélectionnez votre périodicité d'arrosage
                </option>
                <option value="jour">jour</option>
                <option value="semaine">semaine</option>
                <option value="mois">mois</option>
              </select>
            </label>

            <label htmlFor="numberoftimes">
              Nombre de fois:{" "}
              {currentState.plant.plantUpdateDisabled &&
                (currentState.plant.numberoftimes || "A définir")}
            </label>
            <Field
              name="numberoftimes"
              type="number"
              minNumber="0"
              className={`${
                currentState.plant.plantUpdateDisabled
                  ? "hidden-input"
                  : "plant-input-field"
              }`}
              onChange={changeFieldInput}
              value={currentState.plant.numberoftimes || ""}
              disabled={currentState.plant.plantUpdateDisabled}
            />
          </fieldset>
          <label htmlFor="site" className="label">
            Emplacement:{" "}
          </label>
          {currentState.plant.plantUpdateDisabled &&
            (currentState.plant.site || "A définir")}
          <Field
            name="site"
            type="text"
            className={`${
              currentState.plant.plantUpdateDisabled
                ? "hidden-input"
                : "plant-input-field"
            }`}
            onChange={changeFieldInput}
            value={currentState.plant.site || ""}
            disabled={currentState.plant.plantUpdateDisabled}
          />
          <label htmlFor="exposure" className="label">
            Exposition:{" "}
          </label>
          {currentState.plant.plantUpdateDisabled &&
            (currentState.plant.exposure || "A définir")}
          <select
            value={exposure || ""}
            name="exposure"
            onChange={(event) =>
              changeExposure(event.target.value, event.target.name)
            }
            disabled={currentState.plant.plantUpdateDisabled}
            className={`${
              currentState.plant.plantUpdateDisabled
                ? "hidden-input"
                : "plant-input-select"
            }`}
          >
            <option>Sélectionnez l'exposition de votre plante</option>
            <option value="faible">faible</option>
            <option value="modérée">modérée</option>
            <option value="elevée">élevée</option>
          </select>
          <label htmlFor="trimming" className="label">
            Taille:{" "}
          </label>
          {currentState.plant.plantUpdateDisabled &&
            (currentState.plant.trimming || "A définir")}
          <select
            value={trimming || ""}
            name="trimming"
            onChange={(event) =>
              changeTrimming(event.target.value, event.target.name)
            }
            disabled={currentState.plant.plantUpdateDisabled}
            className={`${
              currentState.plant.plantUpdateDisabled
                ? "hidden-input"
                : "plant-input-select"
            }`}
          >
            <option>Sélectionnez votre mois de taille</option>
            <option value="janvier">janvier</option>
            <option value="février">février</option>
            <option value="mars">mars</option>
            <option value="avril">avril</option>
            <option value="mai">mai</option>
            <option value="juin">juin</option>
            <option value="juillet">juillet</option>
            <option value="août">août</option>
            <option value="septembre">septembre</option>
            <option value="octobre">octobre</option>
            <option value="novembre">novembre</option>
            <option value="décembre">décembre</option>
          </select>
          <label htmlFor="reppoting" className="label">
            Rempotage:{" "}
          </label>
          {currentState.plant.plantUpdateDisabled &&
            (currentState.plant.reppoting || "A définir")}
          <select
            value={reppoting || ""}
            name="reppoting"
            onChange={(event) =>
              changeReppoting(event.target.value, event.target.name)
            }
            disabled={currentState.plant.plantUpdateDisabled}
            className={`${
              currentState.plant.plantUpdateDisabled
                ? "hidden-input"
                : "plant-input-select"
            }`}
          >
            <option>Sélectionnez votre mois de rempotage</option>
            <option value="janvier">janvier</option>
            <option value="février">février</option>
            <option value="mars">mars</option>
            <option value="avril">avril</option>
            <option value="mai">mai</option>
            <option value="juin">juin</option>
            <option value="juillet">juillet</option>
            <option value="août">août</option>
            <option value="septembre">septembre</option>
            <option value="octobre">octobre</option>
            <option value="novembre">novembre</option>
            <option value="décembre">décembre</option>
          </select>
        </div>
      </div>
      {currentState.plant.plantUpdateDisabled && (
        <div className="button-container">
          <button
            className="profile-button"
            type="button"
            onClick={enablePlantUpdate}
          >
            Modifier
            <EditIcon sx={{ marginLeft: "1rem" }} />
          </button>
          <button
            className="profile-button"
            type="button"
            onClick={handleClickOpen}
          >
            Supprimer
            <DeleteIcon sx={{ marginLeft: "1rem" }} />
          </button>
        </div>
      )}
      <Dialog
        open={open}
        onCloseClick={handleClose}
        onCloseModal={onClose}
        onConfirmDelete={() => dispatch(deletePlant())}
        message="Souhaitez-vous réellement supprimer cette plante?"
      />
      {!currentState.plant.plantUpdateDisabled && (
        <button className="profile-button" type="submit">
          Sauvegarder
          <SaveIcon sx={{ marginLeft: "1rem" }} />
        </button>
      )}
    </form>
  );
};

export default PlantGardenForm;
