<template>
    <div>
        <GlobalNav/>
        <div class="container">
            <div class="slider">
                <img src="//img1.rrcimg.com/dist/pc/images/sem-banner1-ca39fffb.png" alt="">
            </div>
            <div class="query-area">
                <div class="col-lg-7 buy-wrapper">
                    <div class="col-lg-2">
                        <a href="#" class="merchandise">
                            <div class="huge-font">买</div>
                            <div>1年/2万公里质保</div>
                        </a>
                    </div>
                    <div class="col-lg-10">
                        <div class="row-padding">
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                        </div>
                        <div class="row-padding">
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                        </div>
                        <div class="row-padding">
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                            <a href="#" class="tag">item</a>
                        </div>
                        <div class="col-lg-6 row-padding">
                            <form action="">
                                <input type="search" name="" id="" placeholder="请输入关键字">
                                <button type="submit">搜索</button>
                            </form>
                        </div>

                    </div>
                    <div class="thumber">
                        <img src="//img1.rrcimg.com/dist/pc/images/sem-1-44a09bdf.png" alt="">
                    </div>
                </div>
                <div class="col-lg-5 sell-wrapper">
                    <div class="col-lg-4">
                        <a href="#" class="merchandise">
                            <div class="huge-font">卖</div>
                            <div>平均7天售出</div>
                        </a>
                    </div>
                    <div class="col-lg-8">
                        <div class="row-padding">
                            <div>急速卖车</div>
                            <form action="">
                                <input type="nubmer" placeholder="请输入手机号">
                                <button type="submit">帮我卖车</button>
                            </form>
                            <div class="choice">
                                <span>后续计划</span>
                            </div>
                        </div>
                    </div>
                    <div class="thumber">
                        <img src="//img1.rrcimg.com/dist/pc/images/sem-2-79db1c36.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="vehicle">
                <div class="vehicle-nav">
                    <div class="col-lg-2">
                        <router-link to="searchResult" href="#">特价好车</router-link>
                    </div>

                    <div class="col-lg-2">
                        <router-link to="searchResult" href="#">特价好车</router-link>
                    </div>

                    <div class="col-lg-2">
                        <router-link to="searchResult" href="#">特价好车</router-link>
                    </div>

                    <div class="col-lg-2">
                        <router-link to="searchResult" href="#">特价好车</router-link>
                    </div>

                    <div class="col-lg-2">
                        <router-link to="searchResult" href="#">特价好车</router-link>
                    </div>

                    <div class="col-lg-2">
                        <router-link to="searchResult" href="#">特价好车</router-link>
                    </div>

                </div>
                <div class="vehicle-list">
                    <div class="col-lg-3 row-mrg">
                        <div class="">
                            <router-link to="/detail" href="#" class="row">
                                <img src="//img2.rrcimg.com/o_1cgr90a8e330993051447853708856301.jpg?imageView2/2/interlace/1/w/290/h/192/format/webp"
                                     alt="">
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-3 row-mrg">
                        <div class="">
                            <router-link to="/detail" href="#" class="row">
                                <img src="//img2.rrcimg.com/o_1cgr90a8e330993051447853708856301.jpg?imageView2/2/interlace/1/w/290/h/192/format/webp"
                                     alt="">
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-3 row-mrg">
                        <div class="">
                            <router-link to="/detail" href="#" class="row">
                                <img src="//img2.rrcimg.com/o_1cgr90a8e330993051447853708856301.jpg?imageView2/2/interlace/1/w/290/h/192/format/webp"
                                     alt="">
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-3 row-mrg">
                        <div class="">
                            <router-link to="/detail" href="#" class="row">
                                <img src="//img2.rrcimg.com/o_1cgr90a8e330993051447853708856301.jpg?imageView2/2/interlace/1/w/290/h/192/format/webp"
                                     alt="">
                            </router-link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>


    .merchandise {
        text-align: center;
        display: block;
        padding: 5px;
    }

    .slider,
    .query-area,
    .vehicle-nav {
        margin-top: 20px;
    }

    .huge-font {
        color: #ff5722;
        font-size: 5rem;
        font-weight: 900;
        padding-bottom: 15px;
    }

    .row-padding {
        padding: 15px 25px;
    }

    .buy-wrapper {
        border-right: 1px solid #eee;
    }

    .buy-wrapper input {

        border-right: 0;
    }

    .tag {
        padding-right: 15px;
    }

    .sell-wrapper input,
    .sell-wrapper button,
    .sell-wrapper .choice {
        margin-top: 18px;
    }

    .sell-wrapper input,
    .sell-wrapper button {
        width: 100%;
        padding: 15.2px;
    }

    .buy-wrapper .thumber {
        padding-right: 40px;
    }

    .sell-wrapper .thumber {
        padding-left: 40px;
    }

    .vehicle-nav a {
        display: block;
        text-align: center;
        font-size: 1.2rem;
        padding: 20px;
        color: #000;
        border: 1px solid #eee;
        border-right: 0;
    }

    .vehicle-nav a:last-child {
        border-right: 1px solid #eee;
    }

    .vehicle-nav a:hover {
        background: #000;
        color: #fff;
    }

    .vehicle-nav .more:hover {
        color: #ff5722;
        background: #fff;
    }


</style>


<script>
    import '../css/wehicle-list.css';
    import GlobalNav from '../components/globalNav.vue';

    export default {
        components: {
            GlobalNav
        }
    };
</script>

