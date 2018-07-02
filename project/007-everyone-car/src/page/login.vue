<template>
    <div>
        <navCar/>
        <div>
            <div class="header">
                <div class="container">
                    <div class="row locate">
                        <div class="col-lg-8"></div>
                        <div class="col-lg-4 form-wrapper">
                            <form action="">
                            <h2>登入</h2>
                            <input type="text" name="username" placeholder="用户名">
                            <div class="error">
                                <span>密码错误</span>
                            </div>
                            <input type="text" name="passward" placeholder="密码">
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


<style scoped>

.header {
    height: 640px;
    /* background: #eee; */
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