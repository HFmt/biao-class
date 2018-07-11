
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

.vehicle-nav span {
    display: block;
    cursor: pointer;
    text-align: center;
    font-size: 1.2rem;
    padding: 20px;
    color: #000;
    border: 1px solid #eee;
    border-right: 0;
}

.vehicle-nav span:last-child {
    border-right: 1px solid #eee;
}

.vehicle-nav span:hover {
    background: #000;
    color: #fff;
}

.vehicle-nav .more:hover {
    color: #ff5722;
    background: #fff;
}
</style>

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
                            <router-link v-for="(item, index) in brandList" :key="index" class="tag" to="/searchResult">
                                {{item.name}}
                            </router-link>
                        </div>
                        <div class="row-padding">
                            <router-link v-for="(item, index) in modelList" :key="index" class="tag" to="/searchResult">
                                {{item.name}}
                            </router-link>
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
                        <span @click="readCard('onSale')">特价好车</span>
                    </div>
                    <div class="col-lg-2">
                        <span @click="readCard('underFives')">五万以下</span>
                    </div>
                    <div class="col-lg-2">
                        <span @click="readCard('betweenFivesToTen')">五至十万</span>
                    </div>
                    <div class="col-lg-2">
                        <span @click="readCard('betweenTenToTwenty')">十至二十万</span>
                    </div>
                    <div class="col-lg-2">
                        <span @click="readCard('SUV')">SUV</span>
                    </div>
                    <div class="col-lg-2">
                        <span @click="readCard('deadline')">急售车辆</span>
                    </div>
                </div>
                <div class="vehicle-list">
                    <div v-for="(item, index) in cardList" :key="index" class="col-lg-3 row-mrg">
                        <div class="">
                            <router-link to="/detail" href="#">
                                <img :src="getVehicleCardList(item)" alt="">
                                <div class="detail">
                                    <div class="title">{{item.title}}</div>
                                    <div class="desc">2015年02月 / 3.07万公里</div>
                                    <div class="others">
                                        <span class="price">{{item.price}}万</span>
                                        <span>首付3.5万</span>
                                        <a class="btn btn-primary buy">购买</a>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>




<script>
import api from "../lib/api.js";
import "../css/wehicle-list.css";
import VehicleCardList from "../mixins/vehicleCardList.vue";
import GlobalNav from "../components/globalNav.vue";

export default {
    components: {
        GlobalNav
    },
    mounted() {
        this.read("brand");
        this.read("model");
        this.findModel("SUV");
        this.readCard("onSale");
    },
    data() {
        return {
            brandList: [],
            modelList: [],
            cardList: [],
            model: {}
        };
    },

    methods: {
        read(model) {
            api(`${model}/read`).then(res => {
                this[`${model}List`] = res.data;
            });
        },
        findModel(name) {
            let modelType = null;
            api("model/read", { name: name }).then(res => {
                res.data.forEach(item => {
                    if (item.name == "SUV") {
                        modelType = item;
                    }
                });
                this.model[name] = modelType;
            });
        },
        readCard(type) {
            let condition = {};

            switch (type) {
                case "onSale":
                    condition = {
                        where: {
                            and: {
                                on_sale: true
                            }
                        }
                    };
                    break;
                case "underFives":
                    condition = {
                        where: {
                            and: [["price", "<", 5]]
                        }
                    };
                    break;
                case "betweenFivesToTen":
                    condition = {
                        where: {
                            and: [["price", ">", 5], ["price", "<", 10]]
                        }
                    };
                    break;
                case "betweenTenToTwenty":
                    condition = {
                        where: {
                            and: [["price", ">", 10], ["price", "<", 20]]
                        }
                    };
                    break;
                case "SUV":
                    condition = {
                        where: {
                            and: {
                                model_id: this.model.SUV.id
                            }
                        }
                    };
                    break;
                case "deadline":
                    let date = new Date();
                    date.setDate(date.getDate() + 3);

                    date = date.toISOString().split("T")[0];
                    console.log("date:", date);
                    condition = {
                        query: `where("deadline" <= "${date}")`
                    };
                    break;
                default:
                    break;
            }

            api("vehicle/read", condition).then(res => {
                this.cardList = res.data;
                console.log("1:", 1);
            });
        }
    },

    mixins: [VehicleCardList]
};
</script>

