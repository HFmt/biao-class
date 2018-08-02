<style scoped>
</style>

<template>
    <div>
        <Header defName="order" />
        <div class="order-list taf">
            <div class="container">
                <div class="title-wrap">
                    <ul>
                        <li class="col-lg-1">
                            <span class="cp">2018-7-27</span>
                        </li>
                        <li class="col-lg-6">
                            <span class="cp">订单号: 189492043926891119</span>
                        </li>
                        <li class="col-lg-3">
                            <span class="cp">和我联系</span>
                        </li>
                        <li class="col-lg-2 tar">
                            <span class="cp">删除订单</span>
                        </li>
                    </ul>
                </div>
                <table class="tac">
                    <tbody>
                        <tr>
                            <td>
                                <div class="row thumb">
                                    <img src="http://placekitten.com/120/100" alt="">
                                </div>
                            </td>
                            <td>
                                萌萌的橘猫
                            </td>
                            <td>
                                价格 1 元
                            </td>
                            <td>
                                申请售后
                            </td>
                            <td>
                                <p>总价1元</p>
                                <p>(含运费:￥0.00)</p>
                            </td>
                            <td>
                                <p>交易成功</p>
                                <p>订单详情</p>
                            </td>
                            <td>
                                <p>评论</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import "../css/user.css"
import Header from "../components/Header";

export default {
    components: {
        Header
    },
    data() {
        return {};
    }
};
</script>