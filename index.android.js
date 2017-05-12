/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import {styles} from './estilos';

export default class clase1 extends Component {

mensaje="Hola cordoba";

  /*onPressLearnMore(){

    alert("Hola");


  }*/
onPressLearnMore=(nombre,apellido)=>{

alert("nombre: "+nombre+" apellido:"+apellido);

}

state ={
'username':'',
'password':''
};

  render() {

    return (
        <View style={styles.contenedor}>
         <Text>Hola Mundo</Text>

                 <Button
                  ref="1"
          onPress={this.onPressLearnMore.bind(this,"cristhian","cordoba")}
          title="Learn More"
          color="#FF0000"
          accessibilityLabel="Learn more about this purple button"
        />

        <TextInput
        ref="2"
        placeholder={"usuario"}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(username) => this.setState({username})}
        value={this.state.username}
      />

      <TextInput
       ref="3"
       placeholder={"Contraseña"}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(password) => this.setState({password})}
        secureTextEntry={true}
        value={this.state.password}
        keyboardType={'phone-pad'}
        returnKeyTyp="done"
      />

     </View>
    );
  }
}



AppRegistry.registerComponent('clase1', () => clase1);
