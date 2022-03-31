import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import CardPlant from "../CardPlant";
import Modal from "../Modal";
import Loader from "../Loader";
import Snackbar from "../Snackbar";

import { handleAddClick } from "../../actions/plant";
import { emptyFields } from "../../actions/plantBdd";

import "./style.scss";

const Database = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const currentState = useSelector((state) => state.plantBdd);
  const [search, setSearch] = useState("");
  const [plants, setPlants] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenGardenPlant = () => setOpen(true);
  const handleCloseGardenPlant = () => {
    setOpen(false);
    dispatch(emptyFields());
  };
  const dispatch = useDispatch();
  const handleAddPlantClick = (event) => {
    dispatch(handleAddClick(event.target.value));
    setOpenSnackbar(true);
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const request = () => {
    const token = localStorage.getItem("token");
    setLoading(true);

    axios
      .get("https://omyplant.herokuapp.com/plantdb", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPlants(res.data);
      })
      .catch((err) => {
        console.log("erreur: ", err.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    request();
  }, [currentState.plantCreated]);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="database">
      <h1 className="database-title">
        Ajoutez des plantes dans votre jardin !
      </h1>
      <p className="database-description">
        Si votre plante n'existe pas encore dans notre base de données,
        n'hésitez pas à la rajouter !
      </p>
      <section className="database-top">
        <div className="database-search">
          <input
            type="search"
            placeholder="Rechercher une plante"
            className="database-search-input"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <SearchIcon className="database-search-icon" />
        </div>
        <button
          type="button"
          className="database-add-plant"
          onClick={() => {
            handleOpenGardenPlant();
          }}
        >
          Ajouter une nouvelle plante
        </button>
        <Modal
          onClose={handleCloseGardenPlant}
          open={open}
          form="bdd-plant-form"
        />
        <Snackbar
          open={openSnackbar}
          onCloseClick={handleCloseSnackbar}
          message={"La plante a bien été ajoutée à votre jardin !"}
          severity={"success"}
        />
      </section>
      <section className="database-plants">
        {plants.length > 0 ? (
          plants
            .filter((plant) =>
              plant.commonname
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(
                  search
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, ""),
                ),
            )
            .map((plant) => (
              <Fragment key={`bdd${plant.id}`}>
                <CardPlant
                  title={plant.commonname}
                  img={plant.photo}
                  contentButton="Ajouter"
                  onAddClick={handleAddPlantClick}
                  value={plant.id}
                  cursorPointerNone={"cursorPointerNone"}
                />
              </Fragment>
            ))
        ) : (
          <div className="database-empty">La base de données est vide.</div>
        )}
      </section>
    </main>
  );
};

export default Database;
