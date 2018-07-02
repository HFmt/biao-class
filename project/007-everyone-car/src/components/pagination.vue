<style>

</style>

<template>
    <div>
        <div class="pagination">
            <button @click="change(1)">首页</button>
            <span class="btn-group">
                <button v-for="(page, index) in lastPage" 
                :key="index"
                v-if="Math.abs(page - currentPage) < limit"
                @click="change(page)"
                >{{page}}
            </button>
            </span>
            <button @click="change(lastPage)">尾页</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            limit: {
                default: 5
            },
            onChange: {
                default () {
                    console.log('1:', 1); 
                }
            },
            totalCount: {
                default: 10
            }
        },
        data() {
            return {
                currentPage: 1
            }
        },
        methods: {
            change(page) {
                if(this.onChange)
                    this.onChange(page);
                this.currentPage = page;
            }
        },
        computed: {
            lastPage() {
                return Math.ceil(this.totalCount / this.limit);
            }
        }
    }
</script>

