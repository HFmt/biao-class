<style>


</style>

<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="admin-conent">
                    <div class="title">
                        <h2>用户信息管理</h2>
                    </div>
                    <div class="add-vihecle">
                        <button @click="showForm = true">添加用户数据</button>
                    </div>
                        <form @submit="search($event)"  action="">
                            <input type="search" v-model="keyword" placeholder="搜用户名/昵称">
                            <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                    <div v-if="showForm" class="operating-wrapper">
                        <form @submit="cRoR($event)" action="">
                            <div class="input-control">
                                <label for="">用户名</label>
                                <div id="user-error"></div>
                                    <input type="text"
                                           v-validator="'required|min_length:4|max_length:14'"
                                           error-el="#user-error"
                                           error-lang='zh'
                                           v-model="current.username">
                            </div>
                            <div class="input-control">
                                <label for="">密码</label>
                                    <input type="text" v-model="current.password">
                            </div>
                            <div class="input-control">
                                <label for="">昵称</label>
                                    <input type="text" v-model="current.nickname">
                            </div>
                            <div class="input-control">
                                <label for="">真实姓名</label>
                                    <input type="text" v-model="current.realName">
                            </div>
                            <div class="input-control">
                                <label for="">性别</label>
                                    <input type="text" v-model="current.gender">
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
                                    <th>用户名</th>
                                    <th>密码</th>
                                    <th>昵称</th>
                                    <th>真实姓名</th>
                                    <th>性别</th>
                                    <th>注册时间</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="tb-active" v-for="(row,index) in list" :key="index">
                                    <td class="pick"><input type="checkbox"> </td>
                                    <td>{{row.username}}</td>
                                    <td>{{row.password}}</td>
                                    <td>{{row.nickname}}</td>
                                    <td>{{row.realName}}</td>
                                    <td>{{row.use}}</td>
                                    <td>2018-03-10</td>
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
            this.model = 'user';
        },
        data() {
            return {
                model: 'user',
                searchable: ['username', 'realName']
        }
        },
        mixins: [AdminPage]
    }
</script>

