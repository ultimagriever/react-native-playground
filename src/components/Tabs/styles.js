import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  activeContainer: {
    backgroundColor: 'rgb(8, 46, 107)'
  },
  active: {
    color: 'white'
  },
  buttonContainer: {
    borderRadius: 5,
    height: 25,
    width: 75,
    margin: 5
  },
  inactive: {
    color: 'black'
  },
  button: {
    fontSize: 8
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 35
  }
});
