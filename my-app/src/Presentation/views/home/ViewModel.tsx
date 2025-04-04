import React, { useEffect, useState } from 'react';
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';
import { SaveUserUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal';
import { GetUserLocalUseCase } from '../../../Domain/useCases/userLocal/GetUserLocal';

const HomeViewModel = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    getUserSession();
  }, []);

  const getUserSession = async () => {
    const user = await GetUserLocalUseCase();
    console.log('Sesión de Usuario: ' + JSON.stringify(user));
  };

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const login = async () => {
    if (isValidForm()) {
      const response = await LoginAuthUseCase(values.email, values.password);
      console.log('Respuesta: ' + JSON.stringify(response));
      if (!response.success) {
        setErrorMessage(response.message);
      } else {
        SaveUserUseCase(response.data);
      }
    }
  };

  const isValidForm = () => {
    if (values.email === '') {
      setErrorMessage('El email es requerido');
      return false;
    }
    if (values.password === '') {
      setErrorMessage('La contraseña es requerido');
      return false;
    }
    return true;
  };

  return {
    ...values,
    onChange,
    login,
    errorMessage
  }
}

export default HomeViewModel;