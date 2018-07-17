<style>
</style>

<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="admin-conent">
                    <div class="title">
                        <h2>品牌管理</h2>
                    </div>
                    <div class="add-vihecle">
                        <button @click="showForm = true">添加品牌</button>
                    </div>
                    <form @submit="search($event)" action="">
                        <input type="search" v-model="keyword" placeholder="搜索品牌">
                        <button type="submit">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </form>
                    <div v-if="showForm" @click.self="showForm = false; showBtn = false" class="operating-wrapper">
                        <form @submit="cRoR($event)" action="">
                            <div class="input-control">
                                <label for="">品牌名称</label>
                                <input type="text" v-model="current.name">
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
                                    <th>品牌名称</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="tb-active" v-for="(row,index) in list" :key="index">
                                    <td class="pick"><input type="checkbox"> </td>
                                    <td>{{row.name}}</td>
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

export default {
    created() {
        this.model = "brand";
    },
    data() {
        return {
            model: "brand",
            searchable: ["name"]
        };
    },
    mixins: [AdminPage]
};
</script>

