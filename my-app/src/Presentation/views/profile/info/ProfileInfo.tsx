import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackParamList } from '../../../../../App';

interface Props extends StackScreenProps<RootStackParamList, 'ProfileInfoScreen'> { };

export const ProfileInfoScreen = ({ navigation, route }: Props) => {
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                onPress={() => {                    
                    navigation.navigate('HomeScreen');
                }}
                title="Cerrar Sesion"
            />
        </View>
    )
}