// Primary MockSuccess function for testing
const mockSuccess = (value) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), 2000);
    });
};

// Primary MockFailure function for testing
const mockFailure = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(value), 2000);
    });
};

// Mock Login functionality
export const login = (email, password, shouldSucceed = true) => {
    console.log(email, password);

    if (!shouldSucceed) {
        return mockFailure({ error: 500, message: 'Something went wrong!' });
    }

    return mockSuccess({ auth_token: 'successful_fake_token' });
};

// Mock Signup functionality
export const createAccount = (email, password, shouldSucceed = true) => {
    console.log(email, password);

    if (!shouldSucceed) {
        return mockFailure({ error: 500, message: 'Something went wrong!' });
    }

    return mockSuccess({ auth_token: 'successful_fake_token' });
};