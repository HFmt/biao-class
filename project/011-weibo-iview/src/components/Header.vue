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

.nav-router-items::after {
    height: 0;
}

/* .nav-router-items .nav-router-item {
    border: 0;
}

.nav-router-items .nav-router-item:hover {
    border: 0;
} */
</style>

<template>
    <div>
        <div class="header">
            <Row class="nav-wrap">
                <Col span="6" class="logo tar">
                <router-link to="/">
                    Logooooooooooo
                </router-link>
                </Col>
                <Col span="12">
                <Row class="nav">
                    <Col span="11 " class="nav-left">
                    <AutoComplete icon="ios-search" placeholder="input here">
                    </AutoComplete>
                    </Col>
                    <Col span="13" class="nav-right">
                    <Menu mode="horizontal" theme="light" :active-name="defRouter" class="nav-router-items">
                        <MenuItem name="/userPage" to="/userPage" class="nav-router-item">
                        <Icon type="md-person " size="24" />
                        <span>捡了只猫</span>
                        </MenuItem>
                        <MenuItem name="/signIn" to="/signIn" class="nav-router-item">
                        <Icon type="md-home " size="24" />
                        <span>登入</span>
                        </MenuItem>
                        <MenuItem name="/signUp" to="/signUp" class="nav-router-item">
                        <Icon type="md-home" size="24" />
                        <span>注册</span>
                        </MenuItem>
                        <MenuItem name="/" to="/" class="nav-router-item">
                        <Icon type="md-home" size="24" />
                        <span>首页</span>
                        </MenuItem>
                    </Menu>
                    </Col>
                </Row>
                </Col>
                <Col span="6" class="tal">
                <Dropdown trigger="hover">
                    <span class="cp">
                        <Icon type="md-settings cl-hv" size="24" />
                    </span>
                    <DropdownMenu slot="list">
                        <DropdownItem>驴打滚</DropdownItem>
                        <DropdownItem>炸酱面</DropdownItem>
                        <DropdownItem disabled>豆汁儿</DropdownItem>
                        <DropdownItem>冰糖葫芦</DropdownItem>
                        <DropdownItem divided>北京烤鸭</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                </Col>
            </Row>
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
