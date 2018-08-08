<style scoped>
.slide {
    /* background: rgba(0, 0, 0, 0.1); */
}

.grids .gd {
    padding: 10px;
}

.grids .gd .md-bottom {
    margin-top: 34px;
}

/* 上新商品 */

.new-arrivals .title {
    margin-bottom: 20px;
    color: #fda30e;
}

.new-arrivals p {
    font-size: 0.9rem;
    color: #848484;
}

.pet-wrap .btn-group span {
    margin: 5px;
}
/* 主页商品列表 */

.pet-title > * {
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0 20px 20px 20px;
    margin: 0 15px;
    color: #ccc;
    border-bottom: 4px solid #ccc;
}

.pet-title > *:hover {
    color: #000;
    border-bottom: 4px solid #fda30e;
}

.pet-list {
    position: relative;
    margin: 10px;
    box-shadow: 0px 0px 15px #d6d6d6;
}

.pet-item {
    padding: 15px 10px 20px 10px;
}

.pet-thumb img {
    padding: 20px 38px 20px;
}

.pet-info .pet-name {
    color: #fda30e;
    font-size: 1.1rem;
}

.info-price {
    margin: 15px 0;
}

.info-price span {
    font-size: 1.4rem;
}

.info-price del {
    color: #a7a7a7;
    font-size: 0.7rem;
    margin-left: 10px;
}

/* 公共样式 */

.slide,
.new-arrivals,
.promotion {
    margin-bottom: 90px;
}

.new-arrivals .title-area,
.pet-title {
    margin-bottom: 30px;
}

/* 轮播样式 */
.slide {
    position: relative;
    height: 666px;
    overflow: hidden;
}

.slide-item,
.left-control,
.right-control {
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
}

.slide-item {
    padding: 20px;
    bottom: 0;
    font-size: 1.4rem;
}

.slide-item > * {
    margin: 10px;
}
.left-control:hover,
.right-control:hover,
.slide-item > *:hover {
    color: #fda30e;
}

.left-control,
.right-control {
    background: rgba(0, 0, 0, 0.02);
    height: 100%;
    top: 0;
    font-size: 4rem;
}

.left-control {
    left: 0;
}

.right-control {
    right: 0;
}

.slide-active {
    color: #fda30e;
}
</style>


