<template>
    <div>
        <navCar/>
        <div class="test">
            <div class="header">
                <div class="container">
                    <div class="locate">
                        <div class="form-wrapper">
                            <h2 class="title">账号注册</h2>
                            <form action="">
                                <div>
                                    <label for="name">昵称</label>
                                    <input type="text" name="name" placeholder="不可更改">
                                </div>
                                <div>
                                    <label for="username">用户名</label> 
                                    <div class="error">
                                        <span>格式有误</span>
                                    </div>
                                    <input type="test" name="username" placeholder="不可有特殊符号">
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
                                <a class="login-or-signup" href="">登入</a>
                            </div> 
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

.header {
    /* background: #eee; */
}

.locate .form-wrapper {
    width: 40%;
    margin: 40px auto;
}

</style>


<script>
    import '../css/auth.css';
    import navCar from '../components/navCar.vue';

    export default {
      components: {
          navCar
      }
    }
</script>