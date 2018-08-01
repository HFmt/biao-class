<script>
import api from "../lib/api";
export default {
    methods: {
        findItem(model, condition) {
            api.api(`${model}/find`, condition).then(res => {
                this.petInfo[model] = res.data;
            });
        }
    }
};
</script>