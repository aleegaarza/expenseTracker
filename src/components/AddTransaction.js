import React, {useContext, useState} from "react";
import { GlobalContext } from "./context/GlobalState";
import { Card, ModalBody, ModalHeader, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const AddTransaction = ({ toggle, toggleHandler }) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  const {addTransaction} = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction)
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="btn btn1 fixed-bottom" onClick={handleShow}>
        Agregar movimiento
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modal-dialog-centered"
        centered
      >
        <ModalHeader closeButton>Agregar nuevo movimiento</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <Card className="form-control mb-2">
              <label htmlFor="text">Nombre del movimiento</label>
              <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
            </Card>
            <Card className="form-control">
              <label htmlFor="amount">
                Cantidad <br />
                (negativa - gasto, positiva - ingreso)
              </label>
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
            </Card>
            <Button type="submit" onClick={handleClose} className="btn1 mt-4 d-flex justify-content-center">
              Guardar
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};
