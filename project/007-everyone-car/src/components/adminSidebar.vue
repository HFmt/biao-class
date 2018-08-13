<style>
    .setting-list {
        font-size: 1.2rem;
        text-align: left;
    }

    .setting-list .setting {
        letter-spacing: 4px;
        cursor: pointer;
        display: block;
        padding: 10px;
    }

    .setting-list .setting:hover {
        border-left: 3px solid #2196f3;
        background: #000;
        color: #fff;
    }

    .menu-wrapper > * {
        display: block;
        font-size: 1.1rem;
        margin-left: 20px;
        padding: 8px 0 8px 0;
    }

    .menu-wrapper > *:hover {
        border-left: 3px solid #2196f3;
        background: #000;
        color: #fff;
    }


</style>

<template>
    <div>
        <div class="setting-list">
            <div>
                <div @click="userMenu=!userMenu" class="setting" :class="{'active': userMenu}">用户管理</div>
                <div v-if="userMenu" class="menu-wrapper">
                    <router-link to="/admin/user" href="#">用户信息管理</router-link>
                    <!-- <a href="#">用户权限管理</a> -->
                </div>
            </div>
            <div>
                <div @click="regionMenu=!regionMenu" class="setting" :class="{'active': regionMenu}">地区管理</div>
                <div v-if="regionMenu" class="menu-wrapper">
                    <router-link to="/admin/location" href="#">大华区</router-link>
                </div>
            </div>
            <div>
                <div @click="vehicleMenu=!vehicleMenu" class=" setting" :class="{'active': vehicleMenu}">车辆管理</div>
                <div v-if="vehicleMenu" class="menu-wrapper">
                    <router-link to="/admin/brand" class="" href="#">品牌管理</router-link>
                    <router-link to="/admin/model" class="" href="#">车型管理</router-link>
                    <router-link to="/admin/series" class="" href="#">车系管理</router-link>
                    <router-link to="/admin/vehicle" class="" href="#">上架管理</router-link>
                    <router-link to="/admin/report" class="" href="#">检测管理</router-link>
                    <!-- <a href="#">交易管理</a> -->
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        props: {
            pushDwon: {
                defauft: false
            }
        },
        data() {
            return {
                userMenu: false,
                vehicleMenu: false,
                regionMenu: false
            }
        }

    }
</script>
