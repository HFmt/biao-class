<style scoped>
.setting-wrap li {
    padding-left: 20px;
    display: block; 
}
</style>

<template>
    <div>
        <div class="setting-wrap">
            <h3 @click="userMenu=!userMenu" class="setting" :class="{'active': userMenu}">用户管理</h3>
            <ul v-if="userMenu" class="menu-wrapper">
                <li>
                    <router-link to="/admin/user" href="#">用户信息管理</router-link>
                </li>
                <li>
                    <a href="#">用户权限</a>
                </li>
            </ul>
            <h3 @click="petMen=!petMen" class="setting" :class="{'active': petMen}">宠物管理</h3>
            <ul v-if="petMen" class="menu-wrapper">
                <li>
                    <router-link to="/admin/category" href="#">宠物类别</router-link>
                </li>
                <li>
                    <router-link to="/admin/pet" href="#">宠物信息</router-link>
                </li>
                <li>
                    <router-link to="/admin/order" href="#">订单信息</router-link>
                </li>
            </ul>
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
            petMen: false,
            regionMenu: false
        };
    }
};
</script>
