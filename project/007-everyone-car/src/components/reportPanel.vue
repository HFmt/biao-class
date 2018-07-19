<style scoped>
.title {
    text-align: center;
}
</style>

<template>
    <div>
        <div class="row">
            <div class="col-lg-6">
                <div>
                    <h2 class="title">{{title}}</h2>
                </div>
                <div class="row">
                    <div class="col-lg-6" 
                    v-for="(item, index) in modelList" :key="index" 
                    v-if="(conf = structure[index]) && conf.cat == cat ">
                        <span v-if="item">T</span>
                        <span v-else>F</span>
                        {{conf.display_name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props : ['modelList', 'title', 'structure', 'cat'],
}
</script>

