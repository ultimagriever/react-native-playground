export default activeThreadIdReducer = (state = 'de420090-6ce3-489c-8a48-7192427d2923', action) => {
  if (action.type === 'OPEN_THREAD') {
    return action.id;
  } else {
    return state;
  }
}
