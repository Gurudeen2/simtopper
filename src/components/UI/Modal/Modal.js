import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalClass = (props) => {
  return (
    <Modal
      {...props}
      // size="lg"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      style={{
        border: "none",
      }}

      // centered
      // dialogClassName="modal-90w"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>{props.description}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalClass;
