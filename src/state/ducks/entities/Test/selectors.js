const testSelector = state => state.entities.Test
export const getAll = state => testSelector(state).items
export const byId = (state, id) => testSelector(state).itemsById[id]
