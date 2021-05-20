import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import "../index.css";
// import styled from "styled-components";
import { connect } from "react-redux";
import {
  fetchTasks,
  editTask,
  deleteTask,
  selectedTask,
} from "../redux/actions/taskActions";
import EditTask from "./EditTask";
import { Link } from "react-router-dom";

// const StyledLink = styled(Link)`
//   text-decoration: none;
// `;

function TaskDetails({
  allTasks,
  fetchTasks,
  editTask,
  deleteTask,
  selectedTask,
}) {
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);
  return (
    <div>
      {allTasks.map((task) => (
        // const { _id, taskName, from, to, type, description } = task;
        <div key={task._id}>
          <div>
            <div className="row text-left mb-2">
              <div className="task-data col-sm-1 p-1 offset-1">
                {task.taskName}
              </div>
              <div className="task-data col-sm-1 p-1">{task.type}</div>
              <div className="task-data col-sm-2 p-2">{task.from}</div>
              <div className="task-data col-sm-2 p-2">{task.to}</div>
              <div className="task-data col-sm-2 p-2">{task.description}</div>
              <div className="task-data col-sm-2 p-2 text-center">
                <Link to={{ pathname: "/alltask/editTask", task: task }}>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => {
                      // editTask(task);
                    }}
                  >
                    Edit
                  </button>
                </Link>
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    // const confirmBox = window.confirm(
                    //   "Do you really want to delete this task?"
                    // );
                    // if (confirmBox === true) {
                    deleteTask(task._id);
                    // }
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // const tasks = useSelector((state) => state.allTasks.tasks);
}
// return <>{renderList}</>;

// export default TaskDetails;
const mapStateToProps = (state) => {
  return {
    allTasks: state.allTasks.tasks,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: () => dispatch(fetchTasks()),
    // editTask: (task) => dispatch(editTask(task)),
    deleteTask: (_id) => dispatch(deleteTask(_id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);
