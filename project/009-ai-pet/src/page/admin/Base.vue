<style scoped>
.admin-main {
    margin-top: 40px;
}
</style>

<template>
    <div>
        <AdminHeader defname="admin"/>
        <div class="admin-main">
            <div class="admin-container row">
                <div class="col-lg-2">
                    <AdminSidebar/>
                </div>
                <div class="col-lg-10">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "../../css/admin.css"
import api from "../../lib/api.js"
import AdminSidebar from "../../components/AdminSidebar"
import AdminHeader from "../../components/AdminHeader"
export default {
    components: {
        AdminSidebar,
        AdminHeader
    }
};
</script>
