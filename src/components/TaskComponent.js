import React, { useEffect } from "react";
import "../index.css";
import { connect } from "react-redux";
import { fetchTasks, deleteTask } from "../redux/actions/taskActions";
import EditTask from "./EditTask";

function TaskDetails({ allTasks, fetchTasks, deleteTask }) {
  useEffect(() => {
    fetchTasks();
  }, [allTasks]);
  return (
    <div>
      {allTasks &&
        allTasks.map((task) => (
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
                  <EditTask task={task} />
                  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      const confirmBox = window.confirm(
                        "Do you really want to delete this task?"
                      );
                      if (confirmBox === true) {
                        deleteTask(task._id);
                      }
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
}

const mapStateToProps = (state) => {
  return {
    allTasks: state.allTasks.tasks,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: () => dispatch(fetchTasks()),
    deleteTask: (_id) => dispatch(deleteTask(_id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);
