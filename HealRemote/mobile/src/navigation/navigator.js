import HomeScreen from './';
import AboutScreen from './components/AboutScreen';
import { createStackNavigator, createAppContainer } from "react-navigation";


const AppNavigator = createStackNavigator({
    Login: {
        screen: HomeScreen
    },
    Signup: {
        screen: AboutScreen
    },
    About: {
        screen: AboutScreen
    },
    ForgotPassword: {
        screen: ForgotPassword
    },
    Confirmation: {
        screen: ConfirmationScreen
    }
});
  