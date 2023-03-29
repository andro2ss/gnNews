import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setFormat } from "../../../redux/reducers/listFormatReducer";
import { useState } from "react";

export const useHeaderContent = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const format = useSelector((state: RootState) => state.listFormat.form);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleFormatChange = () => {
    dispatch(setFormat(format === "list" ? "tiles" : "list"));
  };
  const handleHomeBtnClick = () => {
    navigate("/");
  };

  return {
    handleHomeBtnClick,
    format,
    handleFormatChange,
    showModal,
    toggleModal,
  };
};
