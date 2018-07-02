
const AdminPage = {
    data() {
        return {
            list: [],
            current: {},
            errorList: []
        }
    },
    methods: {
        create(e) {
            e.preventDefault();

            if (!this.validate())
                return;

            let isUpdate = this.current.id;

            let actino = isUpdate ? 'update' : 'create';

            http.post(`${this.model}/${actino}`, this.current)
                .then(res => {
                    if (res.data.success)
                        this.current = {};
                    if (!isUpdate)
                        this.list.unshift(res.data.data)
                });
            this.current = {};
        },
        remove(id) {

            http.post(`${this.model}/delete`, { id })
                .then(res => {
                    if (res.data.success)
                        util.deleteElementById(this.list, id)
                });
        },
        updata(item) {
            this.current = item;
        },
        read() {
            http.post(`${this.model}/read`)
                .then(res => {
                    this.list = res.data.data;
                });
        },
        validate(obj) {
            obj = obj || this.current;

            this.errorList = [];

            this.validateProp.forEach(prop => {
                let result = this['validate' + prop]();

                if(result === true)
                    return true;
                this.errorList.push(result);
            });
            return !this.errorList.length;
        }
    },
}




const Home = Vue.component('homt', {
    template:
        `
        <div>
            <h2>欢迎来到Assam食堂</h2>  
            <div>
                <router-link to="/user/table">预定桌位</router-link> 
                <router-link to="/user/order">在线下单</router-link> 
            </div>
            <router-view></router-view>
        </div>
    `
});

const User = Vue.component('user', {
    template:
        `
        <div>
            <h2>用户登入</h2>
            <div>
            <form @submit="" action="">
                <div>
                    <label>账号</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>密码</label>
                    <input type="password"/>
                </div>
                <button type="submit">登入</button>
            </form>
        </div> 
              <div>
                <router-link to="/user/table">预定桌位</router-link> 
                <router-link to="/user/order">在线下单</router-link> 
            </div>
            <router-view></router-view>
        </div>
    `
});

const UserOrder = Vue.component('userOrder', {
    template:
        `
        <div>
            <h2>所有菜品</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>图片</th>
                            <th>菜名</th>
                            <th>价格</th>
                            <th>介绍</th>
                            <th>数量</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="dish in dishList">
                            <td>
                                <img v-if="dish.coverUrl" :src="dish.coverUrl" :alt="dish.name"/>
                                <span v-else>暂无封面</span>
                            </td>
                            <td>{{dish.name}}</td>
                            <td>{{dish.price}}元</td>
                            <td>{{dish.description || '---'}}</td>
                            <td>
                                <button>-</button>
                                <input type="number" v-model="dish.$count"/>
                                <button>+</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button @click= "onSubmit">提交订单</button>
            </div>
        </div>
    `,
    data() {
        return {
            dishList: [],
            order: {}
        }
    },
    methods: {
        dishRead() {
            http.post('dish/read') 
                .then( res => {
                    this.dishList = res.data.data;
                    console.log('this.dishList:', this.dishList);
                    
                });
        }
        ,
        onSubmit() {
            this.prepareOrderInfo()            ;
            console.log('this.order:', this.order);
            


        },
        prepareOrderInfo() {

            this.order.dishInfo = [];
            
            this.dishList.forEach( dish => {
                console.log('dish:', dish);
                
                let count = dish.$count;

                if(!count)
                    return;
                
                this.order.dishInfo.push( {
                    dishId: dish.id,
                    count: parseInt(count)
                });
            });
            return this.order.dishInfo;
        }
    },
    mounted() {
        this.dishRead();
        this.order.tableId = this.$route.query.tableId;
    },
});

const UserTable = Vue.component('userTable', {
    template:
        `
       <div>
           <h2>预定桌号</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>桌号</th>
                            <th>可坐人数</th>
                            <th>编辑</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="table in list">
                            <td>{{table.name}}</td>
                            <td>{{table.capacity}}</td>
                            <td>
                                <button>预定</button>
                                <button>取消</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button>确认</button>
            </div>
        </div>
    `,

    data() {
        return {
            model: 'table'
        }
    },
    mounted() {
        this.read();
    },
    mixins: [AdminPage]

});

const Admin = Vue.component('admin', {
    template:
        `
    <div>
        <h2>管理员登入</h2>
        <div>
            <form @submit="" action="">
                <div>
                    <label>账号</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>密码</label>
                    <input type="password"/>
                </div>
                <button type="submit">登入</button>
            </form>
        </div>
        <div class="row">
        
        <div class="col-3">
            <router-link to="/admin/table">桌号管理</router-link>
            <router-link to="/admin/dish">菜品管理</router-link>
            <router-link to="/admin/orders">订单管理</router-link>
        </div>
        <router-view class="col-9"></router-view>
        </div>
    </div>
    `
});

