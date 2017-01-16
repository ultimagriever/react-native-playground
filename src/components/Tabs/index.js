import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';
import styles from './styles';

const Tabs = props => (
  <View style={styles.container}>
    {
        props.tabs.map(({active, id, title}, index) => (
            <Button
                onPress={() => props.onPress(id)}
                title={title}
                key={index}
                containerStyle={active ? [styles.activeContainer, styles.buttonContainer] : styles.buttonContainer}>
              <Text style={active ? [styles.active, styles.button] : [styles.inactive, styles.button]}>{title}</Text>
            </Button>
        ))
    }
  </View>
);

export default Tabs;
