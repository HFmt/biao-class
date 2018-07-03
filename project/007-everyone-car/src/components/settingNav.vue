<style>
    .setting-list {
        font-size: 1.2rem;
        letter-spacing: 4px;
        text-align: center;
    }

    .setting-list .setting {
        display: block;
        padding: 10px;
    }

    .setting-list .setting:hover {
        background: #000;
        color: #fff;
    }


</style>

<template>
    <div>
        <div class="setting-list">
            <a class="active setting" href="#">个人信息</a>
            <a class="setting" href="#">账号设置</a>
            <a class="setting" href="#">车辆信息</a>
            <a class="setting" href="#">个人信息</a>
            <a class="setting" href="#">账号设置</a>
            <a class="setting" href="#">车辆信息</a>
        </div>
    </div>
</template>


<script>
    export default {
        props: {
            pushDwon: {
                defauft: false
            }
        }

    }
</script>
