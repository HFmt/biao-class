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
        <input @keyup="showMenu=true"
                @focus="showMenu=true"
         class="selected" type="text" :placeholder="defaultSelect" v-model="keyword" />
        <div v-if="showMenu && result.length" class="menu">
            <div @click="select(item)" v-for="(item, index) in result" :key="index" class="select-list">
                {{item[titleKey]}}
            </div>
        </div>
    </div>
</template>


<script>
import api from "../lib/api";

export default {
    props: {
        api: {},
        defaultSelect: {
            default: "请选择"
        },
        displayKey: {
            default: "name"
        },
        titleKey: {
            default: "name"
        },
        list: {
            default: "list" // {Array} 如果不需要异步搜索，就需要传入静态数据，通常是数组：[{name: whh, id: 1}, ...]
        },
        onSelect: {
            default: ""
        },
        primaryKey: {
            // {string} 用于定位每一项的主键是什么
            default: "id"
        },
        default: {} // {mixed} 默认选中项的主键（通常是id）
    },
    data() {
        return {
            selected: {},
            showMenu: false,
            apiConf: {}, // 解析后的props.api
            result: [], // 搜索结果或静态数据,
            keyword: "", // 搜索关键词
            timer: null // 存储搜索debounce定时器
        };
    },
    mounted() {
        list && (this.result = Object.assign([], this.list)); // 如果传了静态数据，就应该将静态数据拷一份，否则就会导致越搜索越少
        this.setDefault(); // 如果传了props.default，就应该默认选中那一项
        this.apiConf = this.parseApi(); // 如果props.api是字符串，就应该将其解析为更好处理的对象类型
        let list = this.lsit;
        
    },
    methods: {
        /**
         * 解析props.api为更好处理的对象类型
         * @return {object}
         */
        parseApi() {
            let apiProp = this.api;

            if (typeof apiProp != "string") {
                return Object.assign({}, api);
            }

            apiProp = apiProp.split(".");
            let model = apiProp[0]; //brand
            let property = apiProp[1]; //name
            property = property.split(",");
            console.log('model:', model);
            console.log('property:', property);
            
            return {
                model,
                property
            };
        },

        /**
         * 重置组件
         */
        reset() {
            this.keyword = "";
            this.selected = {};
        },

        select(item) {
            this.selected = item;
            this.keyword = item[this.displayKey];
            if (this.onSelect) {
                this.onSelect(item);
            }
        },
        setDefault() {
            let key = this.default;
            if (!key) this.reset();
        },
        /**
         * 过滤静态数据（同步）
         * 相当于静态数据的search
         */
        filter() {
            this.result = Object.assign([], this.list);
            this.result = this.result.filter(item => {
                return item[this.displayKey].indexOf(this.keyword) !== -1;
            });
        },
        /**
         * 搜索（异步）
         * 通过api获取动态数据
         */

        search() {
            let condition = {};

            let property = this.apiConf.property;

            if (!property) return;

            property.forEach(prop => {
                condition[prop] = this.keyword;                
            });

            clearTimeout(this.timer);
            console.log('condition:', condition);
            
            this.timer = setTimeout(() => {
                api(`${this.apiConf.model}/search`, { or: condition }).then(
                    r => {
                        this.result = r.data;
                    }
                );
            }, 300);
        }
    },

    watch: {
        /**
         * 当关键词改变时，如果是动态数据就搜索，否则就过滤已有的静态数据
         */
        keyword() {
            if (this.api) {
                this.search();
            } else {
                this.filter();
            }
        },
        /**
         * 设置默认选中项
         */
        default() {
            this.set_default();
        }
    }
};
</script>