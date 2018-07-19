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
                            <div class="row regtop">
                                <div class="top-wrpper">
                                    <div class="col-lg-12">
                                        <div class="top-way">
                                            <h3 :class="{'auth-active': typeBox == 'phone'}" @click="phoneboxShow()" class="">手机登入</h3>
                                            <h3 :class="{'auth-active': typeBox == 'mail'}" @click="emailboxShow()" class="">邮箱登入</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="loginFailed !=false" class="error-list">
                                <span class="error" id="phone-error">{{loginFailed}}</span>
                            </div>
                            <form @submit.prevent="submit()" action="">
                                <div v-if="typeBox=='phone'">
                                    <div>
                                        <label for="name">手机号码</label>
                                        <input type="text" name="name" placeholder="必填项" autocomplete="off" v-model="current.$unique">
                                    </div>
                                    <div class="verification">
                                        <input type="text" name="name" placeholder="输入手机验证码" autocomplete="off">
                                        <button :disabled="phoneTimer" @click="getPhoneCode('phone');" type="button">
                                            <span v-if="count.phone">{{count.phone}}S重新获取</span>
                                            <span v-else>获取验证码</span>
                                        </button>
                                    </div>
                                </div>
                                <div v-if="typeBox=='mail'">
                                    <div>
                                        <label for="name">邮箱账号</label>
                                        <input type="text" name="name" placeholder="必填项" autocomplete="off">
                                    </div>
                                    <div class="verification">
                                        <input type="text" name="name" placeholder="输入手机验证码" autocomplete="off">
                                        <button :disabled="emailTimer" @click="getEmailCode('mail')" type="button">
                                            <span v-if="count.mail">{{count.mail}}</span>
                                            <span v-else>获取验证码</span>
                                        </button>
                                    </div>
                                </div>
                                <input type="password" name="password" placeholder="密码" v-model="current.password">
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
import "../directive/test";
import "../css/auth.css";
import "../directive/validator";
import api from "../lib/api";
import session from "../lib/session";
import VehicleGetCode from "../mixins/vehicleGetCode";
import GlobalNav from "../components/globalNav.vue";

export default {
    components: {
        GlobalNav
    },
    data() {
        return {
            loginFailed: ''
        };
    },
    methods: {
        submit() {
            let unique, password;
            if (
                !(unique = this.current.$unique) ||
                !(password = this.current.password)
            ) {
                this.loginFailed = '账号和密码不能为空';
                return;
            }

            api("user/read", {
                where: {
                    or: [
                        ["username", "=", unique],
                    ]
                }
            }).then(res => {
                let item;
                if (!(item = res.data[0]) || item.password !== password) {
                    this.loginFailed = '账号或密码错误';
                    return;
                }

                this.loginFailed = false;
                delete item.password;

                session.login(item);
                this.$router.push("/");
            });
        }
    },
    mixins: [VehicleGetCode]
};
</script>