<style scoped>

    .main-nav {
        margin-top: 15px;
    }

    .logo {
        vertical-align: top;
        height: 62px;
        width: 150px;
        background: #eee;
    }

    .main-nav .nav-item,
    .hotline {
        padding: 20px;
        font-size: 1.4rem;
    }

    .main-nav .nav-item:hover {
        background: #f5f5f5;
    }
</style>


<template>
    <div :style="{marginBottom: this.pushDown ? '15px' : '0'}" class="main-nav">
        <div class="container cf">
            <div class="fl">
                <router-link to="/" href="#" class="logo"></router-link>
                <a href="#" class="nav-item">西安</a>
                <router-link to="/searchResult" href="#" class="nav-item">搜车</router-link>
                <a href="#" class="nav-item">卖车</a>
                <a href="#" class="nav-item">分期购车</a>
                <a href="#" class="nav-item">论坛</a>
                <router-link to="/admin/user" href="#" class="nav-item">管理员</router-link>
            </div>
            <div class="fr">
                <router-link to="/login" href="#" class="login nav-item">登入</router-link>
                <router-link to="/signUp" href="#" class="login nav-item">注册</router-link>
                <span class="hotline">400-440-4440</span>
            </div>
        </div>
    </div>

</template>


<script>

    export default {
        props: {
            pushDown: {
                default: false
            },
            bgColor: {
                default: false
            }
        },
    }


</script>