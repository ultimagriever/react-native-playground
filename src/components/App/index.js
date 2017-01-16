import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import ThreadTabs from '../../containers/ThreadTabs';
import ThreadDisplay from '../../containers/ThreadDisplay';

const App = () => (
    <View style={styles.container}>
      <Text style={styles.welcome}>Multi-Threaded Chat App</Text>
      <ThreadTabs/>
      <ThreadDisplay/>
    </View>
);

export default App;
