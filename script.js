/**
 * Creates The Store
 * @param {*} initial
 * @param {*} reducer
 */

const createStore = (initial, reducer) => {
  let state = initial;
  const actions = [];

  /**
   * Push in an Object of this param in actions []
   * @param {*} action
   * @param {*} callback
   */
  const subscribe = (action, callback) => {
    actions.push({ action, callback });
  };

  /**
   * Takes the an Action as a param
   * @param {*} action
   */
  const dispatch = (action) => {
    state = reducer(state, action, actions);
  };

  const getState = () => {
    return state;
  };

  return { subscribe, dispatch, getState };
};

const reducer = (state = 0, action, actions) => {
  const found = actions.find(
    (anyAction) => anyAction.action.type === action.type
  );
  return found.callback(state);
};

/**
 * @constant {Object} store - is an object of functions
 */
const store = createStore(0, reducer);

store.subscribe({type : 'Add'},  state => state + 1)
store.subscribe({type : 'Subtract'},  state => state - 1)
store.subscribe({type : 'Reset'},  () => 0)

store.dispatch({type : "Add"})
console.log(store.getState())
store.dispatch({type : "Add"})
console.log(store.getState())
store.dispatch({type : "Subtract"})
console.log(store.getState())
store.dispatch({type : "Reset"})
console.log(store.getState())

