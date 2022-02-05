import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { onChange } from 'react-native-reanimated';
import { login } from '../../api/mock';

const LoginScreen = ({navigation}) => {
    const loginUser = () => {
        login('dorimouawad@test.healbeirut', 'password')
            .then(() => {
                navigation.navigate('Home');
            })
            .catch((err) => console.log('error:', err.message));
    };

    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("");

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>healremote</Text>
        <Text>Login</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeUsername}
            value={username}
            placeholder="Username"
            keyboardType="default"
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            textContentType="password"
            secureTextEntry={true}
        />
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

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default LoginScreen;