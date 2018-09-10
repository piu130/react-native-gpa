const selector = state => state.entities.Subject
export const getAll = state => selector(state).items
export const byId = (state, id) => selector(state).itemsById[id]
