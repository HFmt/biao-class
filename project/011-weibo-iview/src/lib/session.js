import api from './api';


export default {
    uinfo() {
        return JSON.parse(localStorage.getItem('uinfo_weibo'));
        
    },

    signIn(item) {
        this.replaceUnifo(item);
    },

    replaceUnifo(item) {
        delete item.password;
        localStorage.setItem('uinfo_weibo', JSON.stringify(item));
        this.uinfo();
    },

    signOut(url) {
        localStorage.removeItem('uinfo_weibo');
        location.href = url || '/';
    },

    isAdmin() {
        let info = this.uinfo();
        return info && this.uinfo().isAdmin;
    },

    signUped() {
        return !!this.hisId();
    },

    hisId() {
        let info = this.uinfo();
        return info && this.uinfo().id;
    }
}