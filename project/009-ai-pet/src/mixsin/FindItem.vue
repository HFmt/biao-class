<script>
import api from "../lib/api";
export default {
    methods: {
        findItem(model, condition) {
            api.api(`${model}/find`, condition).then(res => {
                this.itemList[model] = res.data;
            });
        }
    }
};
</script>