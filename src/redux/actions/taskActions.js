import { ActionTypes } from "../constants/action-types";
import axios from "axios";

export const getAllTask = (tasks) => {
  console.log(tasks);
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
  console.log(tasks);
  return {
    type: ActionTypes.ADD_TASK,
    payload: tasks,
  };
};

export const editSelectedTask = (updatedTask) => {
  console.log(updatedTask);
  return {
    type: ActionTypes.EDIT_TASK,
    payload: updatedTask,
  };
};
// const tasks = useSelector((state) => state);
// const dispatch = useDispatch();
export const fetchTasks = () => {
  return (dispatch) => {
    axios.get("http://localhost:3200/task").then((response) => {
      // response.data is the users
      const Tasks = response.data;
      dispatch(getAllTask(Tasks));
    });
  };
};

export const addTask = (addedTask) => {
  return (dispatch) => {
    axios.post("http://localhost:3200/task", addedTask).then((response) => {
      // response.data is the users
      const Tasks = response.data;
      // console.log(Tasks);
      dispatch(newTask(Tasks));
    });
    console.log(addedTask);
  };
};

export const editTask = (task) => {
  const taskId = task.taskId;
  console.log(task);
  return (dispatch) => {
    axios
      .patch(`http://localhost:3200/task/${taskId}`, task)
      .then((response) => {
        // response.data is the users
        const updatedTask = response.data;
        console.log(updatedTask);
        dispatch(editSelectedTask(updatedTask));
      });
    // console.log(updatedTask);
  };
};

export const deleteTask = (taskId) => {
  console.log(taskId);
  return (dispatch) => {
    axios.delete(`http://localhost:3200/task/${taskId}`).then((response) => {
      dispatch(removeSelectedTask(taskId));
    });
  };
};

export const selectedTask = (taskId) => {
  // console.log(taskId);
  return (dispatch) => {
    axios
      .get(`http://localhost:3200/task/${taskId}`)
      .then((response) => {
        console.log(response.data);
        dispatch(selectedTaskSuccess(response.data._id));
      })
      .catch((error) => {
        // dispatch(fetchTasksFailure(error.message));
      });
  };
};
export const selectedTaskSuccess = (taskId) => {
  return {
    type: ActionTypes.SELECTED_TASK,
    payload: taskId,
  };
};