const AdminDish = Vue.component('adminDish', {
    template:
        `
        <div>
            <h2>菜品管理</h2>
            <div>
                <h5>提示:</h5>
                <div v-for="error in errorList">{{error}}</div>
            </div>
            <div>
                <form @submit="create($event)">
                    <div>
                        <label>菜名</label>
                        <input v-model="current.name" type="text"/>
                    </div>
                    <div>
                        <label>价格</label>
                        <input v-model="current.price" type="number"/>
                    </div>
                    <div>
                        <label>介绍</label>
                        <input v-model="current.description" type="text"/>
                    </div>
                    <div>
                        <label>图片</label>
                        <input v-model="current.coverUrl" type="text"/>
                    </div>
                    <div>
                        <button type="submit">添加</button>
                    </div>
                </form>
            </div>
            <div>
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
                        <tr  v-for="dish in list">
                            <td>{{dish.name}}</td>
                            <td>{{dish.price}}元</td>
                            <td>{{dish.description || '---'}}</td>
                            <td>
                                <img v-if="dish.coverUrl" :src="dish.coverUrl" :alt="dish.name"/>
                                <span v-else>暂无封面</span>
                            </td>
                            <td>
                                <button @click.stop="updata(dish)">更改</button>
                                <button @click.stop="remove(dish.id)">删除</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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

            const maxLength = 14;

            if(!name)
                return '菜名为必填项';
            if(name.length > maxLength)
                return `菜名不能超过${maxLength}个字符`;
            return true;
        },
        validatePrice(price) {
            price = price || this.current.price;

            const number = 0;

            if (!price)
                return '价格为必填项';
            if (price < number)
                return `价格不能低于${number}元`;
            return true;
        },
        validateCoverUrl(coverUrl) {
            coverUrl = coverUrl || this.current.coverUrl;
            let re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,192}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

            if (!coverUrl)
                return true;
            if (!re.test(coverUrl))
                return "图片地址不合法";

            return true;
        },
    },
    mounted() {
        this.read();
    },
    mixins: [AdminPage]
});

const AdminTable = Vue.component('admiTbale', {
    template:
        `
       <div>
           <h2>桌号管理</h2>
           <div>
                <h5>提示:</h5>
                <div v-for="error in errorList">{{error}}</div>
            </div>
            <div>
                <form @submit="create($event)">
                    <div>
                        <label>桌号</label>
                        <input v-model="current.name" type="text"/>
                    </div>
                    <div>
                        <label>人数</label>
                        <input v-model="current.capacity" type="number"/>
                    </div>
                    <div>
                        <label>详情</label>
                        <input v-model="current.description" type="text"/>
                    </div>
                    <button type="submit">添加</button>
                </form>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>桌号</th>
                            <th>人数</th>
                            <th>详情</th>
                            <th>编辑</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="table in list">
                            <td>{{table.name}}</td>
                            <td>{{table.capacity}}</td>
                            <td>{{table.description}}</td>
                            <td>
                                <button @click.stop="updata(table)">更改</button>
                                <button @click.stop="remove(table.id)">删除</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    data() {
        return {
            model: 'table',
            validateProp: ['Name', 'Capacity']
        }
    },
    methods: {
        validateName(name) {
            name = name || this.current.name;

            const maxLength = 14;

            if (!name)
                return '桌号为必填项';
            if (name.length > maxLength)
                return `桌名不能超过${maxLength}个字符`;
            return true;
        },
        validateCapacity(capacity) {
            capacity = capacity || this.current.capacity;

            const number = 1;

            if (!capacity)
                return '人数为必填项';
            if (capacity < number)
                return `人数不能低于${number}人`;
            return true;
        },
    },
    mounted() {
        this.read();
    },
    mixins: [AdminPage]

});

const AdminOrders = Vue.component('adminOrders', {
    template:
        `
        <div>
            <h2>订单管理</h2>
        </div>
    `,
    data() {
        return {
            model: 'order'
        }
    },
    methods: {
    
    },
    modules() {
        this.read();
    },
    mixins: [AdminPage]
});

const router = new VueRouter({
    routes: [
        { path: '/home', component: Home },
        {
            path: '/user', component: User,
            children: [
                { path: 'order', component: UserOrder },
                { path: 'table', component: UserTable },
            ]
        },
        {
            path: '/admin', component: Admin,
            children: [
                { path: 'dish', component: AdminDish },
                { path: 'table', component: AdminTable },
                { path: 'orders', component: AdminOrders },
            ]
        },
    ]
});

new Vue({
    el: '#root',
    router: router
});

