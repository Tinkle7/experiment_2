import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import StickyHeadTable from "./Table";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  heading_box: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: "40px",
    padding: "5px",
    backgroundColor: "#B2B9BB",
  },
  default_cursor: {
    cursor: "context-menu",
  },
};

export default function List() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Box sx={style.heading_box}>
        <Typography variant="h8" component="h5" sx={style.default_cursor}>
          Student Name: {/** name */}Tinkle Dash
        </Typography>
        <Typography variant="h8" component="h5" sx={style.default_cursor}>
          Overal Score: {/** overal score */}7/10
        </Typography>
        <Button color="success" variant="contained" onClick={handleOpen}>
          Certificate
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h3">
            {/** name */}Tinkle Dash
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <Box>
              <StickyHeadTable />
            </Box>
            <Box
              sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="h5" component="h3">
                Overal Score: {/** overal score */}7/10
              </Typography>
              <Button color="success" variant="contained">
                Download PDF
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
