<style scoped>
.drop-down {
    position: relative;
}

.drop-down input {
    width: 100%;
    margin-top: 5px;
}

.menu {
    position: absolute;
    width: 100%;
    height: 250px;
    background: #ccc;
    z-index: 1;
    cursor: pointer;
    margin-top: -12px;
    overflow: auto;

}

.menu > * {
    padding: 5px 2px;
}

.menu > *:hover {
    color: #03a9f4;
}
</style>


<template>
    <div @mouseleave="showMenu = false" class="drop-down">
        <input @mouseenter="showMenu = true" class="selected" type="text" :placeholder="defaultSelect" v-model="selected[displayKey]" />
        <div v-if="showMenu && list.length" class="menu">
            <div @click="select(item)" v-for="(item, index) in list" :key="index" class="select-list">
                {{item[displayKey]}}
            </div>
        </div>
    </div>
</template>


<script>
import api from "../lib/api";

export default {
    props: {
        defaultSelect: {
            default: "请选择"
        },
        displayKey: {
            default: "name"
        },
        list: {
            default: "list"
        },
        onSelect: {
            default: ''
        }
    },
    data() {
        return {
            selected: {},
            showMenu: false
        };
    },
    methods: {
        select(row) {
            this.selected = row;
            if (this.onSelect) {
                this.onSelect(row);                
            }
        }
    }
};
</script>