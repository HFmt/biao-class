
<style scoped>

/* 公共样式 */
.title {
    color: #fda30e; 
}

.page-head {
    background: url(http://placekitten.com/1920/217) no-repeat center;
    min-height: 217px;
    display: flex;
    justify-content:center;
    align-items:center;
}


.single-lt-lt,
.single-lt-rt,
.single-rt {
    padding: 10px;
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
</style>

<template>
    <div>
        <Header defname="detail" />
        <div class="main">
            <div class="page-head tac">
                <h1 class="title">喵星人专区</h1>
            </div>
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

