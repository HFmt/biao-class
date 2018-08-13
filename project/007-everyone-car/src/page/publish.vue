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
                            <div class="regtop">
                                <h2 class="text-center">发布二手车</h2>
                            </div>
                            <form @submit.prevent="submit()">
                                <div>
                                    <label for="brand">品牌</label>
                                    <DropDown :api="'brand.name'" :list="selectList.brand" onSelect="setBrandId" defaultSelect="品牌"/>
                                </div>
                                <div>
                                    <label for="model">车型</label>
                                    <DropDown :api="'model.name'" :list="selectList.model" onSelect="setBrandId" defaultSelect="车型"/>
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
                                <button type="submit">确认发布</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>




<script>
import "../css/auth.css";
import "../directive/validator";
import api from "../lib/api";
import DropDown from "../components/dropDown"
import VehicleGetCode from "../mixins/vehicleGetCode";
import ReaderAll from "../mixins/readerAll";
import GlobalNav from "../components/globalNav";
import Footer from "../components/footer"


export default {
    components: {
        GlobalNav,
        DropDown,
        Footer
    },
    mixins: [VehicleGetCode, ReaderAll],
    mounted() {
        this.readAll('brand');
        this.readAll('model');
    },
    data() {
        return {
            current: {},
            selectList: {},
        };
    },
    methods: {
        setBrandId(item) {
            this.$set(this.current, "brand_id", item.id);
        },
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
};
</script>