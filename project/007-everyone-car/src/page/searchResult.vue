
<style scoped>
.filter-list .prop {
    text-align: center;
    font-size: 1.1rem;
}

.filter-list .filter > * {
    padding: 25px;
    vertical-align: middle;
}

.filter-list .filter > * > * {
    margin-right: 15px;
}

.filter-list .filter .range > * {
    font-size: 1.1rem;
}

.filter-list .filter .sort > * {
    cursor: pointer;
}

.filter-list .filter .sort > *:hover {
    color: #f44336;
}

.price-range {
    display: inline-block;
    width: 180px;
    font-size: 1rem;
}

.price-range input,
.price-range button {
    padding: 2px;
    width: 28%;
    margin: -3px 0;
}

/* .active{ 
    background: #ccc;
} */
</style>

<template>
    <div>
        <GlobalNav/>
        <SearchBar :onSubmit="onSubmit" />
        <div class="container">
            <div class="filter-list">
                <div class="row filter">
                    <div class="col-lg-1 prop">
                        <div>品牌</div>
                    </div>
                    <div class="col-lg-10 range sort">
                        <span :class="{'active': !searchParam.brand_id}" @click="removeQuery('brand_id')">不限</span>
                        <span :class="{'active': searchParam.brand_id == item.id}" @click="setQueryWhere('brand_id', item.id)" v-for="(item, index) in brandList" :key="index">{{item.name}}</span>
                    </div>
                    <div class="col-lg-1 prop">
                        <div class="all-type">全部</div>
                    </div>
                </div>
                <div class="row filter">
                    <div class="col-lg-1 prop">
                        <div>车型</div>
                    </div>
                    <div class="col-lg-10 range sort">
                        <span :class="{'active': !searchParam.model_id}" @click="removeQuery('model_id')">不限</span>
                        <span :class="{'active': searchParam.model_id == item.id}"
                        @click="setQueryWhere('model_id', item.id)"
                         v-for="(item, index) in modelList" :key="index">{{item.name}}</span>
                    </div>
                    <div class="col-lg-1 prop">
                        <div class="all-type">全部</div>
                    </div>
                </div>
                <div class="row filter">
                    <div class="col-lg-1 prop">
                        <div>价格</div>
                    </div>
                    <div class="col-lg-10 range">
                        <a href="#">3万以下</a>
                        <a href="#">3-5万</a>
                        <a href="#">5-7万</a>
                        <a href="#">7-9万</a>
                        <a href="#">9-12万</a>
                        <a href="#">12-16万</a>
                        <a href="#">16-20万</a>
                        <a href="#">20万以上</a>
                        <div class="price-range">
                            <input type="text" name="" id="">-
                            <input type="text" name="" id="">
                            <span>万</span>
                            <button>确认</button>
                        </div>
                    </div>
                    <div class="col-lg-1 prop">
                        <div class="all-type">全部</div>
                    </div>
                </div>
                <div class="row filter">
                    <div class="col-lg-1 prop">
                        <div>更多</div>
                    </div>
                    <div class="col-lg-10 range">
                        <DropDown :list="modelList" defaultSelect="车型" />
                    </div>
                    <div class="col-lg-1">
                        <div class="all-type prop">全部</div>
                    </div>x
                </div>
                <div class="row filter">
                    <div class="col rang sort">
                        <span @click="removeQuery('sort_by')">默认排序</span>
                        <span @click="toggleSort('id')">时间
                            <i class="fa fa-arrow-down" aria-hidden="true"></i>
                        </span>
                        <span @click="toggleSort('price')">价格
                            <i class="fa fa-arrow-down" aria-hidden="true"></i>
                        </span>
                        <span>里程
                            <i class="fa fa-arrow-down" aria-hidden="true"></i>
                        </span>
                        <span>车龄
                            <i class="fa fa-arrow-down" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
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
            <Pagination :limit="limit" :totalCount="total" :onChange="changPage" :searchCurrentPage="searchParam.page" />
        </div>
    </div>
</template>

<script>
import api from "../lib/api.js";
import "../css/wehicle-list.css";
import jsonFormat from "../lib/jsonFormat.js";
import VehicleCardList from "../mixins/vehicleCardList.vue";
import GlobalNav from "../components/globalNav.vue";
import DropDown from "../components/dropDown.vue";
import SearchBar from "../components/searchBar.vue";
import Pagination from "../components/pagination.vue";

export default {
    components: {
        GlobalNav,
        SearchBar,
        DropDown,
        Pagination
    },
    mounted() {
        this.read("brand");
        this.read("model");
        this.prepareSearchParam();
        this.search();
    },
    data() {
        return {
            limit: 2,
            total: null,
            brandList: [],
            modelList: [],
            cardList: [],
            searchParam: {}
        };
    },
    methods: {
        isSort(property, direction) {
            let p = this.searchParam;
            if (!p.sortBy) return false;
        },
        parseRouteQuery() {
            let query = jsonFormat.parse(this.$route.query);
            if (!query.sort_by) {
                query.sort_by = ["id", "down"];
            } 
            if(typeof query.sort_by == 'string') {
                
                query.sort_by = query.sort_by.split(",");
            }
            return query;
        },
        prepareSearchParam() {
            let query = this.parseRouteQuery();
            this.searchParam = query;
        },
        toggleSort(property) {
            let query = this.parseRouteQuery();

            let sortProp = query.sort_by[0];
            let direction = query.sort_by[1];
            if (sortProp == property) {
                query.sort_by[1] = direction == "up" ? "down" : "up";
            } else {
                query.sort_by[0] = property;
                query.sort_by[1] = "down";
            }

            query.sort_by = query.sort_by.toString();

            this.$router.replace({ query });
        },
        removeQuery(type) {
            let query = this.searchParam;
            delete query[type];
            this.$router.replace({query});
        },
        setQueryWhere(type, value) {
            let condition = {};
            condition[type] = value;
            let _old = this.searchParam;

            let _new = Object.assign({}, _old, condition);

            this.$router.replace({ query: _new });
        },
        setCondition(type, val) {
            let query = jsonFormat.parse(this.$route.query);
            switch (type) {
                case "sort":
                    query.sort_by = val;
                    break;
                case "page":
                    query.page = val;
                    break;
                default:
                    break;
            }

            this.$router.replace({ query });

            // this.search();
        },
        select(row) {
            console.log("row:", row);
        },
        read(model) {
            api(`${model}/read`).then(res => {
                this[`${model}List`] = res.data;
            });
        },
        onSubmit() {
            this.search();
        },
        changPage(page) {
            this.setCondition("page", page);
        },
        search(page) {
            let p = this.searchParam;

            let brand_query = "",
                series_query = "";

            p.brand_id && (brand_query = `and "brand_id" = ${p.brand_id}`);
            p.model_id && (series_query = `and "model_id" = ${p.model_id}`);
            let query = `where("title" contains "${p.keyword ||
                ""}" ${brand_query} ${series_query})`;

            api("vehicle/read", {
                query: query,
                sort_by: p.sort_by,
                page: p.page,
                limit: this.limit
            }).then(res => {
                this.total = res.total;
                this.cardList = res.data;
            });
        }
    },
    watch: {
        "$route.query": {
            deep: true,
            handler(query) {
                this.prepareSearchParam();
                this.search();
            }
        }
    },
    mixins: [VehicleCardList]
};
</script>

