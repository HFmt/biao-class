<script>
import api from "../lib/api";
export default {
    methods: {
        gReadInfo(model, obj, condition) {
            api.api(`${model}/read`, condition).then(res => {
                this.$set(obj, model, res.data);
                // obj[model] = res.data;
            });
        },
    }
};
</script>