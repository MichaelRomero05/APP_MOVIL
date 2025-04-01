import React, { useState } from 'react';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';

const RegisterViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
      name: '',
      lastname: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
    const onChange = (property: string, value: any) => {
      setValues({ ...values, [property]: value });
    }
    const register = async () => {
        if (!isValidForm()) {
          const response = await RegisterAuthUseCase(values);
          console.log('Result: ' + JSON.stringify(response));          
        }
    }
    const isValidForm = (): boolean => {
      if (values.name === '') {
        setErrorMessage('El nombre es requerido');
        return false;
      }
      if (values.lastname === '') {
        setErrorMessage('El Apellido es requerido');
        return false;
      }
      if (values.email === '') {
        setErrorMessage('El Correo es requerido');
        return false;
      }
      if (values.phone === '') {
        setErrorMessage('El Teléfono es requerido');
        return false;
      }
      if (values.password === '') {
        setErrorMessage('La contraseña es requerida');
        return false;
      }
      if (values.confirmPassword === '') {
        setErrorMessage('La confirmación de contraseña es requerida');
        return false;
      }
      if (values.password === values.confirmPassword) {        
        return false;
      }
      else {
        setErrorMessage('La contraseñas no coinciden');
        return true;
      }
    };
    return {
      ...values,
      onChange,
      register,
      errorMessage
    };
}

export default RegisterViewModel;