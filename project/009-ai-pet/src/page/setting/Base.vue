<style scoped>
.admin-main {
    margin-top: 40px;
}

.sidebar,
.content {
    padding: 20px;
}

.page-head {
    background: url(http://placekitten.com/1920/217) no-repeat center;
    min-height: 217px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<template>
    <div>
        <Header defName="setting" />
        <div class="page-head tac">
            <h1 class="title">个人设置</h1>
        </div>
        <div class="admin-main">
            <div class="admin-container row">
                <div class="col-lg-1 sidebar">
                    <SettingSidebar/>
                </div>
                <div class="col-lg-11 content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "../../css/admin.css";
import api from "../../lib/api.js";
import Header from "../../components/Header";
import SettingSidebar from "../../components/SettingSidebar";
export default {
    components: {
        SettingSidebar,
        Header
    }
};
</script>
