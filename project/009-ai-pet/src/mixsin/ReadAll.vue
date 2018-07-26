<script>
import api from "../lib/api.js";

export default {
    mounted() {
        console.log('typeof api:', typeof api.api);
        
    },
    methods: {
        readAll(model) {
            api.api(model + '/read')
                .then(res => {
                    this.$set(this.allList, model, res.data);
            });
        }
    }
};
</script>
