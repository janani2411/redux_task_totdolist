import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { editTask } from "../redux/actions/taskActions";

function EditTask(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const task = props.task;
  const [taskId, existingTaskId] = useState(task._id);
  const [userId, setUserId] = useState(task.userId);
  const [taskName, setTaskName] = useState(task.taskName);
  const [from, setFromDate] = useState(task.from);
  const [to, setToDate] = useState(task.to);
  const [type, setType] = useState(task.type);
  const [description, setDescription] = useState(task.description);
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      taskId: taskId,
      taskName: taskName,
      from: from,
      to: to,
      type: type,
      description: description,
    };
    setType("");
    setTaskName("");
    setFromDate("");
    setToDate("");
    setDescription("");
    props.editTask(task);
  };
  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          handleShow();
        }}
      >
        Edit
      </Button>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
              handleClose();
            }}
            className="edit-form"
          >
            <Modal.Header
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(16, 199, 245)",
              }}
            >
              <Modal.Title>
                <h3 className="text-center m-3 p-2 text-white">
                  EDIT YOUR TASK
                </h3>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="form-group row mb-4 mt-5">
                <label className="col-sm-2 col-form-label offset-1">
                  Task Name
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Task"
                    required
                    name="task-name"
                    value={taskName}
                    onChange={(e) => {
                      setTaskName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-group row mb-4">
                <label className="col-sm-2 col-form-label offset-1">From</label>
                <div className="col-sm-8">
                  <input
                    type="datetime-local"
                    className="form-control"
                    name="from-date"
                    value={from}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row mb-4">
                <label className="col-sm-2 col-form-label offset-1">To</label>
                <div className="col-sm-8">
                  <input
                    type="datetime-local"
                    className="form-control"
                    name="to-date"
                    value={to}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row mb-4">
                <label className="col-sm-2 col-form-label offset-1">
                  Task Type
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Task type"
                    required
                    name="task-type"
                    value={type}
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-group row mb-4">
                <label className="col-sm-2 col-form-label offset-1">
                  Description
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description about task"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <br></br>
            </Modal.Body>
            <Modal.Footer
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="p-4"
            >
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary text-white mx-2 p-2 px-3"
                  aria-pressed="true"
                >
                  Edit Task
                </button>
              </div>
              <Button
                variant="danger"
                onClick={() => {
                  handleClose();
                }}
                className="ml-5 p-2 px-4"
              >
                Close
              </Button>
            </Modal.Footer>
          </form>
        </div>
      </Modal>
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    editTask: (task) => {
      dispatch(editTask(task));
    },
  };
};
export default connect(null, mapDispatchToProps)(EditTask);
