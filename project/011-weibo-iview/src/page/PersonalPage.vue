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
        <Header defRouter="/personalPage" />
        <Row class="main">
            <Col span="11" class="container user-cover-wrap">
            <Card class="card-mgb">
                <div class="user-cover">
                    <img src="http://placekitten.com/1024/512" alt="">
                    <div class="intro">

                    </div>
                </div>
                <Menu mode="horizontal" theme="light" class="cover-operation-items">
                    <MenuItem name="/personalPage" to="/personalPage" class="cover-operation-item">
                    <Icon type="md-home " size="20" />
                    <span>主页</span>
                    </MenuItem>
                    <MenuItem name="/signUp" to="/signUp" class="cover-operation-item">
                    <Icon type="md-home" size="20" />
                    <span>相册</span>
                    </MenuItem>
                    <MenuItem name="/" to="/" class="cover-operation-item">
                    <Icon type="md-home" size="20" />
                    <span>设置</span>
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
                <Card></Card>
                </Col>
                <Col span="16">
                <Row class="weibo-items">
                    <WeiboItem/>
                </Row>
                </Col>
            </Row>
            </Col>
        </Row>
    </div>
</template>

<script>
import WeiboItem from "../components/WeiboItem";
import Header from "../components/Header";

export default {
    components: {
        Header,
        WeiboItem
    },
    data() {
        return {};
    }
};
</script>

