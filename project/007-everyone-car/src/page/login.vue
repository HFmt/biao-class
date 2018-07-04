<style scoped>

    .header {
        height: 640px;
    }


</style>


<template>
    <div>
        <GlobalNav/>
        <div>
            <div class="header">
                <div class="container">
                    <div class="row locate">
                        <div class="col-lg-8"></div>
                        <div class="col-lg-4 form-wrapper">
                            <form action="">
                                <h2>登入</h2>
                                <div id="user-error">
                                </div>
                                <input
                                        v-validator="'username&required&minLength:4&maxLength:12'"
                                        error-el="#user-error"
                                        error-lang='zh'
                                        type="text" name="username"
                                        placeholder="用户名" autocomplete="off">

                                <input type="password" name="password" placeholder="密码">
                                <button type="submit">确认</button>
                            </form>
                            <div class="">
                                <span>还没有账号？</span>
                                <router-link to="signUp" class="login-or-signup" href="">注册</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import '../css/auth.css';
    import '../directive/validator';
    /* background: #eee; */
    import GlobalNav from '../components/globalNav.vue';

    export default {
        components: {
            GlobalNav
        },
        data() {
            return {}
        }
    }
</script>