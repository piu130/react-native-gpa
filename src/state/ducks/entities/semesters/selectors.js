export const getAll = state => state.entities.semesters
export const getById = (state, id) => getAll(state).filter(semester => semester.id === id)
