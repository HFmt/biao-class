<script>
import api from "../lib/api"
    export default {
        methods: {
            gReadInfo(model, condition) {
                condition = condition || null;
            api.api(`${model}/read`, condition).then(res => {
                this.$set(this.allList, model, res.data);
            });
        },
        }
    }
</script>