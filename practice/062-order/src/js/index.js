




const AdminPage = {
    data() {
        return {
            error: [],
            current: {},
            list: [],
            keyword: '',
            timer: null,
            showForm: false,
            showAction: true
        }
    },
    methods: {
        create(e) {
            e.preventDefault();

            if (!this.validate()) {
                return;
            }

            let isUpdate = this.current.id;

            let action = isUpdate ? 'update' : 'create';

            http.post(`${this.model}/${action}`, this.current)
                .then(res => {
                    if (res.data.success) {
                        this.current = {};
                        if (!isUpdate)
                            this.list.push(res.data.data);
                    }
                });

            this.showAction = true;
        },
        remove(id) {

            if (!confirm('确认删除？'))
                return;

            http.post(`${this.model}/delete`, { id: id })
                .then(res => {
                    if (res.data.success) {
                        util.deleteElementById(this.list, id);
                    }
                });
        },
        update(item) {
            this.showForm = true;
            this.showAction = false;
            this.current = item;
        },
        search(e) {
            if (e)
                e.preventDefault();

            let param = { or: { name: this.keyword } }

            http.post(`${this.model}/search`, param)
                .then(res => {
                    this.list = res.data.data
                });
        },
        validate(item) {
            item = item || this.current;

            this.error = [];

            this.validateProp.forEach(prop => {
                let result = this['validate' + prop]();
                if (result === true)
                    return true;
                this.error.push(result);
            });

            return !this.error.length;

        },
        read() {
            http.post(`${this.model}/read`)
                .then(res => {
                    this.list = res.data.data;
                });
        },

    },
    watch: {
        keyword() {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.search();
            }, 400);
        }
    }
}

const Home = Vue.component('home', {
    template:
        `
        <div>
        <h1>欢迎来到背背山吃饭大学</h1>
        <p>下单</p>
        <div>
            <div v-for="dish in dishList" class="row dish">
                <div class="row col-3">
                    <img :src="dish.cover_url || defaulCoverUrl"/>
                </div>
                <div class="col-6">
                    <div class="name">{{dish.name}}</div>
                    <div class="price">{{dish.price}}元</div>
                    <div class="description">{{dish.description || '-'}}</div>
                </div>
                <div class="col-3">
                    <div class="row">
                        <button class="col-4">-</button>
                        <input class="col-4" type="number" v-model="dish.$count">
                        <button class="col-4">+</button>
                    </div>
                </div>
            </div>
        </div>
        <button @click="submitOrder">提交</button>
        </div>
    `,

    data() {
        return {
            dishList: [],
            dishModel: 'dish',
            tableModel: 'table',
            orderModel: 'order',
            defaulCoverUrl: 'http://biaoyansu.com/img/biaoyansu_logo.svg',
            order: {
                //   table_id  : 'xxx',
                //   dish_info : [
                //     { dish_id : 1, count : 2 },
                //     { dish_id : 2, count : 1 },
                //   ],
                //   memo: '少放辣'
            },
        }
    },
    methods: {
        readDish() {
            http.post(`${this.dishModel}/read`)
                .then(res => {
                    this.dishList = res.data.data;
                    this.resetOrder();
                });
        },
        submitOrder() {

            this.prepareOrderInfo();
            console.log('this.order:', this.order);




            // this.mainOrderId().then( id => {
            //     if(id)
            //         this.order.parentId = id;

            //     http.post('order/create', this.order);
            // })

        },

        mainOrderId() {
            http.post(`${this.orderModel}/first`, {
                where: {
                    and: {
                        tableId: this.order.tableId,
                        status: 'created',
                        parentId: null
                    }
                }
            }).then(res => {
                if (!res.data.data)
                    return false;
                return res.data.data.id;
            });
        },
        resetOrder() {
            this.order = {};
            this.dishList.forEach(dish => {
                dish.$count = 0;
            });
        },
        prepareOrderInfo() {

            this.order.dishInfo = [];

            this.dishList.forEach(dish => {
                let count = dish.$count;

                if (!count)
                    return;


                this.order.dishInfo.push({
                    dishId: dish.id,
                    count: parseInt(count)
                });
            });
            return this.order.dishInfo;

        },

        askTable() {
            let tableName = prompt('预定桌号');
        }
    },
    mounted() {
        this.readDish();
        this.order.tableId = this.$route.query.tableId;
    }
});

const Login = Vue.component('login', {
    template:
        `
    <div>
        <h2>登入</h2>
        <form @submit="onSubmit($event)">
        <div>
            <label >用户名</label>
            <input type="text"/>
        </div>
        <div>
            <label >密码</label>
            <input type="number"/>
        </div>
        <div>
            <button type="submit">登入</button>
        </div>
        </form>
    </div>

    `,
    data() {
        return {

        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            console.log('1:', 1);


        },
    }
});

const Admin = Vue.component('admin', {
    template:
        `
    <div class="row">
        <div class="col-3">
            <router-link to="/admin/table">桌号管理</router-link>
            <router-link to="/admin/dish">菜品管理</router-link>
            <router-link to="/admin/order">订单管理</router-link>
        </div>
            <router-view class="col-9"></router-view>
    </div>
    `
});


