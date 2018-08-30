const semesterSelector = state => state.entities.Semester
export const getAll = state => semesterSelector(state).items
export const byId = (state, id) => semesterSelector(state).itemsById[id]
