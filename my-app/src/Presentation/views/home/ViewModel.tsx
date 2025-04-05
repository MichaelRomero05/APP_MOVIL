import React, { useEffect, useState } from 'react';
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';
import { SaveUserUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal';
import { GetUserLocalUseCase } from '../../../Domain/useCases/userLocal/GetUserLocal';
import { useUserLocal } from '../../hooks/useUserLocal';

const HomeViewModel = () => {

  const [errorMessage, setErrorMessage] = useState('');

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const { user, getUserSession } = useUserLocal();
  console.log('Usuario: ' + JSON.stringify(user));

  useEffect(() => {
    getUserSession();
  }, []);

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const login = async () => {
    if (isValidForm()) {
      const response = await LoginAuthUseCase(values.email, values.password);
      if (!response.success) {
        setErrorMessage(response.message);
      } else {
        await SaveUserUseCase(response.data);
        const updatedUser = await getUserSession(); // Asegúrate de que retorne el usuario actualizado
        console.log('Usuario actualizado:', updatedUser); // Verifica aquí
      }
    }
  };


  // const login = async () => {
  //   if (isValidForm()) {
  //     const response = await LoginAuthUseCase(values.email, values.password);
  //     console.log('Respuesta: ' + JSON.stringify(response));
  //     if (!response.success) {
  //       setErrorMessage(response.message);
  //     } else {
  //       await SaveUserUseCase(response.data);
  //       getUserSession();
  //     }
  //   }
  // };

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
    user,
    onChange,
    login,
    errorMessage
  }
}

export default HomeViewModel;