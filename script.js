/**
 * Creates The Store
 * @param {*} initial 
 * @param {*} reducer 
 */

const createStore = (initial, reducer) => {
    let state = initial
    const actions = [];

    /**
     * Push in an Object of this param in actions []
     * @param {*} action 
     * @param {*} callback 
     */
    const subscribe = (action, callback) => {
        actions.push({action, callback})

    }

    /**
     * 
     * @param {*} action 
     */
    const dispatch = (action) => {
        state = reducer(state, action, actions)
    }

    const getState = () => {
        return state;
    }

    return {subscribe, dispatch, getState}

}


