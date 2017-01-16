const addMessage = (text, threadId) => ({
  type: 'ADD_MESSAGE',
  text,
  threadId
});

const deleteMessage = id => ({
  type: 'OPEN_THREAD',
  id
});

const openThread = id => ({
  type: 'OPEN_THREAD',
  id
});

export default {
  addMessage,
  deleteMessage,
  openThread
}
