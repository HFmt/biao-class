<style scoped>
.header {
    height: 48px;
}

.nav-wrap {
    position: fixed;
    background: #fff;
    box-shadow: 0px 1px 1px #888888;
    display: flex;
    align-items: center;
    width: 100%;
    z-index: 1;
}

.nav {
    display: flex;
    align-items: center;
}

.nav-router-item {
    float: right;
}

/* logo样式 */
.logo {
    padding-right: 40px;
}

/* iview 样式重置 */

.nav-router-items {
    height: 47px;
    line-height: 47px;
}

.nav-router-items.ivu-menu::after {
    height: 0;
}

/* .nav-router-item.ivu-menu-item {
    border: 0;
}

.nav-router-item.ivu-menu-item:hover {
    border: 0;
} */
</style>

<template>
    <div>
        <div class="header">
            <Row class="nav-wrap">
                <Col span="5" class="logo tar">
                <router-link to="/">
                    Logooooooooooo
                </router-link>
                </Col>
                <Col span="14">
                <Row class="nav">
                    <Col span="11 " class="nav-left">
                    <AutoComplete icon="ios-search" placeholder="input here">
                    </AutoComplete>
                    </Col>
                    <Col span="13" class="nav-right">
                    <Menu mode="horizontal" theme="light" :active-name="defRouter" class="nav-router-items">
                        <MenuItem v-if="uinfo" name="/personalPage" to="/personalPage" class="nav-router-item">
                        <Icon type="md-person " size="24" />
                        <span>{{uinfo.username}}</span>
                        </MenuItem>
                        <MenuItem v-if="!uinfo" name="/signIn" to="/signIn" class="nav-router-item">
                        <Icon type="md-person " size="24" />
                        <span>登入</span>
                        </MenuItem>
                        <MenuItem name="/signUp" to="/signUp" class="nav-router-item">
                        <Icon type="md-person-add" size="24" />
                        <span>注册</span>
                        </MenuItem>
                        <MenuItem name="/found" to="/found" class="nav-router-item">
                        <Icon type="md-eye" size="24" />
                        <span>发现</span>
                        </MenuItem>
                        <MenuItem name="/" to="/" class="nav-router-item">
                        <Icon type="md-home" size="24" />
                        <span>首页</span>
                        </MenuItem>
                    </Menu>
                    </Col>
                </Row>
                </Col>
                <Col span="5" class="tal">
                <Dropdown trigger="hover">
                    <span class="cp">
                        <Icon type="md-settings cl-hv" size="24" />
                    </span>
                    <DropdownMenu slot="list">
                        <DropdownItem>驴打滚</DropdownItem>
                        <DropdownItem>炸酱面</DropdownItem>
                        <DropdownItem disabled>豆汁儿</DropdownItem>
                        <DropdownItem>冰糖葫芦</DropdownItem>
                        <DropdownItem @click.native="signOut()" divided>退出</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
import session from "../lib/session";
export default {
    props: {
        defRouter: {
            default: "/"
        }
    },
    data() {
        return {
            uinfo: session.uinfo()
        };
    },
    methods: {
        signOut() {
            session.signOut();
            this.$router.push("/signIn");
        }
    }
};
</script>
