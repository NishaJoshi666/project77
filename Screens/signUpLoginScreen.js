import Rect, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import firebase from 'firebase';

export default class SignUpLoginScreen extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
        }
    }

    SignUp=(email,password)=>{
        firebase.auth().signUpWithEmailAndPassword
        .then(()=>{
            return(
                alert('User successfully signedUp')
            )
        })
        .catch((error)=>{
            return(
                alert('Error')
            )
        })
    }

    render(){
        return(
            <View style={StyleSheet.container}>
                <Text style={styles.login}>Login OR Signin</Text>
                <TextInput style={styles.input}
                placeholder='ENTER YOUR ID'
                keyboardType='email-address'
                onChangeText={(text)=>{
                    this.setState({
                        email : text
                    })
                }}/>

                <TextInput style={styles.input}
                placeholder='ENTER YOUR PASSWORD'
                keyboardType='password'
                onChangeText={(text)=>{
                    this.setState({
                        password : text
                    })
                }}/>

        <TouchableOpacity style={styles.touchable} onPress={()=>{this.SignUp(this.state.email,this.state.password)}}>
            <Text style={styles.login}>Login</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
            <Text style={styles.login}>Sign Up</Text>

        </TouchableOpacity>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    login:{
        color:"lightBlue",
        fontSize:20,
        fontWeight:'bold',
    },
    input:{
        width:50,
        height:50,
        borderWidth:5,
    },
    touchable:{
        width:100,
        height:80,
    }
  });
  