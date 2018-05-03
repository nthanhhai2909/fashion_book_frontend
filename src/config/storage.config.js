exports.setToken = (token) => {
    localStorage.setItem('token', token)
}
exports.removeToken = () => {
    localStorage.removeItem('token')
}
exports.getToken = () => {
    return localStorage.getItem('token')
}
exports.setEmail = (email) => {
    localStorage.setItem('email', email)
}
exports.removeEmail = () => {
    localStorage.removeItem('email')
}
exports.getEmail = () => {
    return localStorage.getItem('email')
}