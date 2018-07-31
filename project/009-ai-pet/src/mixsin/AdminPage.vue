

<script>
import api from "../lib/api.js";
import ReadInfo from "./ReadInfo"
import DropDown from "../components/DropDown"

export default {
    components: {
        DropDown
    },
    mixins: [ReadInfo],
    data() {
        return {
            allList: {},
            current: {},
            modal: false
        };
    },
    methods: {
        readInfo() {
            api.api(`${this.model}/read`, {with: this.with}).then(res => {
                this.$set(this.allList, this.model, res.data);
            });
        },
        createInfo() {
            let action = this.current.id ? "update" : "create";

            api.api(`${this.model}/${action}`, this.current).then(res => {
                this.readInfo();
                this.current = {};
            });
        },
        removeItem(id) {
            if (!confirm("确认删除？")) return;

            api.api(`${this.model}/delete`, { id }).then(res => {
                this.readInfo();
            });
        },
        modify(item) {
            this.current = item;
            this.showModal();
        },
        showModal() {
            this.modal = true;
        },
        hiddenModal() {
            this.modal = false;
        }
    }
};
</script>