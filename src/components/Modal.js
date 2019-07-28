import React from 'react';
import { Modal as BSModal, Button } from 'react-bootstrap';

export function Modal({ title, children, ...props }) {
  return (
    <BSModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <BSModal.Header closeButton>
        <BSModal.Title id="contained-modal-title-vcenter">
          {title}
        </BSModal.Title>
      </BSModal.Header>
      <BSModal.Body>{children}</BSModal.Body>
      <BSModal.Footer>
        <Button onClick={props.onHide} variant="success">
          Ок
        </Button>
      </BSModal.Footer>
    </BSModal>
  );
}

export function ModalSucces({ content, ...props }) {
  return (
    <Modal title="Товар успешно добавлен" {...props}>
      <h5>Информация</h5>
      <br />
      <pre>{JSON.stringify(content, null, 2)}</pre>
    </Modal>
  );
}
