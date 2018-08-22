<style scoped>
.main {
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

/* 发布微博 */

/* 额外信息 */
.extras li {
    margin-right: 15px;
}

.icon-mgr {
    font-style: normal;
    padding-right: 4px;
}

/* 个人信息卡片 */
.user-bg {
    position: relative;
}

/* 头像缩略图 */

.head-portrait {
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

.head-portrait img {
    min-height: 100%;
}

.user-intro {
    padding-top: 30px;
}

.user-title-wrap {
    padding-bottom: 10px;
}

/* iview样式重置 */
</style>

<template>
    <div>
        <Header defRouter="/" />
        <Row class="main">
            <!-- <Col span="6"></Col> -->
            <Col span="14" class="container">
            <Row :gutter="14">
                <Col span="5" class="main-middle">
                <Card>
                    <p slot="title">
                        <span class="suggested-title">推荐关注</span>
                        <span>刷新</span>
                        <span>全部</span>
                    </p>
                    <div v-for="(item, index) in allList.user" class="suggested-users">
                        <Row>
                            <Col span="8">
                            <Poptip trigger="hover" placement="top" width="400">
                                <div class="user-portrait">
                                    <router-link to="/">
                                        <img :src="item.portrait || 'http://placekitten.com/150/75'" alt="">
                                    </router-link>
                                </div>
                                <div slot="content" class="user-poptip">
                                    <img src="http://placekitten.com/230/75" alt="">
                                </div>
                            </Poptip>
                            </Col>
                            <Col span="16">

                            <div class="userinfo">

                                <router-link to="/" class="username">
                                    {{item.username}}
                                </router-link>
                            </div>

                            <Button v-if="hasFollower(item.id)" @click.native="unfollower(item.id)" type="primary">取消关注</Button>
                            <Button v-else @click.native="follower(item.id)" type="primary">关注</Button>
                            </Col>
                        </Row>
                    </div>
                </Card>
                <!-- <ul class="sidebar-router-items">
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
                </ul> -->
                </Col>
                <Col span="13" class="main-middle">
                <Card class="card-mgb">
                    <div>
                        <p class="title">有什么新鲜事想告诉大家?</p>
                        <Form @submit.native.prevent="publishWeibo()">
                            <FormItem>
                                <Input v-model="publishContent.text" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." />
                            </FormItem>
                            <FormItem>
                                <Col span="18">
                                <ul class="extras tal cp-all dib-all cl-hv-all">
                                    <li>
                                        <em class="icon-mgr">
                                            <Icon type="md-images" size="24" color="#72a305" />
                                        </em>
                                        <span>图片</span>
                                    </li>
                                    <li>
                                        <em class="icon-mgr">
                                            <Icon type="md-videocam" size="24" color="#2b85e4" />
                                        </em>
                                        <span>视频</span>
                                    </li>
                                    <li>
                                        <em class="icon-mgr">
                                            <Icon type="ios-grid-outline" size="24" color="#2db7f5" />
                                        </em>
                                        <span>话题</span>
                                    </li>
                                </ul>
                                </Col>
                                <Col span="6 tar">
                                <Button @click.native="publishWeibo()" type="primary">发布</Button>
                                </Col>
                            </FormItem>
                        </Form>
                    </div>
                </Card>
                <Row class="weibo-items">
                    <Card class="weibo-nav-card card-mgb">
                        <Row class="weibo-nav-wrap">
                            <Col span="12">
                            <Menu mode="horizontal" theme="light" class="weibo-nav-items dib">
                                <MenuItem name="1" class="weibo-nav-item">
                                <span>全部</span>
                                </MenuItem>
                                <Submenu name="2" class="weibo-nav-item">
                                    <template slot="title">
                                        <span>原创</span>
                                    </template>
                                    <MenuItem name="3-1">图片</MenuItem>
                                    <MenuItem name="3-2">视频</MenuItem>
                                    <MenuItem name="3-3">音乐</MenuItem>
                                    <MenuItem name="3-3">文章</MenuItem>
                                </Submenu>
                            </Menu>
                            </Col>
                            <Col span="10">
                            <Form @submit.native="test()" class="weibo-search-wrap">
                                <FormItem class="weibo-form">
                                    <!-- <Input class="weibo-search">
                                            <Icon type="ios-search" slot="suffix" />
                                </Input> -->
                                    <Input icon="md-search" @on-click="test()" placeholder="Enter something..." />
                                </FormItem>
                            </Form>
                            </Col>
                        </Row>

                    </Card>
                    <WeiboItem v-for="(item, index) in allList.weibo" :key="index" :item="item" />
                </Row>
                </Col>
                <Col span="6" class="main-right">
                <Card class="card-mgb">
                    <div class="user-intro-wrap">
                        <div class="user-bg">
                            <img src="http://placekitten.com/230/75" alt="">
                            <router-link to="/" class="head-portrait">
                                <!-- <img src="http://placekitten.com/230/75" alt=""> -->
                            </router-link>
                        </div>
                        <div class="user-intro tac">
                            <div class="user-title-wrap">
                                <router-link to="/signIn">
                                    <span v-if="uinfo" class="title">{{uinfo.username}}</span>
                                    <span v-else>首页待完善</span>
                                </router-link>
                            </div>
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
                        </div>
                    </div>
                </Card>
                </Col>
            </Row>
            </Col>
            <!-- <Col span="6"></Col> -->
        </Row>
        <Footer/>
    </div>
</template>

<script>
import api from "../lib/api";

import WeiboItem from "../components/WeiboItem";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GReadInfo from "../mixins/GReadInfo";
import session from "../lib/session";

export default {
    mixins: [GReadInfo],
    components: {
        Header,
        WeiboItem,
        Footer
    },
    data() {
        return {
            allList: {},
            publishContent: {},
            uinfo: session.uinfo()
        };
    },
    mounted() {
        this.readSuggestedUser();
        if(session.signIned()) {
            this.readFollowerUser()
                .then(res => this.readFollowerWeibo());
        } else {
            this.readPublicWeibo();
        }
    },
    methods: {
        // 发布微博
        publishWeibo() {
            this.publishContent.time = this.getCurrentTime();
            this.publishContent.user_id = this.uinfo.id;
            api.api("weibo/create", this.publishContent).then(res => {
                this.publishContent = {};
                this.allList.weibo.push(res.data);
                this.readFollowerWeibo();
            });
        },
        // 渲染全部微博
        readPublicWeibo() {
            this.gReadInfo("weibo", this.allList, {
                with: [
                    {
                        relation: "belongs_to",
                        model: "user"
                    }
                ]
            });
        },
        // 渲染关注人微博
        readFollowerWeibo() {
            this.gReadInfo("weibo", this.allList, {
                where: [
                    [
                        "user_id",
                        "in",
                        this.pluck(this.allList.follower, "id").concat(
                            this.uinfo.id
                        )
                    ]
                ],
                with: [
                    {
                        relation: "belongs_to",
                        model: "user"
                    }
                ]
            })
        },
        // 渲染推荐用户
        readSuggestedUser() {
            this.gReadInfo("user", this.allList);
        },
        // 关注某用户
        follower(userId) {
            api
                .api("user/bind", {
                    model: "user",
                    glue: {
                        [this.uinfo.id]: userId
                    }
                })
                .then(res => {
                    this.readFollowerUser();
                });
        },
        // 取关某用户
        unfollower(userId) {
            api
                .api("user/unbind", {
                    model: "user",
                    glue: {
                        [this.uinfo.id]: userId
                    }
                })
                .then(res => {
                    this.readFollowerUser();
                });
        },
        // 渲染关注用户
        readFollowerUser() {
            return api
                .api("user/find", {
                    id: this.uinfo.id,
                    with: [
                        {
                            relation: "belongs_to_many",
                            model: "user"
                        }
                    ]
                })
                .then(res => {
                    this.allList.follower = res.data.$user;
                });
        },
        // 判断是否关注
        hasFollower(targetId) {
            if (!this.allList.follower) return false;
            return !!this.allList.follower.find(item => {
                return item.id == targetId;
            });
        },
        pluck(arr, key) {
            const result = [];
            if(!arr)
                 result;
            arr.forEach(item => {
                result.push(item[key]);
            });

            return result;
        },
        // 获取当前时间
        getCurrentTime() {
            let date = new Date();
            let y = date.getFullYear(),
                m = date.getMonth() + 1,
                d = date.getDate(),
                h = date.getHours(),
                min = date.getMinutes(),
                s = date.getSeconds();
            if (date.getMonth() < 10) {
                m = "0" + m;
            }
            if (date.getDate() < 10) {
                d = "0" + d;
            }
            if (date.getHours() < 10) {
                h = "0" + h;
            }
            if (date.getMinutes() < 10) {
                min = "0" + min;
            }
            if (date.getSeconds() < 10) {
                s = "0" + s;
            }
            return `${y}-${m}-${d} ${h}:${min}:${s}`;
        }
    }
};
</script>
