import React, { ReactNode } from "react";
import { Box, Modal as MuiModal } from "@mui/material";

interface IModal {
  showModal: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ showModal, onClose, children }: IModal) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <MuiModal open={showModal} onClose={onClose}>
      <Box sx={style}>{children}</Box>
    </MuiModal>
  );
};
