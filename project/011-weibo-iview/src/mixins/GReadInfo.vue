<script>
import api from "../lib/api";
export default {
    methods: {
        gReadInfo(model, obj, list, condition) {
            api.api(`${model}/read`, condition).then(res => {
                this.$set(obj, list, res.data);
            });
        }
    }
};
</script>