
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLoginScreen from './Screens/loginScreen';

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <SignUpLoginScreen/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
