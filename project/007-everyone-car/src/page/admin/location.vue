<style scoped>
.location {
    max-width: 200px;
}

.location .step {
    display: inline-block;
    width: 33.333333333%;
    max-height: 100px;
    overflow: auto;
}

.location .item {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.location .item.active {
    background: #fd521d;
    color: #fff;
}
</style>

<template>
    <div class="location">
        <div class="step">
            <div :class="{'active': item.id == current.stateList, item:true}" @click="select(item, 'stateList')" v-for="(item, index) in location.stateList" :key="index">
                {{item.name}}
            </div>
        </div>
        <div class="step">
            <div :class="{'active': item.id == current.cityList, item:true}" @click="select(item, 'cityList')" v-for="(item, index) in location.cityList" :key="index">
                {{item.name}}
            </div>
        </div>
        <div class="step">
            <div :class="{'active': item.id == current.countyList, item:true}" @click="select(item, 'countyList')" v-for="(item, index) in location.countyList" :key="index">
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
const chinaId = 1;
import api from "../../lib/api";

export default {
    data() {
        return {
            location: {
                stateList: [],
                cityList: [],
                countyList: []
            },
            current: {
                stateList: null,
                cityList: null,
                countyList: null
            }
        };
    },
    methods: {
        read(parentId, type) {
            api("location/read", {
                where: {
                    and: {
                        parent_id: parentId
                    }
                }
            }).then(res => {
                this.location[type] = res.data;
            });
        },
        select(parent, type) {
            let childType
            this.current[type] = parent.id;
            
            switch (type) {
                case 'stateList':
                    childType = 'cityList';
                    break;
                case 'cityList':
                    childType = 'countyList';
                    break;
            
                default:
                    break;
            }

            this.read(parent.id, childType);
        }
    },
    mounted() {
        this.read(chinaId, "stateList");
    }
};
</script>
