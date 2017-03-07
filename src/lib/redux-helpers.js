export const buildStrategy = (emptyState, options) => (state = emptyState, action, global) => {
  return action.type in options
    ? options[action.type](state, action, global)
    : state;
};

export const combineReducers = reducers => (state, action) =>
  Object.entries(reducers)
    .reduce((newState, [node, reducer]) => {
      newState[node] = reducer(state[node], action, state, node);
      return newState;
    }, {});