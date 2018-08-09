
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

.filter-wrap li,
.sort-wrap li {
    margin: 0 20px 15px;
}

.filter-wrap .filter > * {
    padding: 15px;
    /* vertical-align: middle; */
}

.filter-wrap li:hover,
.sort-wrap li:hover {
    color: #fda30e;
} 




</style>

<template>
    <div>
        <Header :defName="defName" />
        <div class="page-head tac">
            <h1 class="title">{{titleName}}星人专区</h1>
        </div>
        <div class="main">
            <div class="container">
                <div class="filter-wrap">
                    <div class="row filter">
                        <div class="col-lg-1 title tac">
                            <span>品种</span>
                        </div>
                        <div class="col-lg-10">
                            <ul class="cp-all">
                                <li @click="removeQuery('breed_id')">
                                    <span>全部</span>
                                </li>
                                <li v-for="(item, index) in allList.breed" :key="index" @click="setQueryWhere('breed_id', item.id)">
                                    <span>{{item.name}}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-1 show-all tac cp">
                            <span>更多</span>
                        </div>
                    </div>
                    <div class="row filter">
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
                    <div class="row filter">
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
                    <div class="row filter">
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
                <div class="sort-wrap">
                    <ul class="cp-all">
                        <li>默认排序</li>
                        <li @click="toggleSort('price')">
                            <span >价格</span>
                            <i class="fa fa-arrow-down" aria-hidden="true"></i>
                        </li>
                        <li @click="toggleSort('id')">
                            <span >上架时间</span>
                            <i class="fa fa-arrow-down" aria-hidden="true"></i>
                        </li>
                    </ul>
                </div>
                <div class="tabs-content">
                    <div class="row">
                        <div v-for="(item, index) in allList.pet" :key="index" class="col-lg-3">
                            <div class="product-list tac">
                                <router-link :to="`detail/${item.id}`" class="product-item">
                                    <div class="product-thumb">
                                        <img :src="item.cover_url" alt="">
                                    </div>
                                    <div class="product-info">
                                        <span class="product-name">{{item.title}}</span>
                                        <div class="info-price">
                                            <span>￥{{item.price}}</span>
                                            <del>$1700</del>
                                        </div>
                                        <span @click="addItemCart(item.id)" class="hvr-btn  ">添加到购物车</span>
                                    </div>
                                </router-link>
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
import toolCart from "../hub/toolCart";
import jsonFormat from "../lib/jsonFormat";
export default {
    components: {
        Header
    },
    mixins: [ReadInfo],
    data() {
        return {
            titleName: null,
            defName: null,
            categoryId: null,
            searchParam: {},
            allList: {},
            with: [
                {
                    relation: "has_one",
                    model: "category"
                }
            ]
        };
    },
    mounted() {
        this.getCategoryId();

        this.gReadInfo("pet", {
            where: { category_id: this.categoryId }
        });

        this.gReadInfo("breed", {
            where: { category_id: this.categoryId }
        });
    },
    methods: {
        addItemCart: toolCart.add,
        parseRouteQuery() {
            let query = jsonFormat.parse(this.$route.query);
            if (!query.sort_by) {
                query.sort_by = ["id", "down"];
            }

            if (typeof query.sort_by == "string") {
                query.sort_by = query.sort_by.split(",");
            }

            return query;
        },
        prepareSearchParam() {
            let query = this.parseRouteQuery();
            this.searchParam = query;
        },
        setQueryWhere(itemType, itemId) {
            let condition = {};

            condition[itemType] = itemId;

            let _old = this.searchParam;
            let _new = Object.assign({}, _old, condition);

            this.$router.replace({ query: _new });
        },
        // 删除筛选条件
        removeQuery(itemType) {
            let query = this.parseRouteQuery();
            delete query[itemType];

            this.$router.replace({ query });
        },
        // 筛选搜索
        searchInfo() {
            let param = this.searchParam;
            let category_query = `"category_id" = ${this.categoryId}`;
            let breed_query = "";

            param.breed_id &&
                (breed_query = `and "breed_id" = ${param.breed_id}`);

            let query = `where(${category_query} ${breed_query})`;
            console.log("query:", query);

            this.gReadInfo("pet", { query, sort_by: param.sort_by });

            this.gReadInfo("breed", {
                query: `where(${category_query})`
            });
        },
        // 宠物列表排序
        toggleSort(property) {
            let query = this.parseRouteQuery();

            let sort_prop = query.sort_by[0];
            let direction = query.sort_by[1];

            if (sort_prop == property) {
                query.sort_by[1] = direction == "up" ? "down" : "up";
            } else {
                query.sort_by[0] = property;
                query.sort_by[1] = "down";
            }

            query.sort_by = query.sort_by.toString();
            this.$router.replace({ query });
        },
        getCategoryId() {
            let category = this.$route.params.category;
            switch (category) {
                case "cat":
                    this.defName = "searchCat";
                    this.titleName = "喵";
                    this.categoryId = 1;
                    break;
                case "dog":
                    this.defName = "searchDog";
                    this.titleName = "汪";
                    this.categoryId = 2;
                    break;
                default:
                    break;
            }
        }
    },
    watch: {
        "$route.query": {
            deep: true,
            handler() {
                this.prepareSearchParam();
                this.getCategoryId();
                this.searchInfo();
            }
        }
    }
};
</script>

