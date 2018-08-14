<style scoped>
.header {
    position: relative;
    box-shadow: 0px 1px 1px #888888;
}

.nav {
    height: 60px;
}

.nav-left,
.nav-middle,
.nav-right {
    display: flex;
    align-items: center;
    height: 100%;
}

.nav-left .el-menu-demo > * {
    font-size: 1.2rem;
}

.nav-middle {
    justify-content: center;
}

.nav-right .settings {
    font-size: 2.4rem;
}

.nav-right > * {
    padding: 0 10px;
}

.el-menu-item > * {
    height: 100%;
}

.nav-link {
    height: 100%;
}


/* el组件样式重置 */

.el-menu--horizontal {
    border: 0;
}




</style>

<template>
    <div>
        <div class="header">
            <div class="container">
                <el-row class="nav">
                    <el-col :span="7" class="nav-left">
                        <el-menu default-active="/" router class="el-menu-demo"  mode="horizontal">
                            <el-menu-item index="/">
                                首页
                            </el-menu-item>
                            <el-menu-item index="/signIn" >
                                登入
                            </el-menu-item>

                        </el-menu>
                    </el-col>
                    <el-col :span="8" class="nav-middle">
                        <div class="logo">我是logo啊</div>
                    </el-col>
                    <el-col :span="7" class="nav-right tar">
                        <el-col :span="16">
                            <form action="" class="search-form">
                                <el-input placeholder="Search" suffix-icon="el-icon-search">
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
    data() {
        return {

        };
    }
};
</script>
