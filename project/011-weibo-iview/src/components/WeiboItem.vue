<style>
/* 微博信息卡片 */

/* search */

/* iview Card  */

.weibo-search-wrap .ivu-card-body {
    padding-top: 0;
    padding-bottom: 0;
}

.weibo-nav-item.ivu-menu-item {
    padding: 0 10px;
}



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


.weibo-nav-items.ivu-menu::after {
    height: 0;
}
</style>

<template>
    <div>
        <Card class="weibo-search-wrap card-mgb">
            <Menu mode="horizontal" theme="light" class="weibo-nav-items">
                <MenuItem name="/personalPage" to="/personalPage" class="weibo-nav-item">
                <Icon type="md-home " size="20" />
                <span>主页</span>
                </MenuItem>
                <MenuItem name="/signUp" to="/signUp" class="weibo-nav-item">
                <Icon type="md-home" size="20" />
                <span>注册</span>
                </MenuItem>
                <MenuItem name="/" to="/" class="weibo-nav-item">
                <Icon type="md-home" size="20" />
                <span>首页</span>
                </MenuItem>
            </Menu>
        </Card>
        <Card class="weibo-content-item card-mgb">
            <Row>
                <Col span="3">
                <Poptip trigger="hover" placement="top" width="400">
                    <div class="user-portrait">
                        <router-link to="/">
                            <img src="http://placekitten.com/230/75" alt="">
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
                            jlzm
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
                    {{weiboTime}}分钟之前发布
                </div>
                <div class="weibo-detail-wrap">
                    <p class="detail-text">
                        如果给你100w，7天后要你归还本金。你会怎么实现利益最大化？ Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maiores corrupti dolorum odit ex nam nostrum aperiam? Ullam
                    </p>
                    <div class="detail-thumbnail-items">
                        <img src="http://placekitten.com/230/150" alt="">
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
    components: {
        Header
    },
    data() {
        return {
            weiboTime: ""
        };
    },
    mounted() {
        this.getOldTime();
    },
    methods: {
        getOldTime() {
            let date = new Date();
            this.weiboTime = date.getMinutes();
            setInterval(() => {
                let date = new Date();
                this.weiboTime = date.getMinutes();
            }, 60);
        }
    }
};
</script>

