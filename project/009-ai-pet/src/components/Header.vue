<style scoped>
/* 头部综合区域 */

.bot {
    margin: 25px 0;
}

.logo,
.search,
.sgin {
    vertical-align: middle;
}

.search form {
    border: 1px solid #eee;
}

.search input,
.search button,
.select-wrap {
    border: 0;
    padding: 14px;
    font-size: 1.2rem;
}

.search input,
.select-wrap {
    border-right: 1px solid #eee;
}

.search button {
    color: #fff;
    background: #fda30e;
}

.bot .sgin li {
    padding-left: 25px;
}

.bot .sgin a {
    font-size: 1.6rem;
    padding: 1px;
    display: block;
    color: #fda30e;
}

/* 导航栏 */

.nav {
    background: #000;
}

.nav > *,
.nav a {
    color: #fff;
}

.nav li a {
    padding: 26px 20px;
    margin: 0 10px;
    display: block;
    position: relative;
}

.nav li a::before {
    content: "";
    position: absolute;
    width: 100%;
    background: #fda30e;
    height: 4px;
    bottom: 0px;
    left: 0;
    transform: scale3d(0, 1, 1);
    transform-origin: center left;
    transition: transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
    transition-delay: 0.4s;
}

.nav li a:hover::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 0;
    left: 0;
    transform: scale3d(1, 1, 1);
    transform-origin: center left;
    transition: transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.menu-link a::after {
    content: "";
    position: absolute;
    background: #fda30e;
    height: 4px;
    bottom: 0px;
    left: 0;
    width: 100%;
    transform: scale3d(1, 1, 1);
    transition-delay: 0s;
}
.nav-cart {
    text-align: center;
    background: #fda30e;
}

.nav-cart p {
    padding: 8.38px;
}

.nav-cart a {
    font-size: 1rem;
    padding: 4px;
}

.modal-wrap .modal-content {
    width: 24%;
    top: 10%;
    left: 38%;
}

.signIn-link,
.signUp-link {
    color: #f44336;
}

.signIn-link:hover,
.signUp-link:hover {
    color: #fda30e;
}

.login button {
    color: #fff;
    background: #7b7b7b;
    transition: 0.5s all;
}

.login button:hover {
    background: #fda30e;
}

.login input:hover,
.login input:focus {
    border: 1px solid #fda30e;
}
</style>

