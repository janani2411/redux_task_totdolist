import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { editTask, selectedTask } from "../redux/actions/taskActions";

function EditTask(props, { editTask }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //s console.log(allTasks);
  console.log(props.task);
  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          handleShow();
        }}
        className="m-3"
      >
        Edit
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title></Modal.Title>
          <p></p>
        </Modal.Header>
        <Modal.Body>
          {/* <p>{props.item.task}</p> */}
          <p></p>
          {/* <p>{props.item.describe}</p> */}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              editTask(props.task);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    allTasks: state.allTasks.tasks,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    editTask: (task) => {
      dispatch(editTask(task));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditTask);
