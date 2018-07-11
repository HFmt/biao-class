<style>

</style>

<template>

</template>

<script>
    import api from "../lib/api.js";

    export default {
        methods: {
            read(type) {
                api(`${type}/read`, {key_by: name})
                    .then(res => {
                        this.$set(this.list, type, res.data)
                    });
            }
        }
    }
</script>


