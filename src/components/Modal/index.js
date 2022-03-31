import Proptypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import PlantGardenForm from "../PlantGardenForm";
import PlantBddForm from "../PlantBddForm";

import "./style.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  border: "none",
  borderRadius: 5,
  overflow: "auto",
  maxHeight: "85vh",
  maxWidth: "80%",
};

export default function TransitionsModal({ onClose, open, form }) {
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {form === "user-plant-form" && (
              <PlantGardenForm onClose={onClose} />
            )}
            {form === "bdd-plant-form" && <PlantBddForm onClose={onClose} />}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

TransitionsModal.propTypes = {
  onClose: Proptypes.func,
  open: Proptypes.bool,
  form: Proptypes.string,
};
