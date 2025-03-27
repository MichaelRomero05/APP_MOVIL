import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ToastAndroid } from 'react-native';
import { RoundedButton } from '../../componentes/RoundedButton';
import { CustomTextInput } from '../../componentes/CustomTextInput';
import useViewModel from './ViewModel';

export const RegisterScreen = () => {

  const {name, lastname, phone, email, password, confirmPassword, onChange, register} = useViewModel();
  
  return (
    <View style={styles.container}>
        <Image
          source={require('../../../../assets/chef.jpg')}
          style={styles.imageBackground}
        />
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../../assets/logo.png')}
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>FOOD APP</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.formText}>REGÍSTRATE</Text>
          <CustomTextInput 
            image = {require('../../../../assets/user.png')}
            placeholder = 'Nombres'
            keyboardType = 'default'
            property = 'name'
            onChangeText = { onChange }
            value = { name }
          />
          <CustomTextInput 
            image = {require('../../../../assets/my_user.png')}
            placeholder = 'Apellidos'
            keyboardType = 'default'
            property = 'lastname'
            onChangeText = { onChange }
            value = { lastname }
          />
          <CustomTextInput 
            image = {require('../../../../assets/email.png')}
            placeholder = 'Correo Electrónico'
            keyboardType = 'email-address'
            property = 'email'
            onChangeText = { onChange }
            value = { email }
          />
          <CustomTextInput 
            image = {require('../../../../assets/phone.png')}
            placeholder = 'Teléfono'
            keyboardType = 'numeric'
            property = 'phone'
            onChangeText = { onChange }
            value = { phone }
          />
          <CustomTextInput 
            image = {require('../../../../assets/password.png')}
            placeholder = 'Contraseña'
            keyboardType = 'default'
            property = 'password'
            onChangeText = { onChange }
            value = { password }
            secureTextEntry = { true }
          />          
          <CustomTextInput 
            image = {require('../../../../assets/confirm_password.png')}
            placeholder = 'Confirmar Contraseña'
            keyboardType = 'default'
            property = 'confirmPassword'
            onChangeText = { onChange }
            value = { confirmPassword }
            secureTextEntry = { true }
          />
          <View style={{ marginTop: 10 }}>
            <RoundedButton text='CONFIRMAR' onPress={ () => register() } />
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%',
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '5%',
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    height: '70%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 25,
  },
  formTextInput: {
    flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: '#AAAAAA',
      marginLeft: 15,
  },
  formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  formRegisterText: {
    fontStyle: 'italic',
    color: 'orange',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});