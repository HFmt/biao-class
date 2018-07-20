<style scoped>
.input-grounp .parts {
    width: 20%;
}
.input-grounp .parts-url {
    width: 70%;
}
.input-grounp button {
    width: 10%;
}
.input-control .date-input {
    padding: 9px;
}
</style>


<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="admin-conent">
                    <div class="title">
                        <h2>上架车辆管理</h2>
                    </div>
                    <div class="add-vihecle">
                        <button @click="addInformation">添加车辆数据</button>
                    </div>
                    <form @submit="search($event)" action="">
                        <input type="search" v-model="keyword" placeholder="搜车型/车系">
                        <button type="submit">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </form>
                    <div v-if="showForm" @click.self="showForm = false; showBtn = false" class="operating-wrapper">
                        <form @submit="cRoR($event)" action="">
                            <div class="input-control">
                                <label for="">标题</label>
                                <div id="title-error"></div>
                                <input class="col-lg-6" type="text" v-validator="'required|max_length:25'" error-el="#title-error" error-lang='zh' v-model="current.title">
                            </div>
                            <div class="col-lg-4 input-control">
                                <label for="">品牌</label>
                                <DropDown 
                                :api="'brand.name'"
                                :list="brandList" :onSelect="setBrandId" defaultSelect="品牌" />
                            </div>
                            <div class="col-lg-4 input-control">
                                <label for="">车系</label>
                                <DropDown :list="seriesList" :onSelect="setSeriesId" defaultSelect="车系" />
                            </div>
                            <div class="col-lg-4 input-control">
                                <label for="">车型</label>
                                <DropDown :list="modelList" :onSelect="setModelId" defaultSelect="车型" />
                            </div>
                            <div class="input-contro">
                                <label for="">封面地址</label>
                                <div class="input-grounp" v-for="(item, index) in current.preview" :key="index">
                                    <input class="parts" type="text" placeholder="部位" v-model="item.name">
                                    <input class="parts-url" type="text" placeholder="图片地址" v-model="item.url">
                                    <button @click="current.preview.splice(index, 1)" type="button">-</button>
                                </div>
                                <button class="col-lg-12" @click="current.preview.push({})" type="button">+</button>
                            </div>
                            <div class="col-lg-4 input-control">
                                <label for="">当前里程</label>
                                <div id="consumed_dishtance-error"></div>
                                <input type="number" v-validator="'positive'" error-el="#consumed_dishtance-error" error-lang='zh' v-model="current.consumed_dishtance">
                            </div>
                            <div class="col-lg-4 input-control">
                                <label for="">价格</label>
                                <div id="price-error">
                                </div>
                                <input type="number" v-validator="'positive'" error-el="#price-error" error-lang='zh' v-model="current.price">
                            </div>
                            <div class="col-lg-4 input-control">
                                <label for="">预计出售日期</label>
                                <input class="date-input" type="date" v-model="current.deadline">
                            </div>
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
                                    <th class="pick"> <input type="checkbox" name="" id=""> </th>
                                    <th>标题</th>
                                    <th>品牌</th>
                                    <th>车系</th>
                                    <th>车型</th>
                                    <th>当前里程</th>
                                    <th>价格</th>
                                    <th>发布人</th>
                                    <th>预计出售日期</th>
                                    <th>发布日期</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="tb-active" v-for="(row,index) in list" :key="index">
                                    <td class="pick"><input type="checkbox"> </td>
                                    <td>{{row.title}}</td>
                                    <td>{{row.$brand ? row.$brand.name : '-'}}</td>
                                    <td>{{row.$series ? row.$series.name : '-'}}</td>
                                    <td>{{row.$model ? row.$model.name : '-'}}</td>
                                    <td>当前里程</td>
                                    <td>{{row.price}}万</td>
                                    <td>{{row.publisherId}}</td>
                                    <td>{{row.deadline}}</td>
                                    <td>2018-6-30</td>
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
import api from "../../lib/api.js";
import AdminPage from "../../mixins/adminPage.vue";
import DropDown from "../../components/dropDown";

export default {
    components: { DropDown },
    created() {
        this.model = "vehicle";
    },

    data() {
        return {
            current: {
                preview: []
            },
            model: "vehicle",
            brandList: [],
            modelList: [],
            seriesList: [],
            searchable: ["title", "price"],
            with: [
                { model: "brand", type: "has_one" },
                { model: "model", type: "has_one" },
                { model: "series", type: "has_one" }
            ]
        };
    },
    methods: {
        addInformation() {
            this.showForm = true;
            this.current.preview = [{}];
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
            });
        },
        modelRead() {
            api("model/read").then(res => {
                this.modelList = res.data;
            });
        },
        setBrandId(row) {
            this.seriesRead(row.id);
            this.$set(this.current, "brand_id", row.id);
        },
        setSeriesId(row) {
            this.$set(this.current, "series_id", row.id);
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