<template>
    <div class="header">
        <div class="bot">
            <div class="container row">
                <div class="col-lg-3 logo tac">
                    <h2>我是LOGO啊</h2>
                </div>
                <div class="col-lg-6 search">
                    <form class="row">
                        <input class="col-lg-6" type="search">
                        <div class="col-lg-4 select-wrap">
                            <span>Select</span>
                        </div>
                        <button class="col-lg-2" type="submit">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>
                <div class="col-lg-3 sgin">
                    <ul v-if="uinfo">
                        <li>
                            <a href="#">{{uinfo && uinfo.username || uinfo.phone || uinfo.mail}}</a>
                        </li>
                        <li>
                            <router-link to="/setting" href="#">
                                <i class="fa fa-cog" aria-hidden="true"></i>
                            </router-link>
                        </li>
                        <li>
                            <a @click="signOut()" href="#">
                                <i class="fa fa-sign-out" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                    <ul v-else>
                        <li>
                            <a @click="showSginIn()" @keyup.esc="hiddenModal()" href="#">
                                <i class="fa fa-user-circle" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a @click="showSginUp()" @keyup.esc="hiddenModal()" href="#">
                                <i class="fa fa-user-plus" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="nav">
            <div class="container row">
                <div class="nav-left col-lg-9">
                    <ul class="navbar">
                        <li @click="defName = defName" :class="{'menu-link': defName == 'home'}">
                            <router-link class="hb" to="/" href="#">首页</router-link>
                        </li>
                        <li @click="defName = defName" :class="{'menu-link': defName == 'searchCat'}">
                            <router-link to="/search/cat" href="#">喵星人专区</router-link>
                        </li>
                        <li @click="defName = defName" :class="{'menu-link': defName == 'searchDog'}">
                            <router-link to="/search/dog" href="#">汪星人专区</router-link>
                        </li>
                        <li @click="defName = defName" :class="{'menu-link': defName == 'order'}">
                            <router-link to="/userOrder" href="#">我的订单</router-link>
                        </li>
                        <li @click="defName = defName" :class="{'menu-link': defName == 'setting'}">
                            <router-link to="/setting" href="#">设置</router-link>
                        </li>
                        <li @click="defName = defName" :class="{'menu-link': defName == 'admin'}">
                            <router-link to="/admin/user" href="#">管理页</router-link>
                        </li>
                    </ul>
                </div>
                <div class="nav-right col-lg-3">
                    <div class="nav-cart">
                        <p>
                            <router-link to="/cart" href="#">
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                <span>￥0.00</span>
                            </router-link>
                        </p>
                        <p>
                            <span class="cp">清空购物车</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="modalList.modal" @click.self="hiddenModal()" class="modal-wrap">
            <div class="modal-content">
                <div class="modal-header tar">
                    <span @click="hiddenModal()" class="cancel cp">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </span>
                </div>
                <div v-if="modalList.signIn" class="modal-body login">
                    <div class="title tac">
                        <h2>用户登入</h2>
                    </div>
                    <form @submit.prevent="submitSginIn()" action="">
                        <div class="input-group">
                            <label for="">用户名：</label>
                            <input type="text" class="col-lg-12" v-model="current.$unique">
                        </div>
                        <div class="input-group">
                            <label for="">密码：</label>
                            <input type="password" class="col-lg-12" v-model="current.password">
                        </div>
                        <div class="btn-group">
                            <button type="submit" class="col-lg-12">登入</button>
                            <button @click="hiddenModal()" type="button" class="col-lg-12">取消</button>
                        </div>
                    </form>
                    <p>还没有账号？
                        <span @click="showSginUp()" class="signUp-link cp">注册</span>
                    </p>
                </div>
                <div v-if="modalList.signUp" class="modal-body login">
                    <div class="title tac">
                        <h2>用户注册</h2>
                    </div>
                    <form @submit.prevent="submitSginUp()" action="">
                        <div class="input-group">
                            <label for="">用户名：</label>
                            <input type="text" class="col-lg-12" v-model="current.username">
                        </div>
                        <div class="input-group">
                            <label for="">手机号</label>
                            <input type="text" class="col-lg-12" v-model="current.phone">
                        </div>
                        <div class="input-group">
                            <input type="text" name="name" placeholder="输入手机验证码" autocomplete="off" class="col-lg-7" v-model="current.phoneCode">
                            <button :disabled="phoneTimer" @click="getPhoneCode();" class="col-lg-5" type="button">
                                <span v-if="count.phone">{{count.phone}}秒后重新获取</span>
                                <span v-else>获取验证码</span>
                            </button>
                        </div>
                        <div class="input-group">
                            <label for="">密码：</label>
                            <input type="password" class="col-lg-12" v-model="current.password">
                        </div>
                        <div class="input-group">
                            <label for="">确认密码：</label>
                            <input type="password" class="col-lg-12" v-model="current.confirmPassward">
                        </div>
                        <div class="btn-group">
                            <button type="submit" class="col-lg-12">注册</button>
                            <button @click="hiddenModal()" type="button" class="col-lg-12">取消</button>
                        </div>
                    </form>
                    <p>已有账号？
                        <span @click="showSginIn()" class="signIn-link cp">登入</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "../lib/api";
import GetCode from "../mixsin/GetCode";
import session from "../lib/session";
import signInRoot from "../hub/signInRoot";
export default {
    props: {
        defName: {
            default: "home"
        }
    },
    created() {},
    mixins: [GetCode],
    data() {
        return {
            modalList: signInRoot.modalList(),
            uinfo: session.uinfo(),

            // 登入验证的错误信息
            signFailed: ""
        };
    },
    mounted() {
        // 登入状态
        session.uinfo();
    },
    methods: {
        //用户登入
        submitSginIn() {
            let unique, password;

            if (
                !(unique = this.current.$unique) ||
                !(password = this.current.password)
            ) {
                this.signFailed = "账号或密码不能为空";
                alert("账号或密码不能为空");
                return;
            }

            api
                .api("user/read", {
                    where: {
                        or: [["username", "=", unique], ["phone", "=", unique]]
                    }
                })
                .then(res => {
                    let item;
                    if (!(item = res.data[0]) || item.password != password) {
                        this.signFailed = "账号或密码错误";
                        alert("账号或密码错误");
                        return;
                    }

                    this.signFailed = false;
                    delete item.password;

                    session.signIn(item);

                    this.hiddenModal();
                    this.uinfo = session.uinfo();
                });
        },
        //用户注册
        submitSginUp() {
            if (this.current.phoneCode != this.phoneCode) {
                alert("验证码错误");
                return;
            }
            if (this.current.password != this.current.confirmPassward) {
                alert("密码不一致");
                return;
            }

            if (this.typeBox == "phone") {
                delete this.current.mail;
            } else {
                delete this.current.phone;
            }

            !this.current.username &&
                this.$set(this.current, "username", this.current[this.typeBox]);

            api.api("user/create", this.current).then(res => {
                this.hiddenModal();
                this.signUped();
            });
        },

        //用户注册后
        signUped: session.signUped,

        //用户登出
        signOut: session.signOut,

        // 注册弹出框显示
        showSginIn() {
            this.modalList.modal = true;
            this.modalList.signIn = true;
            this.modalList.signUp = false;
        },
        showSginUp() {
            this.modalList.modal = true;
            this.modalList.signUp = true;
            this.modalList.signIn = false;
        },
        hiddenModal() {
            this.modalList.modal = false;
        }
    }
};
</script>
