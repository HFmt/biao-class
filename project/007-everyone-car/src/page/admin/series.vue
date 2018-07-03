<style>
</style>

<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="admin-conent">
                    <div class="title">
                        <h2>车系管理</h2>
                    </div>
                    <div class="add-vihecle">
                        <button @click="showForm = true">添加车系</button>
                    </div>
                    <form @submit="search($event)" action="">
                        <input type="search" v-model="keyword" placeholder="搜索车系">
                        <button type="submit">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </form>
                    <div v-if="showForm" class="operating-wrapper">
                        <form @submit="cRoR($event)" action="">
                            <div class="input-control">
                                <label for="">车系</label>
                                <input type="text" v-model="current.name">
                            </div>
                            <div class="col input-control">
                                <DropDown :list="brandList" :onSelect="setBrandId" defaultSelect="品牌" />
                            </div>
                            <div class="col input-control">
                                <DropDown :list="modelList" :onSelect="setModelId" defaultSelect="车型" />
                            </div>
                            <div class="input-control">
                                <div class="btn-group">
                                    <button type="submit">
                                        <span v-if="showBtn">确认</span>
                                        <span v-else>添加</span>
                                    </button>
                                    <button @click.stop="showForm = false; showBtn = false" type="button">取消</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="vehicle-list">
                        <table>
                            <thead>
                                <tr class="tb-actived">
                                    <th class="pick"><input type="checkbox" name="" id=""></th>
                                    <th>车系</th>
                                    <th>品牌</th>
                                    <th>车型</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="tb-active" v-for="(row, index) in list" :key="index">
                                    <td class="pick"><input type="checkbox"></td>
                                    <td>{{row.name}}</td>
                                    <td>{{row.$brand ? row.$brand.name : '-'}}</td>
                                    <td>{{row.$model ? row.$model.name : '-'}}</td>
                                    <td class="vehicle-edit">
                                        <button @click="modify(row)" class="modify">修改</button>
                                        <button @click="remove(row.id)" class="delete">删除</button>
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
import AdminPage from "../../mixins/adminPage.vue";
import DropDown from "../../components/dropDown";
import api from "../../lib/api.js";

export default {
    components: { DropDown },
    created() {
        this.model = "series";
    },
    data() {
        return {
            model: "series",
            brandList: [],
            modelList: [],
            searchable: ["name", "model_id"],
            with: [
                { model: "brand", type: "has_one" },
                { model: "model", type: "has_one" }
            ]
        };
    },
    methods: {
        brandRead() {
            api("brand/read").then(res => {
                this.brandList = res.data;
            });
        },
        modelRead() {
            api("model/read").then(res => {
                this.modelList = res.data;
            });
        },
        setBrandId(row) {
            this.$set(this.current, "brand_id", row.id);
        },
        setModelId(row) {
            this.$set(this.current, "model_id", row.id);
        }
    },
    mounted() {
        this.brandRead();
        this.modelRead();
    },
    mixins: [AdminPage]
};
</script>

