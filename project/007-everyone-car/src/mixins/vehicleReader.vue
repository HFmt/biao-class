<script>
    import api from "../lib/api.js";

    export default {
        methods: {
            read(model) {
                api(model + '/read', {key_by: 'name'})
                    .then(res => {
                        this.$set(this.list, model, res.data)
                    });
            }
        }
    }
</script>


