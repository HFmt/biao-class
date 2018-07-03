<style></style>


<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="admin-conent">
                    <div class="title">
                        <h2>上架车辆管理</h2>
                    </div>
                    <div class="add-vihecle">
                        <button @click="showForm = true">添加车辆数据</button>
                    </div>
                        <form @submit="search($event)"  action="">
                            <input type="search" v-model="keyword" placeholder="搜车型/车系">
                            <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                    <div v-if="showForm" class="operating-wrapper">
                        <form @submit="cRoR($event)" action="">
                            <div class="input-control">
                                <label for="">标题</label>
                                    <input type="text" v-model="current.title">
                            </div>
                            <div class="input-control">
                                <label for="">价格</label>
                                    <input type="number" v-model="current.price">
                            </div>
                            <div class="input-control">
                                <label for="">预计出售日期</label>
                                    <input type="text" v-model="current.deadline">
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
                                    <th class="pick"> <input type="checkbox" name="" id=""> </th>
                                    <th>标题</th>
                                    <th>品牌</th>
                                    <th>车型</th>
                                    <th>车系</th>
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
                                    <td>{{row.brandId}}</td>
                                    <td>{{row.designId}}</td>
                                    <td>{{row.modelId}}</td>
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
                    <Pagination :limit="3" :totalCount="total" :onChange="changPage"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AdminPage from '../../mixins/adminPage.vue'

    export default {
        created() {
            this.model = 'vehicle';
        },
        data() {
            return {
                model: 'vehicle',
                searchable: ['title', 'price']
            }
        },
        mixins: [AdminPage]
    }
</script>

