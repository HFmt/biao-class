<style scoped>
</style>


<template>
    <div :style="{marginBottom: this.pushDown ? '15px' : '0'}" class="main-nav">
        <div class="container cf">
            <div class="content fl">
                <router-link to="/" href="#" class="logo"></router-link>
                <router-link to="/searchResult" href="#" class="nav-item">搜车</router-link>
                <router-link to="/admin/user" href="#" class="nav-item">管理员</router-link>
            </div>
            <div class="fr">
                <span v-if="uinfo">
                    <router-link to="/" class="login nav-item">{{uinfo.username || uinfo.phone}}</router-link>
                    <a @click="logout()" href=":;" class="login nav-item">登出</a>
                    <router-link to="/publish" href="#" class="login nav-item">发布二手车</router-link>
                </span>
                <span v-else>
                    <router-link to="/login" href="#" class="login nav-item">登入</router-link>
                    <router-link to="/signUp" href="#" class="login nav-item">注册</router-link>
                </span>
            </div>
        </div>
    </div>

</template>


<script>
import "../css/nav.css";
import session from "../lib/session";

export default {
    props: {
        pushDown: {
            default: false
        },
        bgColor: {
            default: false
        }
    },
    data() {
        return {
            uinfo: session.uinfo()
        };
    },
    mounted() {
        session.uinfo()
    },
    methods: {
        logout: session.logout
    }
};
</script>