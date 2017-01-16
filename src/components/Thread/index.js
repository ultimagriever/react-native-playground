import React, { Component } from 'react';
import { View } from 'react-native';
import MessageList from '../MessageList';
import TextFieldSubmit from '../TextFieldSubmit';

const Thread = props => (
    <View>
      <MessageList messages={props.thread.messages} onPress={props.onMessagePress} />
      <TextFieldSubmit onSubmit={props.onMessageSubmit} />
    </View>
)

export default Thread;
