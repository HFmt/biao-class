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
                    <router-link to="/setting/user" href="#">个人信息</router-link>
                </li>
                <li>
                    <a href="#">个人信息</a>
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
            userMenu: true,
            petMen: false,
            regionMenu: false
        };
    }
};
</script>
