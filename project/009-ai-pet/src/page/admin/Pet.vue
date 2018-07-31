<style scoped>
.user-list table {
    width: 100%;
}
.user-list table th,
.user-list table td {
    padding: 10px;
    border: 1px solid #000;
}

.user-list table img {
    max-height: 40px;
}
</style>

<template>
    <div>
        <div class="content">
            <div class="title-area">
                <h2>宠物信息管理</h2>
            </div>
            <div class="add-info">
                <button @click="showModal()">添加宠物信息</button>
            </div>
            <div v-if="modal" @click.self="hiddenModal()" class="modal-wrap">
                <div class="info-wrap">
                    <div class="modal-header tar">
                        <span @click="hiddenModal()" class="cancel cp">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </span>
                    </div>
                    <form @submit.prevent="createInfo()">
                        <div class="col-lg-4 input-group">
                            <label for="">标题</label>
                            <input class="col-lg-12" type="text" v-model="current.title">
                        </div>
                        <div class="col-lg-4 input-group">
                            <label for="">分类</label>
                            <DropDown api="category.name" :list="allList.category" :onSelect="setCategorylId" defaultSelect="宠物分类"/>
                        </div>
                        <div class="col-lg-4 input-group">
                            <label for="">颜色</label>
                            <input class="col-lg-12" type="text" v-model="current.color">
                        </div>
                        <div class="col-lg-4 input-group">
                            <label for="">封面链接</label>
                            <input class="col-lg-12" type="text" v-model="current.cover_url">
                        </div>
                        <div class="col-lg-4 input-group">
                            <label for="">描述</label>
                            <input class="col-lg-12" type="text" v-model="current.description">
                        </div>

                        <div class="col-lg-4 input-group">
                            <label for="">价格</label>
                            <input class="col-lg-12" type="text" v-model="current.price">
                        </div>
                        <div class="col-lg-4 input-group">
                            <label for="">性格</label>
                            <input class="col-lg-12" type="text" v-model="current.character">
                        </div>
                        <div class="col-lg-4 input-group">
                            <label for="">出生地</label>
                            <input class="col-lg-12" type="text" v-model="current.origin">
                        </div>
                        <div class="col-lg-4 input-group">
                            <label for="">出生日期</label>
                            <input class="col-lg-12" type="date" v-model="current.birthday">
                        </div>
                        <div class="col-lg-4 input-group">
                            <label for="">推广</label>
                            <input class="col-lg-12" type="checkbox" v-model="current.promotion">
                        </div>
                        <div class="col-lg-4 input-group">
                            <label for="">绝育</label>
                            <input class="col-lg-12" type="checkbox" v-model="current.neuter">
                        </div>
                        <div class="col-lg-4 input-group">
                            <label for="">传染病</label>
                            <input class="col-lg-12" type="checkbox" v-model="current.disease">
                        </div>
                        <div class="col-lg-4 input-group">
                            <label for="">纯种</label>
                            <input class="col-lg-12" type="checkbox" v-model="current.pure_breed">
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
                <table class="tac">
                    <thead>
                        <tr>
                            <th>标题</th>
                            <th>分类</th>
                            <th>轮播</th>
                            <th>颜色</th>
                            <th>封面链接</th>
                            <th>价格</th>
                            <th>性格</th>
                            <th>出生地</th>
                            <th>年龄</th>
                            <th>性别</th>
                            <th>纯种</th>
                            <th>绝育</th>
                            <th>接种疫苗</th>
                            <th>传染病</th>
                            <th>品种</th>
                            <th>描述</th>
                            <th>编辑</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in allList.pet" :key="index">
                            <td>
                                {{item.title}}
                            </td>
                            <td>
                                {{item.$category && item.$category.name || '-'}}
                            </td>
                            <td>
                                {{item.promotion ? '是' : '否'}}
                            </td>
                            <td>
                                {{item.color}}
                            </td>
                            <td>
                                <img :src="item.cover_url" alt="">
                            </td>
                            <td>
                                {{item.price}}
                            </td>
                            <td>
                                {{item.character}}
                            </td>
                            <td>
                                {{item.origin}}
                            </td>
                            <td>
                                {{item.birthday}}
                            </td>
                            <td>
                                雌
                            </td>
                            <td>
                                {{item.pure_breed ? '是' : '否'}}
                            </td>
                            <td>
                                没
                            </td>
                            <td>
                                没
                            </td>
                            <td>
                                {{item.disease ? '是' : '否'}}
                            </td>
                            <td>
                                {{item.$breed && item.$breed.name || '-'}}
                            </td>
                            <td>
                                {{item.description}}
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
            model: "pet",
            with: [
                {
                    type: 'has_one', model: 'category'
                }
            ]
        };
    },
    mounted() {
        this.readInfo();
        this.gReadInfo("category");
    },
    methods: {
        setCategorylId(item) {
            this.$set(this.current, "category_id", item.id);
        }
    }
};
</script>