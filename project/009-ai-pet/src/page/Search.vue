
<style scoped>

.main {
    padding: 80px 0;
}
/* 公共样式 */
.title {
    color: #fda30e;
    /* padding-bottom: 20px; */

}

.page-head {
    background: url(http://placekitten.com/1920/217) no-repeat center;
    min-height: 217px;
    display: flex;
    justify-content: center;
    align-items: center;
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

/* 筛选区域 */
.select-wrap li,
.select-wrap .title,
.select-wrap .show-all {
    margin-top: 20px;
}

.select-wrap li {
    margin:20px 20px;
}
</style>

<template>
    <div>
        <Header defName="search" />
        <div class="page-head tac">
            <h1 class="title">喵星人专区</h1>
        </div>
        <div class="main">
            <div class="container">
                <div class="select-wrap">
                    <div class="row">
                        <div class="col-lg-1 title tac">
                            <span>品种</span>
                        </div>
                        <div class="col-lg-10">
                            <ul class="cp-all">
                                <li>全部</li>
                                <li>橘猫</li>
                                <li>田园猫</li>
                                <li>缅因猫</li>
                                <li>布偶猫</li>
                                <li>加菲猫</li>
                                <li>暹罗猫</li>
                                <li>无毛猫</li>
                                <li>英短</li>
                                <li>波斯猫</li>
                            </ul>
                        </div>
                        <div class="col-lg-1 show-all tac cp">
                            <span>更多</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-1 title tac">
                            <span>年龄</span>
                        </div>
                        <div class="col-lg-10">
                            <ul class="cp-all">
                                <li>全部</li>
                                <li>3个月以下</li>
                                <li>3-5个月</li>
                                <li>5-12个月</li>
                                <li>1-3岁</li>
                                <li>3岁以上</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-1 title tac">
                            <span>疫苗</span>
                        </div>
                        <div class="col-lg-10">
                            <ul class="cp-all">
                                <li>全部</li>
                                <li>未做</li>
                                <li>狂犬疫苗</li>
                                <li>猫二联</li>
                                <li>猫三联</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-1 title tac">
                            <span>价格</span>
                        </div>
                        <div class="col-lg-10">
                            <ul class="cp-all">
                                <li>全部</li>
                                <li>0-1000元</li>
                                <li>1000-3000元</li>
                                <li>3000-5000元</li>
                                <li>5000-10000元</li>
                                <li>10000元以上</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="tabs-content">
                    <div class="row">
                        <div v-for="(item, index) in allList.pet" :key="index" class="col-lg-3">
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
</template>

<script>
import Header from "../components/Header";
import ReadInfo from "../mixsin/ReadInfo";
export default {
    components: {
        Header
    },
    mixins: [ReadInfo],
    data() {
        return {
            allList: {}
        };
    },
    mounted() {
        this.gReadInfo("pet", {
            where: {category_id: 1}
        });
    }
};
</script>

