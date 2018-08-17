<style>
.main {
    display: flex;
}

.user-cover {
    position: relative;
}

.user-cover .intro {
    position: absolute;
    border: 1px solid #000;
    top: 0;
    width: 100%;
    height: 80%;
    background: rgba(133, 69, 69, 0.4);
}

.cover-operation-items {
    display: flex;
    justify-content: center;
}

.cover-operation-item {
    margin: 0 40px;
}

.user-detail-item {
    padding: 10px 0;
    border-bottom: 1px solid #eee;
}
</style>

<template>
    <div>
        <Header defRouter="/userPage" />
        <Row class="main">
            <Col span="11" class="container user-cover-wrap">
            <Card class="card-mgb">
                <div class="user-cover">
                    <img src="http://placekitten.com/1024/512" alt="">
                    <div class="intro">

                    </div>
                </div>
                <Menu mode="horizontal" theme="light" :active-name="defRouter" class="cover-operation-items">
                    <MenuItem name="/signIn" to="/signIn" class="cover-operation-item">
                    <Icon type="md-home " />
                    <span>登入</span>
                    </MenuItem>
                    <MenuItem name="/signUp" to="/signUp" class="cover-operation-item">
                    <Icon type="md-home" />
                    <span>注册</span>
                    </MenuItem>
                    <MenuItem name="/" to="/" class="cover-operation-item">
                    <Icon type="md-home" />
                    <span>首页</span>
                    </MenuItem>
                </Menu>
            </Card>
            <Row :gutter="14">
                <Col span="8">
                <Card class="card-mgb tac">
                    <Row class="user-atten">
                        <Col span="8">
                        <a href="#">
                            <p>999</p>
                            <span>关注</span>
                        </a>
                        </Col>
                        <Col span="8">
                        <a href="#">
                            <p>999</p>
                            <span>微博</span>
                        </a>
                        </Col>
                        <Col span="8">
                        <a href="#">
                            <p>999</p>
                            <span>粉丝</span>
                        </a>
                        </Col>
                    </Row>
                </Card>
                <Card class="card-mgb">
                    <div class="user-detail-items">
                        <p class="user-detail-item">
                            <span class="icon">
                                <Icon type="md-pin" />
                            </span>
                            百慕大三角洲
                        </p>
                        <p class="user-detail-item">
                            <span class="icon">
                                <Icon type="md-school" />
                            </span>
                            幼儿园
                        </p>
                        <p class="user-detail-item">
                            <span class="icon">
                                <Icon type="md-egg" />
                            </span>
                            宇始元一年
                        </p>
                    </div>
                </Card>
                </Col>
                <Col span="16">
                <Row class="weibo-items">
                    <Card class="weibo-item card-mgb">
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
                </Row>
                </Col>
            </Row>
            </Col>
        </Row>
    </div>
</template>

<script>
import "../css/weibo-item.css";
import Header from "../components/Header";

export default {
    components: {
        Header
    }
};
</script>

