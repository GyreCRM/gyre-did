export function isValidUser(user) {
    return user.address.length > 0;
}

export function isLoginUser(user) {
    return user.isLogin;
}
