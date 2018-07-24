<style scoped>
/* 头部搜索 */
.search .login {
}
.search .login a {
    padding: 18px 13px;
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
    padding: 26px 34px;
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

.menu-link a::after{
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
    font-size: 0.9rem;
    padding: 4px;
}
</style>

<template>
    <div class="header">
        <div class="search">
            <div class="container row">
                <div class="logo col-lg-3">
                </div>
                <div class="search-bar col-lg-6">
                    <form action="">
                        <input type="search">
                        <button type="submit">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>
                <ul class="login col-lg-3">
                    <li>
                        <a href="#">
                            <i class="fa fa-user-circle" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="nav">
            <div class="container row">
                <div class="nav-left col-lg-9">
                    <ul class="navbar">
                        <li @click="defname = defname" :class="{'menu-link': defname == 'home'}">
                            <router-link class="hb" to="/" href="#">首页y</router-link>
                        </li>
                        <li @click="defname = defname" :class="{'menu-link': defname == 'detail'}">
                            <router-link to="/detail" href="#">详情页</router-link>
                        </li>
                        <li>
                            <a href="#">猫咪用品</a>
                        </li>
                        <li>
                            <a href="#">故事</a>
                        </li>
                        <li>
                            <a href="#">猫咪百科</a>
                        </li>
                    </ul>
                </div>
                <div class="nav-right col-lg-3">
                    <div class="nav-cart">
                        <p>
                            <a href="#">
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                <span>$0.00</span>
                            </a>
                        </p>
                        <p>
                            <a href="#">
                                <span>Empty Cart</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        defname: {
            default:'home'
        },
        data() {
            return {
            }
        }
    }
}
</script>
