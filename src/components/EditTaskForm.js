import React, { useState } from "react";
import { connect } from "react-redux";
import { editTask } from "../redux/actions/taskActions";
import "../index.css";
import { Link } from "react-router-dom";

const EditTaskForm = (props, editTask) => {
  const task = props.location.task;
  //   console.log(task);
  const [taskId, existingTaskId] = useState(task._id);
  const [userId, setUserId] = useState(task.userId);
  const [taskName, setTaskName] = useState(task.taskName);
  const [from, setFromDate] = useState(task.from);
  const [to, setToDate] = useState(task.to);
  const [type, setType] = useState(task.type);
  const [description, setDescription] = useState(task.description);
  return (
    <div>
      <h3>ADD YOUR TASK</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const task = {
            taskId: taskId,
            taskName: taskName,
            userId: userId,
            from: from,
            to: to,
            type: type,
            description: description,
          };
          setUserId("");
          setType("");
          setTaskName("");
          setFromDate("");
          setToDate("");
          setDescription("");
          editTask(task);
        }}
        className="mt-5 p-5 add-form col-sm-6 offset-3"
      >
        <div className="form-group row mb-4">
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
        </div>
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
            className="btn btn-primary text-white ml-2 p-2"
            aria-pressed="true"
          >
            Edit Task
          </button>
        </div>
      </form>
    </div>
  );
};

// export default TaskAddForm;
// const mapStateToProps = (state) => {
//   return {
//     addTask: state.addTask.task,
//   };
// };
const mapDispatchToProps = (dispatch) => {
  return {
    editTask: (task) => dispatch(editTask(task)),
  };
};
export default connect(null, mapDispatchToProps)(EditTaskForm);
