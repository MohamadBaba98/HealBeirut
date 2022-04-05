import { Auth } from 'aws-amplify';

/* Signup:
    Makes call via cognito API to signup a user with the following attributes:
    Email, Password, FullName, and Role
*/
async function signUp() {
    try {
        const { user } = await Auth.signUp({
            email,
            password,
            attributes: {
                fullName,
                role,
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

/* SignIn:
    Makes call via cognito API to signin a user with their email and password
*/
async function signIn() {

}

/* Confirm Sign Up:
    Makes call via cognito API to confirm the users account with a verification code
*/
async function confirmSignUp() {

}

/* Forgot Password:
    Makes call via cognito API to request for a password reset
*/
async function forgotPassword() {

}

/* Re-send Confirmation Code:
    Makes call via cognito API to resend a confirmation code in case
    a users code expires during the signup process
*/
async function resendConfirmationCode() {
    try {
        await Auth.resendSignUp(username);
        console.log('code resent successfully');
    } catch (err) {
        console.log('error resending code: ', err);
    }
}

/* Sign Out:
    Makes call via cognito API to sign out a user
*/
async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}