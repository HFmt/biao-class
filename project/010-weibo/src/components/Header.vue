<style scoped>
.header {
    box-shadow: 0px 1px 2px #888888;
}

.nav {
    height: 46px;
}

.ivu-menu-horizontal {
    height: 46px;
}

.ivu-menu-horizontal > * {
    display: flex;
    justify-content: center;
    align-items: center;
}

.ivu-menu-horizontal.ivu-menu-light:after {
    background: 0;
}

.nav-left,
.nav-middle,
.nav-right
 {
    height: 100%;
    display: flex;
    align-items: center;
}

.nav-right > * {
    padding: 0 10px;
}


</style>

<template>
    <div>
        <div class="header">
            <div class="container">
                    <Row class="nav">
                        <Col span="10" class="nav-left">
                        <Menu mode="horizontal" :theme="light" active-name="1">
                            <MenuItem name="1">
                            <router-link to="/">
                                <Icon type="md-home" />
                                <span>首页</span>
                            </router-link>
                            </MenuItem>
                            <MenuItem name="2">
                            <Icon type="md-mail" />
                            <span>消息</span>
                            </MenuItem>
                            <MenuItem name="3">
                            <Icon type="md-notifications" />
                            <span>通知</span>
                            </MenuItem>
                        </Menu>
                        </Col>
                        <Col span="4" class="nav-middle">
                        <div class="logo">我是logo</div>
                        </Col>
                        <Col span="10" class="nav-right">
                        <form action="" class="col nav-search">
                            <Input search placeholder="搜索" />
                        </form>
                        <router-link to="/signIn">
                            <Avatar icon="ios-person" />
                        </router-link>
                        </Col>
                    </Row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            light: "light",
            dark: "dark",
            primary: "primary"
        };
    }
};
</script>
