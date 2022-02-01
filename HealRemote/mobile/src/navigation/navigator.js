import { createAppContainer } from "react-navigation";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/authentication/login';

const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    Signup: {
        screen: LoginScreen
    },
    ForgotPassword: {
        screen: LoginScreen
    },
    Confirmation: {
        screen: LoginScreen
    }
}, {
    initialRouteName: 'Login', 
});

export default createAppContainer(AppNavigator);
  