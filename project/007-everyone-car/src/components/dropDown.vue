<style>

.drop-down {
    display: inline-block;
    margin-left: 10px;
    background: #eee;
    position: relative;
    z-index: 1;
}

.menu {
    position: absolute;
    width: 100px;
    background: #eee;
}

.menu > * {
    padding: 4px;
}





</style>


<template>
    <div @mouseleave="showMenu = false" class="drop-down">
        <div @mouseenter="showMenu = true" class="selected">{{selected[displayKey] || '车型'}}</div>
        <div v-if="showMenu" class="menu">
            <div @click="select(row)" v-for="(row, index) in list" :key="index" class="select-list">
                {{row[displayKey]}}
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        
        props: {
            list: {},
            onSelect: {},
            displayKey: {
                default: 'name'
            }

        },
        data() {
            return {
                selected: {},
                showMenu: false
            }
        },
        methods: {
            select(row) {
                this.selected = row;

                if(this.onSelect)
                    this.onSelect(row);
            }
        }
    }
       
</script>