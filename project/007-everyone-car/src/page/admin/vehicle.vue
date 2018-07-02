<style>

.admin-conent {
    padding:0 35px;
}

.vehicle-list table {
    border-collapse: collapse;
    width: 100%;
    text-align: left;
}

.vehicle-list table tr {
    border-bottom: 1px solid #ebeef5;
}

.vehicle-list table tr th,
.vehicle-list table tr td {
    padding: 10px 0;
}

.vehicle-list table .tb-actived {
    font-size: 1.2rem;
    color: #606266;
}

.vehicle-list table tr td {
    font-size: 1.1rem;
}

.vehicle-list table .tb-active:hover {
    background: #f5f7fa;
}


.vehicle-list table tr .pick {
    text-align: center;
}

.vehicle-list table tr button {
    font-size: 12px;
    padding: 7px 15px;
}

.operating-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom:0;
    background: rgba(0,0,0,.2);
}

.operating-wrapper form {
    position: absolute;
    top: 10%;
    right: 40%;
    width: 20%;
    background: #f5f5f5;
    padding: 40px;
}


.operating-wrapper input,
.operating-wrapper button
 {
    width: 100%;
    margin: 5px 0 12px 0;
}



.input-control label {
    display: block;
}

.pagination {
    text-align: center;
    margin-top: 20px;
}

.pagination > * {
    margin-right: 10px;
}



</style>

<template>
    <div>
        <AdminNav/>  
            <div class="row">
                <div class="col-lg-1">
                    <AdminSidebarNav/>
                </div>
                <div class="col-lg-11">
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
                                            <button @click="modify(row)">修改</button>
                                            <button @click="remove(row.id)">删除</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Pagination :list="3" :totalCount="total" :onChange="changPage"/>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    import Pagination from "../../components/pagination.vue";
    import AdminNav from "../../components/adminNav.vue";
    import AdminSidebarNav from "../../components/adminSidebarNav.vue";
    import api from '../../lib/api.js'

    export default {
        components: {
            Pagination,
            AdminNav,
            AdminSidebarNav
        },
        data() {
            return {
                total: 0,
                showForm: false,
                showBtn: false,
                keyword: '',
                current: {},
                list: [],
                currentPage: '',
                lastPage: '',
            }
        },
        methods: {
            changPage(page) {
                this.read(page);
            },
            cRoR(e) {
                
                let action = this.current.id ? 'update' : 'create'

                e.preventDefault();
                
                api(`vehicle/${action}`, this.current)
                    .then( res => {
                        this.read(this.currentPage);                         
                    });
            },
            read(page) {
                if(page == this.currentPage){
                    
                    return;
                }
                api('vehicle/read', {limit : 3, page : page})
                    .then( res => {
                        this.total = res.total;
                        this.list = res.data;
                        this.lastPage = res.last_page;
                        this.currentPage = res.current_page;
                    });                    
            },
            remove(id) {
                api('vehicle/delete', {id: id})
                    .then( res => {
                        this.read();
                    });
            },
            search(e) {
                e.preventDefault();
                let kwd = this.keyword;

                let param = {
                    or: {
                        designId: kwd,
                        modelId: kwd
                    },
                };

                api('vehicle/search', param)
                    .then( res => {
                        this.list = res.data;
                    });
            },
            modify(row) {
                this.current = row;
                this.showForm = true;
                this.showBtn = true;
            }


        },

        mounted() {
            this.read();
        }
    }
</script>

