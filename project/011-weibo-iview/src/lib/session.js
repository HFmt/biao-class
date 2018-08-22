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

    signOut() {
        localStorage.removeItem('uinfo_weibo');
    },

    isAdmin() {
        let info = this.uinfo();
        return info && this.uinfo().isAdmin;
    },

    signIned() {
        return !!this.hisId();
    },

    hisId() {
        let info = this.uinfo();
        return info && this.uinfo().id;
    }
}