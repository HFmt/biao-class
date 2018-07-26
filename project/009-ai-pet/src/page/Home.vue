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

.hvr-outline {
    cursor: pointer;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding: 8px 20px;
    background: #fda30e;
    backface-visibility: hidden;
}

.hvr-outline::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: #fda30e solid 4px;
    transition-duration: 0.3s;
    transition-property: top, right, bottom, left;
}

.hvr-outline:hover::before {
    content: "";
    position: absolute;
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -8px;
    border: #fda30e solid 4px;
    transition-duration: 0.3s;
    transition-property: top, right, bottom, left;
}

/* 公共样式 */

.slide, .new-arrivals,  .promotion {
    margin-bottom: 90px;
}

.new-arrivals .title-area, 
.product-title {
    margin-bottom: 30px;
}


</style>


<template>
    <div>
        <Header defname="home" />
        <div class="main">
            <div class="slide">
                <div class="container">
                    <img src="http://placekitten.com/1920/1080" alt="">
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
                <div class="product-wrap tac">
                    <div class="container">
                        <ul class="product-title">
                            <li>喵星人</li>
                            <li>汪星人</li>
                            <li>宠物用品</li>
                        </ul>
                        <div class="tabs-content">
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="product-list">
                                        <div class="product-item">
                                            <div class="product-thumb">
                                                <img src="http://placekitten.com/255/291" alt="">
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">萌萌的橘猫</span>
                                                <div class="info-price">
                                                    <span>￥1000</span>
                                                    <del>$1700</del>
                                                </div>
                                                <span class="hvr-outline">添加到购物车</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="product-list">
                                        <div class="product-item">
                                            <div class="product-thumb">
                                                <img src="http://placekitten.com/255/291" alt="">
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">萌萌的橘猫</span>
                                                <div class="info-price">
                                                    <span>￥1200</span>
                                                    <del>$1700</del>
                                                </div>
                                                <span class="hvr-outline">添加到购物车</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="product-list">
                                        <div class="product-item">
                                            <div class="product-thumb">
                                                <img src="http://placekitten.com/255/291" alt="">
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">萌萌的橘猫</span>
                                                <div class="info-price">
                                                    <span>￥1000</span>
                                                    <del>$1700</del>
                                                </div>
                                                <span class="hvr-outline">添加到购物车</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="product-list">
                                        <div class="product-item">
                                            <div class="product-thumb">
                                                <img src="http://placekitten.com/255/291" alt="">
                                            </div>
                                            <div class="product-info">
                                                <span class="product-name">萌萌的橘猫</span>
                                                <div class="info-price">
                                                    <span>￥1000</span>
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
import Header from "../components/Header";

export default {
    components: {
        Header
    }
};
</script>
