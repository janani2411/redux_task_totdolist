import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/actions/taskActions";
import "../index.css";

const TaskAddForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [from, setFromDate] = useState("");
  const [to, setToDate] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    const addedTask = {
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
    addTask(addedTask);
  };
  return (
    <div>
      <h3 className="text-center mt-5 task-head">ADD YOUR TASK</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
          // setUserId("");
        }}
        className="mt-5 p-5 add-form col-sm-6 offset-3"
      >
        {/* <div className="form-group row mb-4">
          <label className="col-sm-3 col-form-label offset-1">user Id</label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control col-sm-3"
              placeholder="Enter Task"
              required
              name="task-name"
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            />
          </div>
        </div> */}
        <div className="form-group row mb-4">
          <label className="col-sm-3 col-form-label offset-1">Task Name</label>
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
          <label className="col-sm-3 col-form-label offset-1">From</label>
          <div className="col-sm-8">
            <input
              type="datetime-local"
              className="form-control"
              required
              name="from-date"
              value={from}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row mb-4">
          <label className="col-sm-3 col-form-label offset-1">To</label>
          <div className="col-sm-8">
            <input
              type="datetime-local"
              className="form-control"
              required
              name="to-date"
              value={to}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row mb-4">
          <label className="col-sm-3 col-form-label offset-1">Task Type</label>
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
          <label className="col-sm-3 col-form-label offset-1">
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
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary text-white ml-2 p-2 pl-1"
            aria-pressed="true"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (addedTask) => dispatch(addTask(addedTask)),
  };
};
export default connect(null, mapDispatchToProps)(TaskAddForm);
