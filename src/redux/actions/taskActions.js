import { ActionTypes } from "../constants/action-types";
import axios from "axios";

export const getAllTask = (tasks) => {
  return {
    type: ActionTypes.ALL_TASK,
    payload: tasks,
  };
};

export const removeSelectedTask = (taskId) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_TASK,
    payload: taskId,
  };
};

export const newTask = (tasks) => {
  return {
    type: ActionTypes.ADD_TASK,
    payload: tasks,
  };
};

export const editSelectedTask = (updatedTask) => {
  return {
    type: ActionTypes.EDIT_TASK,
    payload: updatedTask,
  };
};

export const fetchTasks = () => {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem("auth"));
    axios.get(`http://localhost:3300/task/${token.email}`).then((response) => {
      const Tasks = response.data;
      dispatch(getAllTask(Tasks));
    });
  };
};

export const addTask = (addedTask) => {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem("auth"));
    addedTask.email = token.email;
    axios.post("http://localhost:3300/task", addedTask).then((response) => {
      const Tasks = response.data;
      dispatch(newTask(Tasks));
    });
  };
};

export const editTask = (task) => {
  const taskId = task.taskId;

  return (dispatch) => {
    axios
      .patch(`http://localhost:3300/task/${taskId}`, task)
      .then((response) => {
        const updatedTask = response.data;
        dispatch(editSelectedTask(updatedTask));
      });
  };
};

export const deleteTask = (taskId) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3300/task/${taskId}`).then((response) => {
      dispatch(removeSelectedTask(taskId));
    });
  };
};

export const selectedTask = (taskId) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3300/task/${taskId}`)
      .then((response) => {
        dispatch(selectedTaskSuccess(response.data._id));
      })
      .catch((error) => {
        alert("error");
      });
  };
};
export const selectedTaskSuccess = (taskId) => {
  return {
    type: ActionTypes.SELECTED_TASK,
    payload: taskId,
  };
};
