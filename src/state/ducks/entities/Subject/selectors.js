const subjectSelector = state => state.entities.Subject
export const getAll = state => subjectSelector(state).items
export const byId = (state, id) => subjectSelector(state).itemsById[id]
