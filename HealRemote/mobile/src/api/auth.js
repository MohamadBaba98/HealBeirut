import { Auth } from 'aws-amplify';

/* Signup:
    Makes call via cognito API to signup a user with the following attributes:
    Email, Password, FullName, and Role
*/
async function signUp(email, password, fullName, role) {
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
async function signIn(username, password) {
    try {
        const user = await Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}

/* Confirm Sign Up:
    Makes call via cognito API to confirm the users account with a verification code
*/
async function confirmSignUp(email, code) {
    try {
        await Auth.confirmSignUp(email, code);
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}

/* Forgot Password:
    Makes call via cognito API to request for a password reset
*/
async function forgotPassword(email) {
    try {
        await Auth.forgotPassword(email)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    } catch (error) {
        console.log('error on forgot password', error)
    }
}

/* Forgot Password Submit:
    Makes call via cognito API to request for a password reset
*/
async function forgotPasswordSubmit(email, code, newPassword) {
    try {
        await Auth.forgotPasswordSubmit(email, code, newPassword)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    } catch (error) {
        console.log('error on forgot password submit', error)
    }
}

/* Change Password:
    Makes call via cognito API to change user password
*/
async function changePassword(email, oldPassword, newPassword) {
    try {
        await Auth.currentAuthenticatedUser()
        .then(user => {
            return Auth.changePassword(email, oldPassword, newPassword);
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
    } catch (error) {
        console.log('error on changing password', error)
    }

}

/* Re-send Confirmation Code:
    Makes call via cognito API to resend a confirmation code in case
    a users code expires during the signup process
*/
async function resendConfirmationCode(email) {
    try {
        await Auth.resendSignUp(email);
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