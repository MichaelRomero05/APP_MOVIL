import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const RoundedButton = () => {
    return (
        <TouchableOpacity
            style={styles.RoundedButton}
            onPress={() => { }}
        >
            <Text style={styles.textButton} >ENTRAR</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    RoundedButton: {
        width: '100%',
        height: 50,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    textButton: {
        color: 'white',
    }
});