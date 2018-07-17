<style scoped>
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
                            <div class="row regtop">
                                <div class="top-wrpper">
                                    <div class="col-lg-8">
                                        <div class="top-way">
                                            <h3 :class="{'auth-active': typeBox == 'phone'}" @click="phoneboxShow()">手机注册</h3>
                                            <h3 :class="{'auth-active': typeBox == 'mail'}" @click="emailboxShow()">邮箱注册</h3>
                                        </div>
                                    </div>
                                    <div class=" col-lg-4">
                                        <div class="text-right">
                                            <span>已有账号？</span>
                                            <router-link to="/login" class="login-or-signup" href="">登入</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form @submit.prevent="submit()">
                                <div>
                                    <label for="name">用户名</label>
                                    <input type="text" name="name" placeholder="" autocomplete="off" v-model="current.username">
                                </div>
                                <div v-if="typeBox=='phone'">
                                    <div>
                                        <label for="phone">手机号码</label>
                                        <div class="error-list">
                                            <span id="phone-error"></span>
                                        </div>
                                        <input v-validator="'required&numeric'" id="phone" error-el="#phone-error" type="text" name="name" placeholder="必填项" autocomplete="off" v-model="current.phone">
                                    </div>
                                    <div class="verification">
                                        <input type="text" name="name" placeholder="输入手机验证码" autocomplete="off" v-model="current.phoneCode">
                                        <button :disabled="phoneTimer" @click="getPhoneCode();" type="button">
                                            <span v-if="count.phone">{{count.phone}}S重新获取</span>
                                            <span v-else>获取验证码</span>
                                        </button>
                                    </div>
                                </div>
                                <div v-if="typeBox=='mail'">
                                    <div>
                                        <label for="mail">邮箱账号</label>
                                        <div class="error-list">
                                            <span id="mail-error"></span>
                                        </div>
                                        <input v-validator="'required&numeric'" error-el="#mail-error" type="text" name="name" placeholder="必填项" autocomplete="off" v-model="current.mail">
                                    </div>
                                    <div class="verification">
                                        <input type="text" name="name" placeholder="输入手机验证码" autocomplete="off" v-model="current.emailCode">
                                        <button :disabled="emailTimer" @click="getEmailCode();" type="button">
                                            <span v-if="count.mail">{{count.mail}}S重新获取</span>
                                            <span v-else>获取验证码</span>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label for="">密码</label>
                                    <input type="password" name="password" placeholder="不少于4个字符" v-model="current.password">
                                </div>
                                <div>
                                    <label for="">确认密码</label>
                                    <input type="password" name="confirm-password" v-model="current.confirmPassward">
                                </div>
                                <button type="submit">注册</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>




<script>
import "../css/auth.css";
import "../directive/validator";
import api from "../lib/api";
import VehicleGetCode from "../mixins/vehicleGetCode";
import GlobalNav from "../components/globalNav.vue";

export default {
    components: {
        GlobalNav
    },
    data() {
        return {};
    },
    methods: {
        submit() {
            if (this.current.phoneCode !== this.phoneCode) {
                return;
            }

            if (this.typeBox == "phone") {
                delete this.current.mail;
            } else {
                delete this.current.phone;
            }

            !this.current.username &&
                this.$set(this.current, "username", this.current[this.typeBox]);

            api("user/create", this.current).then(res => {
                alert("注册成功");
                this.$router.push("/");
            });
        }
    },
    mixins: [VehicleGetCode]
};
</script>