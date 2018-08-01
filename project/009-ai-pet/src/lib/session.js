import api from './api';


export default {
    uinfo() {
        return JSON.parse(localStorage.getItem('uinfo'));
        
    },

    signIn(item) {
        this.replaceUnifo(item);
        // location.href = url || '/';
    },

    replaceUnifo(item) {
        delete item.password;
        localStorage.setItem('uinfo', JSON.stringify(item));
        this.uinfo();
    },

    signOut(url) {
        localStorage.removeItem('uinfo');
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