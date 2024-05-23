
/**
 * @type {object} - Count
 */

const initialState = {
    count : 0,
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns {number}
 */
const reducerFunc = (state = initialState, action) => {
  if (action.type === "ADD") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === "SUBTRACT") {
    return {
      ...state,
      count: state.count - 1,
    };
  } else {
    return state;
  }
};

/**
 * Create Store
 */

const store = Redux.createStore(reducerFunc)

