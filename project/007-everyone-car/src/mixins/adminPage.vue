<style>

</style>


<script>
    import '../css/admin.css';
    import api from '../lib/api.js';

    import Pagination from "../components/pagination.vue";
    import AdminNav from "../components/adminNav.vue";


    export default {
        components: {
            Pagination,
            AdminNav,
        },
        data() {
            return {
                total: 0,               //搜索总个数
                showForm: false,
                showBtn: false,
                keyword: null,          //搜索的关键词
                current: {},
                list: [],
                currentPage: null,      //当前页
                lastPage: null,         //最后一页
                searchable: [],          // 可搜索的所有属性
                limit:5
            }
        },
        methods: {
            changPage(page) {
                this.read(page);
            },
            cRoR(e) {

                let action = this.current.id ? 'update' : 'create'

                e.preventDefault();

                api(`${this.model}/${action}`, this.current)
                    .then(res => {
                        this.read(this.currentPage);
                        this.current = {};
                    });

            },
            read(page = 1) {
                if (page == this.currentPage && page != 1)

                    return;

                api(`${this.model}/read`, {limit: this.limit, page: page, with: this.with})
                    .then(res => {
                        this.total = res.total;
                        this.list = res.data;
                        this.lastPage = res.last_page;
                        this.currentPage = res.current_page;
                    });
            },
            remove(id) {
                if (!confirm('确认删除？'))
                    return;
                api(`${this.model}/delete`, {id: id})
                    .then(res => {
                        this.read();
                    });
            },
            search(e) {
                e.preventDefault();
                let kwd = this.keyword;

                let param = {
                    or: {},
                };

                this.searchable.forEach(prop => {
                    param.or[prop] = this.keyword;
                });

                api(`${this.model}/search`, param)
                    .then(res => {
                        this.list = res.data;
                    });
            },
            modify(row) {
                this.current = row;
                this.showForm = true;
                this.showBtn = true;
            }
        },

        mounted() {
            this.read();
        }
    };
</script>

