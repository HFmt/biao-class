<style>
.user-list table {
    width: 100%;
}

.user-list table th,
.user-list table td
 {
     padding: 10px;
    border: 1px solid #000;
}
</style>

<template>
    <div>
        <div class="content">
            <div class="title-area">
                <h2>用户信息管理</h2>
            </div>
            <div class="add-info">
                <button>添加用户信息</button>
            </div>
            <div class="info-wrap">
                <form @submit.prevent="createInfo()">
                    <div>
                        <label for="">用户名</label>
                        <input type="text" v-model="current.username">
                    </div>
                    <div>
                        <label for="">邮箱</label>
                        <input type="text" v-model="current.email">
                    </div>
                    <div>
                        <label for="">电话</label>
                        <input type="text" v-model="current.phone">
                    </div>
                    <div>
                        <label for="">密码</label>
                        <input type="text" v-model="current.password">
                    </div>
                    <div>
                        <label for="">位置</label>
                        <input type="text">
                    </div>
                    <button type="submit">确认添加</button>
                </form>
            </div>
            <div class="user-list taf">
                <table>
                    <thead>
                        <tr>
                            <th>用户名</th>
                            <th>邮箱</th>
                            <th>电话</th>
                            <th>密码</th>
                            <th>位置</th>
                            <th>编辑</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in allList.user" :key="index">
                            <td>
                                {{item.username}}
                            </td>
                            <td>
                                {{item.email}}
                            </td>
                            <td>
                                {{item.phone}}
                            </td>
                            <td>
                                {{item.password}}
                            </td>
                            <td>
                                大陆
                            </td>
                            <td>
                                <span @click="removeItem(item.id)">删除</span>
                                <span @click="modify(item)">修改</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import AdminPage from "../../mixsin/AdminPage"
export default {
    data() {
        return {
            model: 'user'
        }
    },
    mixins: [AdminPage],
    mounted() {                
        this.readInfo();
    },
    methods: {

    }
}

</script>