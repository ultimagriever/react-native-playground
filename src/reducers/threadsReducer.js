import messagesReducer from './messagesReducer';

export default threadsReducer = (state = [
  {
    id: 'de420090-6ce3-489c-8a48-7192427d2923',
    title: 'Refurbisher 0',
    messages: messagesReducer(undefined, {})
  },
  {
    id: '5993f0f2-f7a9-4515-9d3e-38254264ad7f',
    title: 'Lamebrix Strikebocks',
    messages: messagesReducer(undefined, {})
  },
  {
    id: 'aadfe7a2-0283-47ed-a248-a21c649873bc',
    title: 'Cruise Chaser',
    messages: messagesReducer(undefined, {})
  },
  {
    id: '06722d75-9528-4873-a1bd-3222f92d10a5',
    title: 'Alexander Prime',
    messages: messagesReducer(undefined, {})
  }
], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
    case 'DELETE_MESSAGE':
      const threadIndex = findThreadIndex(state, action);
      const oldThread = state[threadIndex];
      const newThread = {
        ...oldThread,
        messages: messagesReducer(oldThread.messages, action)
      };

      return [
        ...state.slice(0, threadIndex),
        newThread,
        ...state.slice(threadIndex + 1, state.length)
      ];
    default:
      return state;
  }
}

const findThreadIndex = (threads, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE': { return threads.findIndex(
        (t) => t.id === action.threadId
    );
    }
    case 'DELETE_MESSAGE': {
      return threads.findIndex(
          (t) => t.messages.find((m) => (
              m.id === action.id
          ))
      ); }
  }
}
