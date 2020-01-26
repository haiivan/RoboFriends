import { CHANGE_SEARCH_FIELD } from "./constants.js";

const initaiState = {
  searchField: ""
};

export const searchRobots = (state = initaiState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      //{...state,searchField,{searchField:action.payload}}
      return Object.assign({}, state, {
        searchField: action.payload
      });
    default:
      return state;
  }
};
