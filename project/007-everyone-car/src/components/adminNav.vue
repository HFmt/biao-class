<style scoped>

</style>


<template>
    <div :style="{marginBottom: this.pushDown ? '15px' : '0'}" class="main-nav">
        <div class="container cf">
            <div class="fl">
                <router-link to="/" href="#" class="logo"></router-link>
                <router-link to="/admin/user" href="#" class="nav-item">管理员</router-link>
            </div>
            <div class="fr">
                <router-link to="login" href="#" class="login nav-item">登入</router-link>
                <span class="hotline">400-440-4440</span>
            </div>
        </div>
    </div>

</template>


<script>
    import "../css/nav.css";
    export default {
        props: {
            pushDown: {
                default: false
            },
            bgColor: {
                default: false
            }
        }
    }


</script>