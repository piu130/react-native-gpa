const selector = state => state.entities.Semester
export const getAll = state => selector(state).items
export const byId = (state, id) => selector(state).itemsById[id]
