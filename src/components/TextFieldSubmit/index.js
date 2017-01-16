import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import Button from 'react-native-button';
import styles from './styles';

export default class TextFieldSubmit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: ''
    }
  }

  handleSubmit() {
    this.props.onSubmit(this.state.val);

    this.setState({
      val: ''
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.val}
          onChangeText={val => this.setState({ val })}
          style={styles.input}
        />
        <Button
            title="Submit"
            onPress={this.handleSubmit.bind(this)}
            style={styles.btnStyle}
            containerStyle={styles.btnContainerStyle}
        >
          Submit
        </Button>
      </View>
    );
  }
}
