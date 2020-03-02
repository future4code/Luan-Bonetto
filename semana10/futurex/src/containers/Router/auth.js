export const isAuthenticated = () =>  {
    if (localStorage.getItem('success')) {
        return true
    } else {
        return false
    }
}