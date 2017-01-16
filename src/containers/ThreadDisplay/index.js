import { connect } from 'react-redux';
import Thread from '../../components/Thread';
import Actions from '../../actions';

const mapStateToThreadsProps = state => {
  const { activeThreadId, threads } = state;

  const thread = threads.find(t => t.id === activeThreadId);

  return { thread };
};

const mapDispatchToThreadsProps = dispatch => ({
  onMessagePress: id => dispatch(Actions.deleteMessage(id)),
  dispatch
});

const mergeThreadProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    onMessageSubmit: text => dispatchProps.dispatch(Actions.addMessage(text, stateProps.thread.id))
});

export default connect(mapStateToThreadsProps, mapDispatchToThreadsProps, mergeThreadProps)(Thread);
