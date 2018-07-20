export default {
    uinfo() {
        return JSON.parse(localStorage.getItem('uinfo'));
    },
    login(item) {
        localStorage.setItem("uinfo", JSON.stringify(item));
    },
    logout(url) {
        localStorage.removeItem('uinfo');        
        location.href= url || '/';
    }
}