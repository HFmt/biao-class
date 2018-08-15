<style scoped>
.header {
    position: relative;
    background: #fff;
    box-shadow: 0px 1px 1px #888888;
}

.nav {
    display: flex;
    align-items: center;
}

.nav .nav-left,
.nav .nav-middle,
.nav .nav-right {
    display: flex;
    align-items: center;
}

.nav .nav-middle {
    justify-content: center;
}

/* element样式重置 */

.el-menu-demo {
    border: 0;
}
</style>

<template>
    <div>
        <div class="header">
            <div class="container">
                <el-row class="nav">
                    <el-col :span="7" class="nav-left">
                        <el-menu :default-active="defRouter" router class="el-menu-demo" mode="horizontal" >
                            <el-menu-item index="/">首页</el-menu-item>
                            <el-menu-item index="/signIn">登入</el-menu-item>
                            <el-menu-item index="/signUp">注册</el-menu-item>
                        </el-menu>
                    </el-col>
                    <el-col :span="8" class="nav-middle">
                        <div class="logo">我是logoooo啊</div>
                    </el-col>
                    <el-col :span="7" class="nav-right tar">
                        <el-col :span="16">
                            <form action="" class="search-form">
                                <el-input placeholder="Search">
                                    <i slot="suffix" class="el-input__icon el-icon-search"></i>
                                </el-input>
                            </form>
                        </el-col>
                        <el-col :span="3">
                            <span class="settings">
                                <i class="fa fa-user" aria-hidden="true"></i>
                            </span>
                        </el-col>
                        <el-col :span="5">aa</el-col>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        defRouter: {
            default: "/"
        }
    },
    data() {
        return {};
    }
};
</script>
