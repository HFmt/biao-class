<style>
</style>

<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="admin-conent">
                    <div class="title">
                        <h2>检测管理</h2>
                    </div>
                    <div class="add-vihecle">
                        <button @click="showForm = true">添加检测数据</button>
                    </div>
                    <form @submit="search($event)" action="">
                        <input type="search" v-model="keyword" placeholder="">
                        <button type="submit">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </form>
                    <div v-if="showForm" @click.self="showForm = false; showBtn = false" class="operating-wrapper">
                        <form @submit="cRoR($event)" action="">
                            <div class="input-control">
                                <div class="btn-group">
                                    <div class="text-right">
                                        <div class="col-lg-1 ">
                                            <button class="cancle" @click.stop="showForm = false; showBtn = false" type="button">取消</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div>共有{{totalChek}}条数据</div>
                            <div class="col-lg-4 input-control">
                                <label for="">选择车辆</label>
                                <DropDown :list="vehicleList" :onSelect="setVehicleId" displayKey="title" defaultSelect="标题" titleKey='title' />
                            </div>
                            <div class="col-lg-4 input-control">
                                <label for="">所属人</label>
                                <DropDown :list="userList" :onSelect="setUserId" displayKey="username" defaultSelect="标题" titleKey='username' />
                            </div>
                            <div class="col-lg-4 input-control">
                                <label for="">品牌</label>
                                <DropDown :list="brandList" :onSelect="setBrandId" :displayKey="displayKey" defaultSelect="品牌" />
                            </div>
                            <div class="col-lg-4 input-control">
                                <label for="">车系</label>
                                <DropDown :list="seriesList" :onSelect="setSeriesId" :displayKey="seriesKey" defaultSelect="车系" />
                            </div>
                            <div class="col-lg-4 input-control">
                                <label for="">车型</label>
                                <DropDown :list="modelList" :onSelect="setModelId" :displayKey="displayKey" defaultSelect="车型" />
                            </div>
                            <fieldset :disabled="!current.series_id || !current.model_id">
                                <div class="col-lg-6">
                                    <button type="button" @click="check=!check; checkedAll()">全选</button>
                                </div>
                                <div class="col-lg-6">
                                    <button type="button" @click="checkedRand()" class="col-lg-6">随机选择</button>
                                </div>
                                <div>
                                </div>
                                <div v-if="(item.display_name)" v-for="(item, index) in structure" :key="index" class="input-control col-lg-4">
                                    <label for="" class="col">{{item.display_name}}
                                        <input type="checkbox" v-model="current[index]">
                                    </label>
                                </div>
                            </fieldset>
                            <div class="input-control">
                                <div class="btn-group">
                                    <div class="col-lg-6">
                                        <button class="submit" type="submit">
                                            <span v-if="showBtn">确认</span>
                                            <span v-else>添加</span>
                                        </button>
                                    </div>
                                    <div class="col-lg-6">
                                        <button class="cancle" @click.stop="showForm = false; showBtn = false" type="button">取消</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="vehicle-list">
                        <table>
                            <thead>
                                <tr class="tb-actived">
                                    <th class="pick"> <input type="checkbox"> </th>
                                    <th>检测车辆</th>
                                    <th>品牌</th>
                                    <th>车系</th>
                                    <th>车型</th>
                                    <th>所属人</th>
                                    <th>完好项</th>
                                    <th>完好率</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="tb-active" v-for="(item,index) in list" :key="index">
                                    <td class="pick"><input type="checkbox"> </td>
                                    <td>{{item.$vehicle ? item.$vehicle.title : '-'}}</td>
                                    <td>{{item.$brand ? item.$brand.name : '-'}}</td>
                                    <td>{{item.$series ? item.$series.name : '-'}}</td>
                                    <td>{{item.$model ? item.$model.name : '-'}}</td>
                                    <td>{{item.$user ? item.$user.username : '-'}}</td>
                                    <td>{{computePassed(item)}}</td>
                                    <td>{{((computePassed(item) / totalChek)*100).toFixed(2)+'%'}}</td>
                                    <td class="vehicle-edit">
                                        <button @click="modify(item)" class="modify">修改</button>
                                        <button @click="remove(item.id)" class="delete">删除</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Pagination :limit="limit" :totalCount="total" :onChange="changPage" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "../../lib/api";
import DropDown from "../../components/dropDown";
import AdminPage from "../../mixins/adminPage.vue";

export default {
    components: {
        DropDown
    },
    created() {
        this.model = "report";
    },
    mounted() {
        this.vehicleRead();
        this.brandRead();
        this.userRead();
        this.modelRead();
        this.getStructure();
    },
    data() {
        return {
            displayKey: "name",
            seriesKey: "name",
            model: "report",
            structure: {},
            vehicleList: [],
            userList: [],
            brandList: [],
            seriesList: [],
            modelList: [],
            check: false,
            totalChek: 0,
            with: [
                { model: "vehicle", relation: "has_one" },
                { model: "user", relation: "has_one" },
                { model: "brand", relation: "has_one" },
                { model: "model", relation: "has_one" },
                { model: "series", relation: "has_one" }
            ]
        };
    },
    methods: {
        test() {
            console.log('1:', 1);
            
        },
        compputeTotal() {
            let sum = 0;
            this.eachProp(prop => {
                prop.display_name && sum++;
            });
            this.totalChek = sum;
        },
        computePassed(item) {
            let sum = 0;
            item = item || this.current;
            this.eachProp((prop, key) => {
                prop.display_name && item[key] && sum++;
            });
            return sum;
        },
        eachProp(fn) {
            for (let key in this.structure) {
                let prop = this.structure[key];

                if (fn) fn(prop, key);
            }
        },
        checkedAll() {
            this.eachProp((prop, key) => {
                if (!prop.display_name) return;

                this.$set(this.current, key, this.check);
            });
        },
        checkedRand() {
            this.eachProp((prop, key) => {
                if (!prop.display_name) return;
                this.$set(this.current, key, Math.random() >= 0.5);
            });
        },
        getStructure() {
            api("MODEL/FIND", { name: "report" }).then(res => {
                this.structure = res.data.structure;
                this.compputeTotal();
            });
        },
        vehicleRead() {
            api("vehicle/read").then(res => {
                this.vehicleList = res.data;
                console.log("res.data:", res.data);
            });
        },
        userRead() {
            api("user/read").then(res => {
                this.userList = res.data;
            });
        },
        brandRead() {
            api("brand/read").then(res => {
                this.brandList = res.data;
            });
        },
        seriesRead(brandId) {
            api("series/read", {
                where: {
                    and: {
                        brand_id: brandId
                    }
                }
            }).then(res => {
                this.seriesList = res.data;
                if (!this.seriesList.length) {
                    this.seriesKey = "";
                }
            });
        },
        modelRead() {
            api("model/read").then(res => {
                this.modelList = res.data;
            });
        },
        setVehicleId(row) {
            this.$set(this.current, "vehicle_id", row.id);
        },
        setUserId(row) {
            this.$set(this.current, "user_id", row.id);
        },
        setBrandId(row) {
            this.seriesKey = "";
            this.$set(this.current, "series_id", null);
            this.seriesRead(row.id);
            this.$set(this.current, "brand_id", row.id);
        },
        setSeriesId(row) {
            this.$set(this.current, "series_id", row.id);
            this.seriesKey = "name";
        },
        setModelId(row) {
            this.$set(this.current, "model_id", row.id);
        }
    },
    mixins: [AdminPage]
};
</script>

