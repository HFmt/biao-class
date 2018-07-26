

<script>
import api from "../lib/api.js";
import ReadAll from "./ReadAll"

    export default {
        data() {
            return {
                allList: {},
                current: {}
            }
        },
        methods: {
            createInfo(model) {
                
                let action = this.current.id ? 'update' : 'create';

                api.api(model + `/${action}`, this.current)
                    .then(res => {
                        this.readAll(model);
                        this.current = {};
                    });
            }
        }
    }
</script>