import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './styles';

const MessageList = props => (
    <View>
      {
          props.messages.map(({id, text, timestamp}, index) => (
              <TouchableHighlight key={index} onPress={() => props.onPress(id)}>
                <Text style={styles.comment}>
                    {text}
                    <Text style={styles.metadata}>@{timestamp}</Text>
                </Text>
              </TouchableHighlight>
          ))
      }
    </View>
)

export default MessageList;
