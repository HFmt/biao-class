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
    background: #f5f5f5;
    z-index: 1;
    cursor: pointer;
    margin-top: -12px;
    border:1px solid #cbcbcb;
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
        <input @mouseenter="showMenu = true" class="selected" type="text" placeholder="请选择" v-model="selected[displayKey]" />
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
        defaultSelect: "",
        list: {},
        onSelect: {},
        displayKey: {
            default: "name"
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
            if (this.onSelect) this.onSelect(row);
        },
        search(e) {
            e.preventDefault();
            let kwd = this.keyword;

            let param = {
                or: {}
            };

            this.searchable.forEach(prop => {
                param.or[prop] = this.keyword;
            });

            api(`${this.model}/search`, param).then(res => {
                this.list = res.data;
            });
        }
    },
    watch: {
         keyword () {
             console.log('1:', 1);
             
        if (this.api)
          this.search();
        else
          this.filter();
      },
      default : {
        deep : true,
        handler () {
          this.set_default();
        },
      },
    }
};
</script>