<template>
    <div>
        <Header defName="home" />
        <div class="main">
            <div class="slide">
                <!-- 轮播左右控制按钮 -->
                <div @click="autoPlayPrev()" class="col-lg-2 left-control tac cp">
                    <i class="fa fa-angle-double-left" aria-hidden="true"></i>
                </div>
                <div @click="autoPlayNext()" class="col-lg-2 right-control tac cp">
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </div>
                <!-- 轮播数量按钮 -->
                <ul class="col-lg-12 slide-item cp-all">
                    <li v-for="(item, index) in itemList.pet" :key="index" @click="autoPlayChange(index)" :class="{'slide-active': index == currentIndex}">
                        <i v-if="index == currentIndex" class="fa fa-dot-circle-o" aria-hidden="true"></i>
                        <i v-else class="fa fa-circle-o" aria-hidden="true"></i>
                    </li>
                </ul>
                <ul class="col-lg-2"></ul>
                <!-- 主轮播 -->
                <ul class="col-lg-8 slide-wrap">
                    <li v-for="(item, index) in itemList.pet" :key="index" v-if="index === currentIndex" @mouseenter="autoPlayStop()" @mouseleave="autoPlayGo">
                        <router-link :to="'/detail/' + item.id" class="row">
                            <img :src="item.cover_url" alt="">
                        </router-link>
                    </li>
                </ul>
                <ul class="col-lg-2"></ul>
            </div>
            <div class="content">
                <div class="new-arrivals tac">
                    <div class="container">
                        <div class="title-area">
                            <h2 class="title">新上架</h2>
                            <p>快买啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
                        </div>
                        <div class="row grids">
                            <div class="col-lg-4">
                                <div class="gd">
                                    <img src="http://placekitten.com/350/456" alt="">
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="gd row">
                                    <div>
                                        <img src="http://placekitten.com/350/211" alt="">
                                    </div>
                                    <div class="md-bottom">
                                        <img src="http://placekitten.com/350/211" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="gd">
                                    <img src="http://placekitten.com/350/456" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="promotion row">
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-lg-6">
                                <img src="http://placekitten.com/528/343" alt="">
                            </div>
                            <div class="col-lg-6">
                                <img src="http://placekitten.com/528/343" alt="">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <img src="http://placekitten.com/528/343" alt="">
                            </div>
                            <div class="col-lg-6">
                                <img src="http://placekitten.com/528/343" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <img src="http://placekitten.com/528/686" alt="">
                    </div>
                </div>
                <div v-for="(category, index) in itemList.category" :key="index" class="pet-wrap">
                    <div class="container">
                        <ul class="pet-title tac">
                            <li>{{category.name}}</li>
                        </ul>
                        <div class="tabs-content">
                            <div class="row">
                                <div v-for="(item, index) in category.petList" :key="index" class="col-lg-3">
                                    <div class="pet-list tac">
                                        <router-link :to="`detail/${item.id}`" class="row pet-item">
                                            <div class="row pet-thumb">
                                                <img :src="item.cover_url" alt="">
                                            </div>
                                            <div class="col pet-info">
                                                <span class="pet-name">{{item.title}}</span>
                                                <div class="info-price">
                                                    <span>￥{{item.price}}</span>
                                                    <del>$1700</del>
                                                </div>
                                                <div class="btn-group">
                                                    <span @click="addItemCart(item.id)" class="hvr-btn">添加到购物车</span>
                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import api from "../lib/api";
import ReadInfo from "../mixsin/ReadInfo";
import Header from "../components/Header";
import toolCart from "../hub/toolCart";

export default {
    components: {
        Header
    },
    mixins: [ReadInfo],
    data() {
        return {
            allList: {},
            itemList: {
                pet: [],
                category: []
            },
            currentIndex: 0,
            timer: null
        };
    },
    created() {
        this.$nextTick(() => {
            this.autoPlayGo();
        });
    },
    mounted() {
        this.gReadInfo("pet");
        this.readItem("pet", {
            where: { promotion: true }
        });
        this.readItem("category", {
            where: { promoting: true }
        });
    },
    methods: {
        // 轮播按钮控制
        autoPlayPrev() {
            this.autoPlayStop();
            this.currentIndex -= 1;
            if (this.currentIndex < 0)
                this.currentIndex = this.itemList.pet.length - 1;
            this.autoPlayGo();
        },
        autoPlayNext() {
            this.autoPlayStop();
            this.currentIndex += 1;
            if (this.currentIndex > this.itemList.pet.length - 1)
                this.currentIndex = 0;
            this.autoPlayGo();
        },
        autoPlayChange(index) {
            this.autoPlayStop();
            this.currentIndex = index;
            this.autoPlayGo();
        },
        // 轮播自动播放
        autoPlayGo() {
            this.timer = setInterval(() => {
                this.autoPlay();
            }, 2000);
        },
        autoPlayStop() {
            clearInterval(this.timer);
            this.timer = null;
        },
        autoPlay() {
            this.currentIndex++;
            if (this.currentIndex > this.itemList.pet.length - 1)
                this.currentIndex = 0;
        },
        readItem(model, condition) {
            api.api(`${model}/read`, condition).then(res => {
                this.itemList[model] = res.data;

                this.readPetPromoting();
            });
        },
        readPetPromoting() {
            this.itemList.category.forEach(category => {
                api
                    .api(`pet/read`, { where: { category_id: category.id } })
                    .then(res => {
                        this.$set(category, "petList", res.data);
                    });
            });
        },

        addItemCart: toolCart.add
    }
};
</script>
