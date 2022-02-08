import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { login } from '@api/mock';
import { colors } from '@themes/colors';

const LoginScreen = ({navigation}) => {
    console.log(colors);
    const loginUser = () => {
        login(username, password)
            .then(() => {
                navigation.navigate('Home');
            })
            .catch((err) => console.log('error:', err.message));
    };

    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("");

  return (
    <View style={styles.viewContainer}>
        <Text>healremote</Text>
        <TextInput
            style={styles.input}
            onChangeText={(username) => onChangeUsername(username)}
            value={username}
            placeholder="Username"
            keyboardType="default"
        />
        <TextInput
            style={styles.input}
            onChangeText={(password) => onChangePassword(password)}
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
    viewContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
       //  backgroundColor: colors.hbBlue,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default LoginScreen;