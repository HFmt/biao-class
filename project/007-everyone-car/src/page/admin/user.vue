<style>

.admin-conent {
    padding:0 35px;
}

.user-list table {
    border-collapse: collapse;
    width: 100%;
    text-align: left;
}

.user-list table tr th,
.user-list table tr td {
    padding: 10px 0;
}

.user-list table .tb-actived {
    background: #131421;
    font-size: 1.2rem;
    color: #fff;
}

.user-list table tr td {
    font-size: 1.1rem;
}

.user-list table .tb-active:hover {
    background: #3b404e;
    color: #fff;
}


.user-list table tr .pick {
    text-align: center;
}



</style>

<template>
    <div>
        <AdminNav/>  
            <div class="row">
                <div class="col-lg-2">
                    <AdminSidebarNav/>
                </div>
                <div class="col-lg-10">
                    <div class="admin-conent">
                        <div class="title">
                            <h2>用户管理</h2>
                        </div>
                        <div class="user-list">
                            <table>
                                <thead>
                                    <tr class="tb-actived">
                                        <th class="pick"> <input type="checkbox" name="" id=""> </th>
                                        <th>用户名</th>
                                        <th>性别</th>
                                        <th>昵称</th>
                                        <th>地区</th>
                                        <th>手机号码</th>
                                        <th>注册日期</th>
                                        <th>编辑</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="tb-active">
                                        <td class="pick"><input type="checkbox" name="" id=""> </td>
                                        <td>王花花</td>
                                        <td>Whh</td>
                                        <td>男</td>
                                        <td>西安</td>
                                        <td>18999999999</td>
                                        <td>2015-06-14</td>
                                        <td>
                                            <span>修改</span>
                                        </td>
                                    </tr>
                                    <tr class="tb-active">
                                        <td class="pick"><input type="checkbox" name="" id=""> </td>
                                        <td>李栓蛋</td>
                                        <td>Lsd</td>
                                        <td>女</td>
                                        <td>西安</td>
                                        <td>1566666666</td>
                                        <td>2016-09-04</td>
                                        <td>
                                            <span>修改</span>
                                        </td>
                                    </tr>
                                    <tr class="tb-active">
                                        <td class="pick"><input type="checkbox" name="" id=""> </td>
                                        <td>王花花</td>
                                        <td>Whh</td>
                                        <td>男</td>
                                        <td>西安</td>
                                        <td>18999999999</td>
                                        <td>2015-03-21</td>
                                        <td>
                                            <span>修改</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    import AdminNav from "../../components/adminNav.vue";
    import AdminSidebarNav from "../../components/adminSidebarNav.vue";

    export default {
        components: {
            AdminNav,
            AdminSidebarNav
        }
    }
</script>

