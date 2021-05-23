import { ActionTypes } from "../constants/action-types";

const initialState = {
  tasks: [],
  selectedTask: [],
  edit: false,
};

export const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ALL_TASK:
      return { ...state, tasks: payload };
    case ActionTypes.ADD_TASK:
      return { ...state.tasks, task: payload };
    case ActionTypes.SELECTED_TASK:
      return {
        tasks: [...state.tasks],
        selectedTask: state.tasks.find((task) => task._id === payload),
        edit: true,
      };
    case ActionTypes.EDIT_TASK:
      return {
        tasks: state.tasks.map((task) =>
          task._id === payload._id ? payload : task
        ),
      };
    case ActionTypes.REMOVE_SELECTED_TASK:
      return {
        tasks: state.tasks.filter((task) => task._id !== payload),
      };
    default:
      return state;
  }
};
