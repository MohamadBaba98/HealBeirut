import React from 'react';
import { View, Text, Button } from 'react-native';
import { login } from '../../api/mock';

const LoginScreen = ({navigation}) => {
    const loginUser = () => {
        login('dorimouawad@test.healbeirut', 'password')
            .then(() => {
                navigation.navigate('Home');
            })
            .catch((err) => console.log('error:', err.message));
    };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Login" onPress={loginUser} />
        <Button
            title="Forgot Password?"
            onPress={() => navigation.navigate('ForgotPassword')}
        />
        <Button
            title="Don't have an account? Create an Account"
            onPress={() => navigation.navigate('Signup')}
        />
    </View>
  );
}

export default LoginScreen;