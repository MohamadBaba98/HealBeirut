import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { signIn } from '@api/auth';
import { login } from '@api/mock';
import { colors } from '@themes/colors';

const LoginScreen = ({navigation}) => {
    const loginUser = () => {
        // login(username, password)
        //     .then(() => {
        //         navigation.navigate('Home');
        //     })
        //     .catch((err) => console.log('error:', err.message));

        signIn(username, password)
            .then((user) => {
                navigation.navigate('Home');
                console.log(user);
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
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
        />
        <TextInput
            style={styles.input}
            onChangeText={(password) => onChangePassword(password)}
            value={password}
            placeholder="Password"
            textContentType="password"
            secureTextEntry={true}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
        />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={() => loginUser()}>
            <Text style={styles.loginButtonTextColor}>CONTINUE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupButtonWhiteTextColor}>Don't have an account? <Text style={styles.signupButtonRedTextColor}>Create an Account</Text></Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: colors.hbBlue,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        width: "80%",
        color: colors.hbBlue,
    },
    forgotPasswordButtonText: {
        color: colors.hbRed,
    },
    loginButton: {
        width: "90%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: colors.hbDarkGrey,
    },
    loginButtonTextColor: {
        color: 'white',
    },
    signupButtonWhiteTextColor: {
        color: 'white',
    },
    signupButtonRedTextColor: {
        color: colors.hbRed,
    },
    signupButton: {
        marginTop: 40,
    },
});

export default LoginScreen;