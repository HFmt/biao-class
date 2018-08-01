
<style scoped>
.main {
    margin-top: 90px;
}
.main .title {
    margin-bottom: 20px;
}

.main table {
    width: 100%;
}

.main table th,
.main table td {
    padding: 20px;
    border: 1px solid #cdcdcd;
}

.order-list {
    margin-bottom: 40px;
}

.submit-order .title {
    background: #FDA30E;
    color: #fff;
    padding: 12px;
}

.submit-order {
    border: 1px solid #cdcdcd;
}

.submit-order ul {
    padding: 10px;
}

.submit-order li {
    padding: 15px 10px 5px;
    margin-bottom: 5px;
}

</style>

<template>
    <div>
        <Header defName="cart" />
        <div class="main">
            <div class="container">
                <div class="title tac">
                    <h2>我的购物车</h2>
                </div>
                <div class="order-list tac">
                    <table>
                        <thead>
                            <tr>
                                <th>删除</th>
                                <th>产品</th>
                                <th>数量</th>
                                <th>名称</th>
                                <th>价格</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in list.cart" :key="index">
                                <td>
                                    <i class="fa fa-times" aria-hidden="true"></i>
                                </td>
                                <td>
                                    {{item.pet_id}}
                                </td>
                                <td>
                                    
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {{list}}
                <div class="col-lg-9"></div>
                <div class="col-lg-3  submit-order">
                    <div class="title tac">
                        <h3>购物车</h3>
                    </div>
                    <ul class="li-db">
                        <li>
                            <span>橘猫：</span>
                            <span>￥1</span>
                        </li>
                        <li>
                            <span>缅因猫：</span>
                            <span>￥1</span>
                        </li>
                        <li>
                            <span>英短：</span>
                            <span>￥1</span>
                        </li>
                        <li>
                            <span>总价：</span>
                            <span>￥3</span>
                        </li>
                    </ul>
                    <span @click="test()" class="hvr-outline col-lg-12 tac">提交订单</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "../lib/api"
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
            list:  toolCart.cartlist()
        };
    },
    mounted() {
        console.log('this.list:', this.list);
        
        
    },
    computed: {

    },
    methods: {
        test () {
        console.log('this.list:', this.list);

        }
    }
};
</script>

