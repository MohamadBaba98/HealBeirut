import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { createAccount } from '../../api/mock';

const SignupScreen = ({navigation}) => {
  const signupUser = () => {
    createAccount(username, password, confirmPassword)
    .then(() => {
      navigation.navigate('Home');
    })
    .catch((err) => console.log('error:', err.message));
  }

  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
      <TextInput
        style={styles.input}
        onChangeText={(confirmPassword) => onChangeConfirmPassword(confirmPassword)}
        value={confirmPassword}
        placeholder="Confirm Password"
        textContentType="password"
        secureTextEntry={true}
      />
      <Button title="Create Account" onPress={signupUser} />
      <Button
          title="Back"
          onPress={() => navigation.navigate('Login')}
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

export default SignupScreen;