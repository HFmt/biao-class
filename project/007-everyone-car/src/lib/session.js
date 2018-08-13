export default {
    uinfo() {
        return JSON.parse(localStorage.getItem('uinfo_car'));
    },
    login(item) {
        localStorage.setItem("uinfo_car", JSON.stringify(item));
    },
    logout(url) {
        localStorage.removeItem('uinfo_car');
        location.href = url || '/';
    },

    loginedIn() {
        return !!this.hisId();
    },

    hisId() {
        let info = this.uinfo();
        return info && this.uinfo().id;
    }
}