import { createStore } from 'redux';
import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from './actions/TodoListactions';

const initialState = {
  isLoggedIn: false,
  user: null,
  enrolledCourses: [],
  votes: {},
  tasks: [],
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case 'ENROLL_COURSE': // Add this case
      return {
        ...state,
        enrolledCourses: [...state.enrolledCourses, action.payload],
      };
    case 'VOTE': // Add this case
      const { contentID, change } = action.payload;
      return {
        ...state,
        votes: {
          ...state.votes,
          [contentID]: Math.max((state.votes[contentID] || 0) + change, 0),
        },
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { text: action.payload, completed: false }],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    default:
      return state;
  }
}

const store = createStore(authReducer);

export default store;
