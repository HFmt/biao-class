<style scoped>
.user-list table {
    width: 100%;
}y

.user-list table th,
.user-list table td {
    padding: 10px;
    border: 1px solid #000;
}

/* 添加数据表单 */

.input-group,
.btn-group {
    padding: 10px;
}

.input-group label {
    display: block;
}

.input-group input,
.btn-group button {
    padding: 10px;
    margin: 5px 0 10px;
    border: 1px solid #cdcdcd;
}

.modal-wrap {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: 1;
    background: rgba(0, 0, 0, 0.01);
}

.modal-wrap .info-wrap {
    position: absolute;
    width: 70%;
    top: 10%;
    left: 15%;
    background: #f5f5f5;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7);
}

.modal-wrap form {
    padding: 15px;
}

.modal-wrap .modal-header {
    padding: 15px 15px 0;
}
</style>

<template>
    <div>
        <div class="content">
            <div class="title-area">
                <h2>类别信息管理</h2>
            </div>
            <div class="add-info">
                <button @click="modal = true">添加类别信息</button>
            </div>
            <div v-if="modal" @click.self="hiddenModal()" class="modal-wrap">
                <div class="info-wrap">
                    <div class="modal-header tar">
                        <span @click="hiddenModal()" class="cancel cp">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </span>
                    </div>
                    <form @submit.prevent="createInfo()">
                        <div class="col-lg-12 input-group">
                            <label for="">类别</label>
                            <input class="col-lg-12" type="text" v-model="current.name">
                        </div>
                        <div class="col-lg-12 input-group">
                            <label for="">首页推广</label>
                            <input class="col-lg-12" type="checkbox" v-model="current.promoting">
                        </div>
                        <div class="btn-wrap row">
                            <div class="btn-group col-lg-6">
                                <button class="col-lg-12" type="submit">确认添加</button>
                            </div>
                            <div class="btn-group col-lg-6">
                                <button @click="hiddenModal()" class="col-lg-12" type="button">取消</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="user-list taf">
                <table>
                    <thead>
                        <tr>
                            <th>类别</th>
                            <th>首页推广</th>
                            <th>编辑</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in allList.category" :key="index">
                            <td>
                                {{item.name}}
                            </td>
                            <td>
                                {{item.promoting ? '是' : '否'}}
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
import AdminPage from "../../mixsin/AdminPage";
export default {
    mixins: [AdminPage],
    data() {
        return {
            model: "category",
        };
    },
    mounted() {
        this.readInfo();
    },
    methods: {
    }
};
</script>