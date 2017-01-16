import { connect } from 'react-redux';
import Actions from '../../actions';
import Tabs from '../../components/Tabs';

const mapStateToTabsProps = state => {
  const { threads, activeThreadId } = state;

  const tabs = threads.map(t => ({
    title: t.title,
    active: t.id === activeThreadId,
    id: t.id
  }));

  return { tabs };
}

const mapDispatchToTabsProps = dispatch => ({
  onPress: id => dispatch(Actions.openThread(id))
});

export default connect(mapStateToTabsProps, mapDispatchToTabsProps)(Tabs);
