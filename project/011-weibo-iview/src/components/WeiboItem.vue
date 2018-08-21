<style>
/* weibo Card */

/* search */

.weibo-nav-wrap {
    display: flex;
    align-items: center;
}

/* iview Card Reset*/

.weibo-nav-card .ivu-card-body {
    padding-top: 3px;
    padding-bottom: 3px;
}

.weibo-nav-items.ivu-menu::after {
    height: 0;
}

.weibo-nav-item.ivu-menu-item {
    padding: 0 10px;
}

.weibo-nav-items.ivu-menu .weibo-nav-item.ivu-menu-item,
.weibo-nav-items.ivu-menu .weibo-nav-item.ivu-menu-submenu {
    border: 0;
}

.weibo-nav-items.ivu-menu .weibo-nav-item.ivu-menu-item:hover,
.weibo-nav-items.ivu-menu .weibo-nav-item.ivu-menu-submenu:hover {
    border: 0;
}

.weibo-form.ivu-form-item {
    margin: 0;
}

/* iview Card Reset End*/

.weibo-nav-items {
    height: 37px;
    line-height: 37px;
}

/* search End*/

.weibo-content-item {
    margin-bottom: 15px;
}

.weibo-content-item .user-poptip img {
    min-height: 100%;
    min-width: 100%;
}

.weibo-content-item .info-head .userinfo {
}

.weibo-content-item .info-head .userinfo .username {
    font-weight: bold;
    font-size: 1.1rem;
}

.detail-text,
.detail-thumbnail-items {
    margin-top: 10px;
}

.weibo-content-item .weibo-time {
    color: #808080;
    font-size: 0.8rem;
}

.detail-text {
    font-size: 1rem;
}

.detail-thumbnail-items {
}

/* .weibo-card-item底部 */

.weibo-operation-items {
    border-top: 1px solid #e1e1e1;
}

.weibo-operation-items {
    margin-top: 15px;
}

.operation-item {
    padding: 10px 0;
}

.operation-item .tooltip {
    border-right: 1px solid #e1e1e1;
    padding: 0 30px;
    width: 100%;
}

/* 头像缩略图 */

.user-portrait {
    border-radius: 50%;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.3);
}

.user-portrait {
    height: 54px;
    width: 54px;
}

.user-portrait img {
    min-height: 100%;
}
</style>

<template>
    <div>
        <Card class="weibo-content-item card-mgb">
            <Row>
                <Col span="3">
                <Poptip trigger="hover" placement="top" width="400">
                    <div class="user-portrait">
                        <router-link to="/">
                            <img :src="item && item.portrait || 'http://placekitten.com/150/75'" alt="">
                        </router-link>
                    </div>
                    <div slot="content" class="user-poptip">
                        <img src="http://placekitten.com/230/75" alt="">
                    </div>
                </Poptip>
                </Col>
                <Col span="21">
                <div class="info-head cf">
                    <div class="userinfo col">
                        <router-link to="/" class="username">
                            {{item && item.$user && item.$user.username || '账号已注销'}}
                        </router-link>
                    </div>
                    <Dropdown class="flr">
                        <Icon type="md-arrow-dropdown" class="cp cl-hv" size="30" />
                        <DropdownMenu slot="list">
                            <DropdownItem>驴打滚</DropdownItem>
                            <DropdownItem>炸酱面</DropdownItem>
                            <DropdownItem disabled>豆汁儿</DropdownItem>
                            <DropdownItem>冰糖葫芦</DropdownItem>
                            <DropdownItem divided>北京烤鸭</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div class="weibo-time">
                    {{item && item.time || '-'}}
                </div>
                <div class="weibo-detail-wrap">
                    <p class="detail-text">
                        {{item && item.text || '文字内容'}}
                    </p>
                    <div class="detail-thumbnail-items">
                        <img :src="item && item.portrait || 'http://placekitten.com/230/150'" alt="">
                    </div>
                </div>
                </Col>
            </Row>
            <Row class="weibo-operation-items tac cp-all cl-hv-all">
                <Col span="6">
                <span class="operation-item db">
                    <span class="tooltip">
                        <em class="icon">
                            <Icon type="md-heart" size="24" />
                        </em>收藏
                    </span>
                </span>
                </Col>
                <Col span="6">
                <span class="operation-item db">
                    <span class="tooltip">
                        <em class="icon">
                            <Icon type="md-share" size="24" />
                        </em>转发
                    </span>
                </span>
                </Col>
                <Col span="6">
                <span class="operation-item db">
                    <span class="tooltip">
                        <em class="icon">
                            <Icon type="md-text" size="24" />
                        </em>999
                    </span>
                </span>
                </Col>
                <Col span="6">
                <span class="operation-item db">
                    <span>
                        <em class="icon">
                            <Icon type="md-thumbs-up" size="24" />
                        </em>999
                    </span>
                </span>
                </Col>
            </Row>
        </Card>
    </div>
</template>

<script>
import Header from "../components/Header";

export default {
    props: {
        item: {
            default() {
                return {};
            }
        }
    },
    components: {
        Header
    },
    data() {
        return {
            weiboTime: ""
        };
    },
    mounted() {
        
    },
    methods: {

    }
};
</script>

