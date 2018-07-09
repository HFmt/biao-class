<style scoped>
    .search-bar {
        margin-top: 15px;
    }
</style>

<template>
    <div class="container">
        <div class="search-bar">
            <form @submit="search($event);submit($event)" action="">
                <input type="text"
                @keyup="change($event)"
                 v-model="keyword">
                <button type="submit">搜索</button>
            </form>
        </div>
    </div>
</template>

<script>
    
    export default {
        props: ['onSubmit', 'onChange'],
        mounted() {
        },
        data() {
            return {
                keyword: ''
            }
        },
        methods: {
            change(e) {
                e.preventDefault();                
                
                if(this.onChange)
                    this.onChange(this.keyword);
            },
            submit(e) {
                e.preventDefault();
                
                if(this.onSubmit){
                    this.onSubmit(this.keyword);
                    
                }

            },
            search(e) {
                e.preventDefault()
                this.$router.push({
                    path: '/searchResult',
                    query: {keyword: this.keyword}
                });                
            }
        },
        
    }
</script>
