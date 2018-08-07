<script>
import api from "../lib/api"
    export default {
        methods: {
            gReadInfo(model, condition, wishs) {
                condition = condition || null;
            api.api(`${model}/read`, condition, wishs).then(res => {
                this.$set(this.allList, model, res.data);
            });
        },
        }
    }
</script>