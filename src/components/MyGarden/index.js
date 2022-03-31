import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { fetchPlant, updatePlant } from "../../actions/plant";

import "./style.scss";

import CardPlant from "../CardPlant";
import Modal from "../Modal";
import Loader from "../Loader";
import Snackbar from "../Snackbar";

const MyGarden = () => {
  const plantDeleted = localStorage.getItem("deletePlant");

  const [search, setSearch] = useState("");
  const [plants, setPlants] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    if (plantDeleted) {
      setOpenSnackbar(true);
      setTimeout(() => {
        setOpenSnackbar(false);
        localStorage.removeItem("deletePlant");
      }, 2000);
    }
  }, [plantDeleted]);

  const dispatch = useDispatch();

  const handleOpenGardenPlant = () => {
    setOpen(true);
  };
  const handleCloseGardenPlant = () => {
    setOpen(false);
    dispatch(updatePlant(true));
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
      .get("https://omyplant.herokuapp.com/garden", {
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
  }, [open]);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="myGarden">
      <h1 className="myGarden-title">Mon jardin</h1>
      <section className="myGarden-top">
        <div className="myGarden-search">
          <input
            type="search"
            placeholder="Rechercher une plante"
            className="myGarden-search-input"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <SearchIcon className="myGarden-search-icon" />
        </div>
        <Link to="/add-plant" className="myGarden-add-plant">
          Ajouter une plante
        </Link>
      </section>
      <Modal
        onClose={handleCloseGardenPlant}
        open={open}
        form="user-plant-form"
      />

      <Snackbar
        open={openSnackbar}
        onCloseClick={handleCloseSnackbar}
        message={"La plante a bien été supprimée de votre jardin !"}
        severity={plantDeleted}
      />

      <section className="myGarden-plants">
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
              <Fragment key={plant.id}>
                <CardPlant
                  title={plant.commonname}
                  img={plant.photo_member ? plant.photo_member : plant.photo}
                  onCardClick={() => {
                    handleOpenGardenPlant();
                    dispatch(fetchPlant(plant.id));
                  }}
                />
              </Fragment>
            ))
        ) : (
          <div className="myGarden-empty">Votre jardin est vide.</div>
        )}
      </section>
    </main>
  );
};

export default MyGarden;
