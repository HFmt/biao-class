
<style scoped>
.main {
    margin-top: 90px;
}
.main .title {
    margin-bottom: 20px;
}

.order-list {
    margin-bottom: 40px;
}

.submit-order .title {
    background: #fda30e;
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
                                <th>
                                    <input @click="toggleAll" type="checkbox" name="" id="" v-model="checkedAll"> 全选
                                </th>
                                <th>删除</th>
                                <th>产品</th>
                                <th>名称</th>
                                <th>单价</th>
                                <th>数量</th>
                                <th>金额</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in list.cart" :key="index">
                                <td>
                                    <input type="checkbox" name="" id="" v-model="item._checked">
                                </td>
                                <td>
                                    <span @click="removeCartItem(item.id)" class="cp">
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </span>
                                </td>
                                <td>
                                    <img :src="item.$pet && item.$pet.cover_url" alt="">
                                </td>
                                <td>
                                    {{item.$pet && item.$pet.title}}

                                </td>
                                <td>
                                    {{item.$pet && item.$pet.price}}
                                </td>
                                <td>
                                    {{item.count}}
                                </td>
                                <td>
                                    {{item.$pet && item.$pet.price * item.count}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-lg-9"></div>
                <div class="col-lg-3  submit-order">
                    <div class="title tac">
                        <h3>购物车</h3>
                    </div>
                    <ul class="li-db">
                        <li>
                            <span>已选商品：一件</span>
                        </li>
                        <li>
                            <span>总价：</span>
                            <span>￥{{totalPrice}}</span>
                        </li>
                    </ul>
                    <span class="hvr-btn col-lg-12 tac">结算</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "../css/user.css";
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
            list: toolCart.cartlist(),
            check: toolCart.cartCheck(),
            checkedAll: false
        };
    },
    mounted() {},
    computed: {
        totalPrice() {
            let cartList = this.list.cart;
            let totalPrice = 0;
            let totalCount = 0;

            for (let id in cartList) {
                let item = cartList[id];

                if (!item._checked) {
                    continue;
                }
                totalCount++;
                totalPrice += item.$pet.price * item.count;
            }

            return {totalPrice, totalCount};
        },
        totalCount() {
            let cartList = this.list.cart;
            let totalCount = 0;
            for (let id in cartList) {
                let item = cartList[id];
                if (item._checked) {
                    ;
                }
            console.log("totalCount:", totalCount);
            }
            return totalCount;
        }
    },
    methods: {
        removeCartItem: toolCart.remove,
        // toggleAll: toolCart.toggleAll,

        addOrder() {},
        toggleAll() {
            let cartList = this.list.cart;
            for (let id in cartList) {
                let item = cartList[id];
                this.$set(item, "_checked", !this.checkedAll);
            }
        }
    }
};
</script>

