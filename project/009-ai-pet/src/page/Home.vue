<style scoped>
.slide {
    background: rgba(0, 0, 0, 0.1);
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

/* 主页商品列表 */

.product-title > * {
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0 20px 20px 20px;
    margin: 0 15px;
    color: #ccc;
    border-bottom: 4px solid #ccc;
}

.product-title > *:hover {
    color: #000;
    border-bottom: 4px solid #fda30e;
}

.product-list {
    position: relative;
    margin: 10px;
    box-shadow: 0px 0px 15px #d6d6d6;
}

.product-item {
    padding: 15px 10px 20px 10px;
}

.product-thumb img {
    padding: 20px 38px 20px;
}

.product-info .product-name {
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
.product-title {
    margin-bottom: 30px;
}
</style>


<template>
    <div>
        <Header defName="home" />
        <div class="main">
            <div class="slide">
                <div class="container">
                    <ul v-for="(item, index) in itemList.pet.promotion" :key="index" class="slide-group row">
                        <li>
                            <a href="#" class="row"><img :src="item.cover_url" alt=""></a>
                        </li>
                    </ul>
                </div>
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
                <div v-for="(category, index) in itemList.category" :key="index" class="product-wrap">
                    <div class="container">
                        <ul class="product-title tac">
                            <li>{{category.name}}</li>
                        </ul>
                        <div class="tabs-content">
                            <div class="row">
                                <div v-for="(item, index) in category.petList" :key="index" class="col-lg-3">
                                    <div class="product-list tac">
                                        <div class="product-item">
                                            <div class="product-thumb">
                                                <img :src="item.cover_url" alt="">
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">{{item.title}}</span>
                                                <div class="info-price">
                                                    <span>￥{{item.price}}</span>
                                                    <del>$1700</del>
                                                </div>
                                                <span class="hvr-outline">添加到购物车</span>
                                            </div>
                                        </div>
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
        };
    },
    mounted() {
        this.gReadInfo("pet");
        this.readItem("pet", "promotion", {
            where: { promotion: true }            
        });
        this.readItem("category", {
            where: { promoting: true }
        });
    },
    methods: {
        readItem(model, condition) {
            api.api(`${model}/read`, condition).then(res => {
                this.itemList[model] = res.data
                this.readPetPromoting();    
            });
        },
        readPetPromoting() {
            this.itemList.category.forEach( category => {                
                api.api(`pet/read`, {where: {category_id: category.id}}).then(res => {
                    this.$set(category, 'petList', res.data);
                })
            })  
        }
    }
};
</script>
