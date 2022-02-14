import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createAccount } from '@api/mock';
import { colors } from '@themes/colors';

const SignupScreen = ({navigation}) => {
  const signupUser = () => {
    createAccount(fullName, email, username, password, confirmPassword, role)
    .then(() => {
      navigation.navigate('Home');
    })
    .catch((err) => console.log('error:', err.message));
  }

  const termsAndConditions = () => {
    navigation.navigate('About');
  }

  const [fullName, onChangeFullName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");
  const [role, onChangeRole] = React.useState("");

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.createAnAccountText}>Create an Account</Text>
      <TextInput
        style={styles.input}
        onChangeText={(fullName) => onChangeFullName(fullName)}
        value={fullName}
        placeholder="Full Name"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={(email) => onChangeEmail(email)}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize={false}
        autoComplete={false}
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        onChangeText={(username) => onChangeUsername(username)}
        value={username}
        placeholder="Username"
        keyboardType="default"
        autoCapitalize={false}
        autoComplete={false}
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        onChangeText={(password) => onChangePassword(password)}
        value={password}
        placeholder="Password"
        textContentType="password"
        secureTextEntry={true}
        autoCapitalize={false}
        autoComplete={false}
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        onChangeText={(confirmPassword) => onChangeConfirmPassword(confirmPassword)}
        value={confirmPassword}
        placeholder="Confirm Password"
        textContentType="password"
        secureTextEntry={true}
        autoCapitalize={false}
        autoComplete={false}
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        onChangeText={(role) => onChangeRole(role)}
        value={role}
        placeholder="Role"
        keyboardType="default"
      />
      <TouchableOpacity onPress={() => termsAndConditions()}>
        { /* TODO: We need to update this to point to our Terms and Conditions page  */}
        <Text>By creating an account, you agree to our 
          <Text style={styles.termsAndConditionsButton}> Terms and Conditions</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton} onPress={() => signupUser()}>
        <Text style={styles.signupButtonTextColor}>CONTINUE</Text>
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
  createAnAccountText: {
    color: 'white',
    fontWeight: 'bold',
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
  signupButton: {
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: colors.hbDarkGrey,
  },
  signupButtonTextColor: {
    color: 'white',
  },
  termsAndConditionsButton: {
    color: colors.hbRed,
  },
});

export default SignupScreen;