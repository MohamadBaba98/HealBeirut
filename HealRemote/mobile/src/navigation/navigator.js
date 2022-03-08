import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '@screens/authentication/login';
import SignupScreen from '@screens/authentication/signup';
import AboutScreen from '@screens/authentication/about';
import ForgotPaswordScreen from '@screens/authentication/forgot_password';
import ConfirmationScreen from '@screens/authentication/confirmation';
import HomeScreen from '@screens/home/home';

const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    Signup: {
        screen: SignupScreen
    },
    ForgotPassword: {
        screen: ForgotPaswordScreen
    },
    Confirmation: {
        screen: ConfirmationScreen
    },
    About: {
        screen: AboutScreen
    },
    Home: {
        screen: HomeScreen
    }
}, {
    initialRouteName: 'Login', 
});

export default createAppContainer(AppNavigator);
  