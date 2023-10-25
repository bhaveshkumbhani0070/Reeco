import React, { useState } from "react";
import { Modal } from "@mui/material";
import EditContainer from "./EditContainer";
import MissingProduct from "./MissingProduct";
import status from "../../data/status";
import { useDispatch } from "react-redux";
import { handleStatus } from "../../redux/orderSlice";
import itemListStyle from "../../styles/itemList.styled";

const { Approved } = status;

const {
  ItemImage,
  IconContainer,
  ItemStatus,
  RightIcon,
  CancelIcon,
  EditText,
  ItemQty,
} = itemListStyle;

const ItemRow = (props) => {
  const { item } = props;
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [missingProductModal, setMissingProductModal] = useState(false);

  const handleEditModal = (value) => {
    setEditModalOpen(value);
  };

  const handleMissingProductModal = (value) => {
    setMissingProductModal(value);
  };

  const dispatch = useDispatch();

  const handleApprove = () => {
    let statusObj = { id: item.id, status: Approved };
    dispatch(handleStatus(statusObj));
  };

  return (
    <tr key={item.id}>
      <td>
        <ItemImage src={item.img} alt="avocodo" /> {item.name}
      </td>
      <td>{item.brand}</td>
      <td>${item.price} / 6+1LB</td>
      <td>
        <ItemQty>{item.quantity}</ItemQty> *6+1LB
      </td>
      <td>${item.price * item.quantity}</td>
      <td>
        <ItemStatus status={item.status}>{item.status}</ItemStatus>
      </td>
      <td>
        <IconContainer onClick={() => handleApprove()}>
          <RightIcon status={item.status} />
        </IconContainer>
        <IconContainer onClick={() => handleMissingProductModal(true)}>
          <CancelIcon status={item.status} />
        </IconContainer>
        <EditText onClick={() => handleEditModal(true)}>Edit</EditText>
      </td>

      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={missingProductModal}
        onClose={() => handleEditModal(false)}
      >
        <MissingProduct id={item.id} handleModal={handleMissingProductModal} />
      </Modal>

      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={editModalOpen}
        onClose={() => handleEditModal(false)}
      >
        <EditContainer id={item.id} handleModal={handleEditModal} />
      </Modal>
    </tr>
  );
};

export default ItemRow;
