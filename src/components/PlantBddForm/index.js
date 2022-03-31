import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import SaveIcon from "@mui/icons-material/Save";

import { changeField, handlePlantCreationSubmit } from "../../actions/plantBdd";

import Field from "../Field";
import FieldImage from "../FieldImage";

import "./style.scss";

const PlantBddForm = ({ onClose }) => {
  const currentState = useSelector((state) => state.plantBdd);
  const dispatch = useDispatch();

  const [image, setImage] = useState(""); // fichier image sélectionné
  const [imageUrl, setImageUrl] = useState(
    "https://res.cloudinary.com/dtnoanxmt/image/upload/v1643814511/Image_de_votre_plante_lialuy.png",
  ); // blob image url
  const [fileInputName, setFileInputName] = useState(""); // to set the name of the fieldImage

  useEffect(() => {
    if (image) {
      const imgUrl = URL.createObjectURL(image); //blob
      setImageUrl(imgUrl);
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

  const onSubmitClick = (event) => {
    event.preventDefault();
    dispatch(handlePlantCreationSubmit());
    onClose();
  };

  return (
    <form className="bdd-plant-form" onSubmit={onSubmitClick}>
      <div className="form-container">
        <div className="form-description-part">
          <label>Nom</label>
          <Field
            name="commonname"
            type="text"
            onChange={changeFieldInput}
            value={currentState.commonname || ""}
            className="plant-input-field"
            required="required"
            maxLength="13"
          ></Field>
          <div
            className="form-image-container"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <FieldImage
            type="file"
            name="photo"
            className="plant-file-input"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => {
              setImage(e.target.files[0]);
              setFileInputName(e.target.name);
            }}
            required="required"
          />
          <div className="form-description">
            <label>Description</label>
            <textarea
              name="description"
              rows="8"
              cols="33"
              maxLength="250"
              className="profile-biography-content"
              defaultValue={currentState.description || ""}
              onChange={(event) => {
                dispatch(changeField(event.target.value, event.target.name));
              }}
              required="required"
            ></textarea>
          </div>
        </div>
      </div>
      <button className="profile-button" type="submit">
        Sauvegarder
        <SaveIcon sx={{ marginLeft: "1rem" }} />
      </button>
    </form>
  );
};

export default PlantBddForm;