const AdminDish = Vue.component('adminsh', {
    template:
        `
    <div>
    <h2>菜品设置</h2>
        <div>
            <form @submit="search($event)">
                <input type="search" v-model="keyword" placeholder="搜索"/>
                <button type="submit" hidden>搜索</button>
            </form>
        </div>
    <button @click.stop="showForm = !showForm">
            <span v-if="showForm">取消</span>添加菜品
    </button>
    <form v-if="showForm" @submit="create($event)">
            <div v-if="error.length">
                <div v-for="item in error">{{item}}</div>
            </div>
            <div>
                <lable>菜名</lable>
                <input v-model="current.name"/>
            </div>
            <div>
                <lable>价格</lable>
                <input v-model="current.price"/>
            </div>
            <div>
                <lable>介绍</lable>
                <input v-model="current.description"/>
            </div>
            <div>
                <lable>图片</lable>
                <input v-model="current.cover_url"/>
            </div>
            <button id="dish-action" type="submit">
                <span v-if="showAction">添加</span>
                <span v-else>确认</span>
            </button>
    </form>

    <table>
            <thead>
                <tr>
                    <th>菜名</th>
                    <th>价格</th>
                    <th>介绍</th>
                    <th>图片</th>
                    <th>编辑</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list">
                    <td>{{item.name}}</td>
                    <td>{{item.price}}元</td>
                    <td>{{item.description || '---'}}</td>
                    <td>
                        <img v-if="item.cover_url" :src="item.cover_url" :alt="item.name"/>
                        <span v-else>暂无封面</span>
                    </td> 
                    <td><button id="update" @click.stop="update(item)">更新</button> 
                    <button @click.stop="remove(item.id)">删除</button> </td>
                </tr>
            </tbody>
    </table>
    </div>
    `,
    data() {
        return {
            model: 'dish',
            validateProp: ['Name', 'Price', 'CoverUrl'],
        }
    },
    methods: {
        validateName(name) {
            name = name || this.current.name;
            const MaxLength = 14;
            if (!name)
                return '菜名为必填项';
            if (name.length >= MaxLength)
                return `菜名最长为${MaxLength}个字符`;
            return true;
        },
        validatePrice(price) {
            price = price || this.current.price;
            const Number = 1;
            if (!price)
                return '价格为必填项';
            if (price < Number)
                return `价格不能低于${{ Number }}元`;
            return true;
        },

        validateCoverUrl(cover_url) {
            cover_url = cover_url || this.current.cover_url;
            let re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

            if (!cover_url)
                return true;
            if (!re.test(cover_url))
                return "图片地址不合法";

            return true;
        },
    },
    mounted() {
        this.read();
    },
    mixins: [AdminPage]
});

const AdminTable = Vue.component('adminTable', {
    template:
        `
    <div>
        <h2>桌型选择</h2>
    <div>
    <div className="fa"></div>
            <form @submit="search($event)">
                <input type="search" v-model="keyword" placeholder="搜索"/>
                <button type="submit" hidden>搜索</button>
            </form>
        </div>
    <button @click.stop="showForm = !showForm">
            <span v-if="showForm">取消</span>添加桌号
    </button>
    <form v-if="showForm" @submit="create($event)">
            <div v-if="error.length">
                <div v-for="item in error">{{item}}</div>
            </div>
            <div>
                <lable>桌号</lable>
                <input v-model="current.name"/>
            </div>
            <div>
                <lable>人数</lable>
                <input v-model="current.capacity"/>
            </div>
            <button id="action" type="submit">
            <span v-if="showAction">添加</span>
            <span v-else>确认</span>
            </button>
    </form>
    <table>
            <thead>
                <tr>
                    <th>桌号</th>
                    <th>人数</th>
                    <th>编辑</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list">
                    <td>{{item.name}}</td>
                    <td>{{item.capacity}}</td>
                    <td>
                        <button id="update" @click.stop="update(item)">更新</button> 
                        <button @click.stop="remove(item.id)">删除</button> </td>
                </tr>
            </tbody>
    </table>
    </div>
    `,
    data() {
        return {
            model: 'table',
            validateProp: ['Name', 'Capacity'],
        }
    },
    methods: {
        validateName(name) {
            name = name || this.current.name;
            const MaxLength = 14;
            if (!name)
                return '需要选择桌号';
            if (name.length >= MaxLength)
                return `此项最大长度为${MaxLength}`;
            return true;
        },
        validateCapacity(capacity) {
            capacity = capacity || this.current.capacity;
            const Number = 1;
            if (!capacity)
                return '人数为必填项';
            if (capacity < Number)
                return `人数不能少于${{ Number }}个人`;
            return true;
        }
    },
    mounted() {
        this.read();
    },
    mixins: [AdminPage]
});

const AdminOrder = Vue.component('adminOrder', {
    template: `
        <div>
            <h2>订单管理</h2>
        </div>
    `,
    data() {
        return {

        }
    }
});

let router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },
        {
            path: '/admin', component: Admin,
            children: [
                {
                    path: 'dish',
                    component: AdminDish
                },
                {
                    path: 'table',
                    component: AdminTable
                },
                {
                    path: 'order',
                    component: AdminOrder
                }
            ]
        }
    ]
})

new Vue({
    el: '#root',
    router: router
});

