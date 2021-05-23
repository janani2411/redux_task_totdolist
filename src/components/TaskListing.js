import React from "react";
import TaskDetails from "./TaskComponent";
import "../index.css";

const TaskListing = () => {
  return (
    <div className="m-5 p-5 all-task">
      <div className="row mb-2 text-center">
        <div className="column col-sm-1 p-3 offset-1">
          <strong>Task Name</strong>
        </div>
        <div className="column col-sm-1 p-3">
          <strong>Type</strong>
        </div>
        <div className="column col-sm-2 p-3">
          <strong>From</strong>
        </div>
        <div className="column col-sm-2 p-3">
          <strong>To</strong>
        </div>
        <div className="column col-sm-2 p-3">
          <strong>Description</strong>
        </div>
        <div className="column col-sm-2 p-3">
          <strong>Actions</strong>
        </div>
      </div>
      <TaskDetails />
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     tasks: state.allTasks,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getAllTasks: () => dispatch(fetchTasks()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(TaskListing);

export default TaskListing;
