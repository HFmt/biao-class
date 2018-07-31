
<style scoped>
.main {
    padding: 80px 0;
}

/* 公共样式 */
.title {
    color: #fda30e;
}

.page-head {
    background: url(http://placekitten.com/1920/217) no-repeat center;
    min-height: 217px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.single-lt-lt,
.single-lt-rt,
.single-rt {
    padding: 20px;
    vertical-align: middle;
}

.single-lt-rt li {
    padding-bottom: 10px;
    display: block;
}

.single-rt > * {
    margin-bottom: 20px;
}

.price {
}

.price span {
    font-size: 1.4rem;
}
.price del {
    color: #a7a7a7;
    margin-left: 10px;
}

.single-rt .desc li {
    padding: 15px;
}
</style>

<template>
    <div>
        <Header defName="detail" />
        <div class="page-head tac">
            <h1 class="title">喵星人专区</h1>
        </div>
        <div class="main">
            <div class="single">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="row single-lt">
                                <div class="col-lg-9 single-lt-lt">
                                    <img src="http://placekitten.com/403/472" alt="">
                                </div>
                                <div class="col-lg-3 single-lt-rt">
                                    <ul>
                                        <li>
                                            <img src="http://placekitten.com/150/105" alt="">
                                        </li>
                                        <li>
                                            <img src="http://placekitten.com/150/105" alt="">
                                        </li>
                                        <li>
                                            <img src="http://placekitten.com/150/105" alt="">
                                        </li>
                                        <li>
                                            <img src="http://placekitten.com/150/105" alt="">
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="single-rt">
                                <h3 class="title">何家营土产田园猫</h3>
                                <div class="price">
                                    <span>￥1200</span>
                                    <del>￥1700</del>
                                </div>
                                <div class="desc">
                                    <ul class="row">
                                        <li class="col-lg-6">
                                            <span>品种：</span>
                                            田园猫
                                        </li>
                                        <li class="col-lg-6">
                                            <span>性别：</span>
                                            公
                                        </li>
                                        <li class="col-lg-6">
                                            <span>年龄：</span>
                                            3个月
                                        </li>
                                        <li class="col-lg-6">
                                            <span>驱虫情况：</span>
                                            已驱虫
                                        </li>
                                        <li class="col-lg-6">
                                            <span>疫苗情况：</span>
                                            三联
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <span class="hvr-outline">添加到购物车</span>

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
import Header from "../components/Header";
export default {
    components: {
        Header
    },
    data() {
        return {
            current: {},
            product: {}
        };
    },
    mounted() {
        this.findInfo();
        console.log(this.product);
    },

    methods: {
        findInfo(id) {
            // api.api('pet/find')
            //     .then(res => {
            //         this.product = res.data;
            //     })
        }
    }
};
</script>

