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
                                <input v-validator="'required&minLength:3&maxLength:13'" type="text" name="username"
                                       placeholder="用户名" autocomplete="off">
                                <div class="error">
                                    <span v-validator="'required&minLength:4&maxLength:8'">密码错误</span>
                                </div>
                                <input type="password" name="password" placeholder="密码">
                                <button type="submit">确认</button>
                            </form>
                            <div class="">
                                <span>还没有账号？</span>
                                <a class="login-or-signup" href="">注册</a>
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