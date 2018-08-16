<style scoped>
.main {
    margin-top: 20px;
    display: flex;
}

.main-middle {
    padding: 0 10px;
}

.sidebar-router-item a {
    display: block;
    color: #000;
    font-size: 1rem;
    padding: 7px 10px;
}

.sidebar-router-item:hover {
    background: #7fb9db;
}

/* 发布额外信息 */
.extras li {
    margin-right: 15px;
    display: inline-block;
}

.extras li span {
    padding-left: 4px;
}

.extras li span:hover {
    color: #ff9900;
}

/* 个人信息卡片 */
.user-bg {
    position: relative;
}

/* 头像缩略图 */

.head-portrait,
.user-portrait {
    border-radius: 50%;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.3);
}

.head-portrait {
    position: absolute;
    height: 74px;
    width: 74px;
    left: 35%;
    bottom: -20px;
    border: 3px solid #fff;
}

.user-portrait {
    height: 54px;
    width: 54px;
}

.head-portrait img,
.user-portrait img {
    min-height: 100%;
}

.user-info {
    padding-top: 30px;
}

.user-title-wrap {
    padding-bottom: 10px;
}

.user-atten li {
    padding: 0 16px;
    display: inline-block;
    border-right: 1px solid #ccc;
}

.user-atten li:last-child {
    border: 0;
}

/* 推文卡片 */

.weibo-card-item {
}

.weibo-card-item .user-poptip img {
    min-height: 100%;
    min-width: 100%;
}

.weibo-card-item .info-head .userinfo {
}

.weibo-card-item .info-head .userinfo .username {
    font-weight: bold;
    font-size: 1.1rem;
}

.detail-text,
.detail-thumbnail-items {
    margin-top: 10px;
}

.weibo-card-item .weibo-time {
    color: #808080;
    font-size: 0.8rem;
}

.detail-text {
    font-size: 1rem;
}

.detail-thumbnail-items {
}

/* .weibo-card-item底部 */

.weibo-card-item-bottom {
    border-top: 1px solid #e1e1e1;
}

.weibo-card-item-bottom {
    margin-top: 15px;
}

.weibo-card-item-bottom li a {
    padding: 10px 0;
}

.weibo-card-item-bottom li a span {
    border-right: 1px solid #e1e1e1;
    padding: 0 30px;
    width: 100%;
}

.weibo-card-item-bottom li:last-child span {
    border: 0;
}

.weibo-card-item-bottom li a span .i-icon {
    font-style: normal;
    padding-right: 4px;
}
/* iview样式重置 */
</style>

<template>
    <div>
        <Header defRouter="/" />
        <Row class="main">
            <!-- <Col span="6"></Col> -->
            <Col span="12" class="container">
            <Row :gutter="14">
                <Col span="3" class="main-middle">
                <ul class="sidebar-router-items">
                    <li class="sidebar-router-item">
                        <router-link to="/" class="db">
                            首页
                        </router-link>
                    </li>
                    <li class="sidebar-router-item">
                        <router-link to="/" class="db">
                            首页
                        </router-link>
                    </li>
                    <li class="sidebar-router-item">
                        <router-link to="/" class="db">
                            首页
                        </router-link>
                    </li>
                    <li class="sidebar-router-item">
                        <router-link to="/" class="db">
                            首页
                        </router-link>
                    </li>
                    <li class="sidebar-router-item">
                        <router-link to="/" class="db">
                            首页
                        </router-link>
                    </li>
                    <li class="sidebar-router-item">
                        <router-link to="/" class="db">
                            首页
                        </router-link>
                    </li>
                    <li class="sidebar-router-item">
                        <router-link to="/" class="db">
                            首页
                        </router-link>
                    </li>
                    <li class="sidebar-router-item">
                        <router-link to="/" class="db">
                            首页
                        </router-link>
                    </li>
                </ul>
                </Col>
                <Col span="15" class="main-middle">
                <Card>
                    <div>
                        <p class="title">有什么新鲜事想告诉大家?</p>
                        <Form>
                            <FormItem>
                                <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." />
                            </FormItem>
                            <FormItem>
                                <Col span="18">
                                <ul class="extras tal cp-all">
                                    <li>
                                        <Icon type="md-images" size="24" color="#72a305" />
                                        <span>图片</span>
                                    </li>
                                    <li>
                                        <Icon type="md-videocam" size="24" color="#2b85e4" />
                                        <span>视频</span>
                                    </li>
                                    <li>
                                        <Icon type="ios-grid-outline" size="24" color="#2db7f5" />
                                        <span>话题</span>
                                    </li>
                                </ul>
                                </Col>
                                <Col span="6 tar">
                                <Button type="primary">发布</Button>
                                </Col>
                            </FormItem>
                        </Form>
                    </div>
                </Card>
                <Row class="weibo-card-items">
                    <Card class="weibo-card-item">
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
                                    <Icon type="md-arrow-dropdown" size="30" />
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
                        <ul class="weibo-card-item-bottom dib-all tac">
                            <li>
                                <a href="#" class="db">
                                    <span><em class="i-icon"><Icon type="md-heart" size="30" /></em>转发</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="db">
                                    <span><em class="i-icon"><Icon type="md-share" size="30" /></em>转发</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="db">
                                    <span><em class="i-icon"><Icon type="md-text" size="30" /></em>999</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="db">
                                    <span><em class="i-icon"><Icon type="md-thumbs-up" size="30" /></em>999</span>
                                </a>
                            </li>
                        </ul>
                    </Card>
                </Row>
                </Col>
                <Col span="6" class="main-right">
                <Card>
                    <div class="user-info-card">
                        <div class="user-bg">
                            <img src="http://placekitten.com/230/75" alt="">
                            <router-link to="/" class="head-portrait">
                                <!-- <img src="http://placekitten.com/230/75" alt=""> -->
                            </router-link>
                        </div>
                        <div class="user-info tac">
                            <div class="user-title-wrap">
                                <router-link to="/signIn">
                                    <span class="title">捡了只猫</span>
                                </router-link>
                            </div>
                            <ul class="user-atten">
                                <li>
                                    <a href="#">
                                        <p>999</p>
                                        <span>关注</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <p>999</p>
                                        <span>微博</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <p>999</p>
                                        <span>粉丝</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Card>
                </Col>
            </Row>
            </Col>
            <!-- <Col span="6"></Col> -->
        </Row>
        <Footer/> {{weiboTime}}
    </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
    components: {
        Header,
        Footer
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
