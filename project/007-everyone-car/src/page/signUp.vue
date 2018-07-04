<style scoped>

    .header {

    }

    .locate .form-wrapper {
        width: 40%;
        margin: 40px auto;
    }

</style>



<template>
    <div>
        <GlobalNav/>
        <div class="test">
            <div class="header">
                <div class="container">
                    <div class="locate">
                        <div class="form-wrapper">
                            <h2 class="title">账号注册</h2>
                            <form action="">
                                <div>
                                    <label for="name">昵称</label>
                                    <input type="text" name="name" placeholder="不可更改" autocomplete="off">
                                </div>
                                <div>
                                    <label for="username">用户名</label>
                                    <div id="user-error">
                                    </div>
                                    <input
                                            v-validator="'username&required&minLength:4&maxLength:12'"
                                            error-el="#user-error"
                                            error-lang='zh'
                                            type="test" name="username" placeholder="不可有特殊符号" autocomplete="off">
                                </div>
                                <div>
                                    <label for="">密码</label>
                                    <input type="password" name="passward" placeholder="不少于4个字符">
                                </div>
                                <div>
                                    <label for="">确认密码</label>
                                    <input type="password" name="confirm-passward">
                                </div>
                                <button type="submit">提交</button>
                            </form>
                            <div class="text-right">
                                <span>已有账号？</span>
                                <router-link to="/login" class="login-or-signup" href="">登入</router-link>
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
    import GlobalNav from '../components/globalNav.vue';
    import '../directive/validator';


    export default {
        components: {
            GlobalNav
        }
    }
</script>