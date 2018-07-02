
<style>
.setting-list {
    font-size: 1.2rem;
    text-align: left;
}

.setting-list .setting {
    letter-spacing:4px;
    cursor: pointer;
    display: block;
    padding: 10px;
}

.setting-list .setting:hover{
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
                <div @click="userMenu=!userMenu" class="setting">用户管理</div> 
                <div v-if="userMenu" class="menu-wrapper">
                    <a href="#">用户权限管理</a>
                    <a href="#">用户信息管理</a>
                </div>
            </div>  
            <div>
                <div @click="vehicleMenu=!vehicleMenu" class="active setting">车辆管理</div> 
                <div v-if="vehicleMenu" class="menu-wrapper">
                    <a class="active" href="#">上架车辆管理</a>
                    <a href="#">交易车辆管理</a>
                </div>
            </div>  
        </div>
    </div>
</template>




<script>
    export default {
        props : {
            pushDwon: {
                defauft: false
            }
        },
        data() {
            return {
                userMenu: false,
                vehicleMenu: false
            }
        }

    }
</script>
