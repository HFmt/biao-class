// http.post('MODEL/CREATE', {
//     name: 'table',
//     structure: [
//         {
//             name: 'name',
//             type: 'string',
//             nullable: false,
//         },
//         {
//             name: 'capacity',
//             type: 'integer',
//             nullable: false,
//         },
//     ],
// });

// http.post('MODEL/CREATE', {
//     name: 'dish',
//     structure: [
//         {
//             name: 'name',
//             type: 'string',
//             nullable: false,
//         },
//         {
//             name: 'price',
//             type: 'float',
//             nullable: false,
//         },
//         {
//             name: 'description',
//             type: 'text',
//             nullable: true,
//         },
//         {
//             name: 'cover_url',
//             type: 'string',
//             nullable: true,
//         },
//     ],
// });

const AdminPage = {
    data() {
        return {
            error: [],
            current: {},
            list: [],
            showForm: false,
            showAction: true
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();

            if (!this.validate()) {
                return;
            }

            let isUpdate = this.current.id;

            let action = isUpdate ? 'update' : 'create';

            http.post(`table/${action}`, this.current)
                .then(res => {
                    if (res.data.success) {
                        this.current = {};
                        if (!isUpdate)
                            this.list.push(res.data.data);
                    }
                });
            console.log('this.showAction:', this.showAction);

            this.showAction = true;
        },
        remove(id) {

            if (!confirm('确认删除？'))
                return;

            http.post('table/delete', { id: id })
                .then(res => {
                    if (res.data.success) {
                        util.deleteElementById(this.list, id);
                    }
                });
        },
        update(item) {
            console.log('this.showAction:', this.showAction);

            this.showForm = true;
            this.showAction = false;
            this.current = item;
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

            // let validName = this.validateName(item.name);
            // let validCapacity = this.validateCapacity(item.capacity);

            // if(validName === true && validCapacity === true)
            //     return true;

            // if(validName !== true)
            //     this.error.push(validName);

            // if(validCapacity !== true)
            //     this.error.push(validCapacity);
        }
    }
}

const Home = Vue.component('home', {
    template: `
<div>
  <h1>欢迎来到背背山吃饭大学</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ipsa minima placeat! A ad animi asperiores aut dolores facere illum iste laudantium maxime neque numquam odit, omnis quia, reprehenderit veritatis!</p>
</div>
  `,
});

const Admin = Vue.component('admin', {
    template:`
     <div>
        <div class="col-3">
            <router-link to="/admin/table">桌号管理</router-link>
            <router-link to="/admin/dish">菜品管理</router-link>
        </div>
            <router-view class="col-9"></router-view>
    </div>
    `
});
const AdminDish = Vue.component('adminDish', {
   template:`
     <div>
       <h2>菜品设置</h2>
       <button @click.stop="showForm = !showForm">
            <span v-if="showForm">取消</span>添加菜品
       </button>
       <form v-if="showForm" @submit="onSubmit($event)">
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
                    <th>桌号</th>
                    <th>人数</th>
                    <th>介绍</th>
                    <th>图片</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list">
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.description}}</td>
                    <img v-if="item.cover_url" :src="item.cover_url" :alt="item.name"/>
                    <td><button id="update" @click.stop="update(item)">更新</button> </td>
                    <td><button @click.stop="remove(item.id)">删除</button> </td>
                </tr>
            </tbody>
       </table>
     </div>
    `,
    data() {
        return {
            validateProp: ['Name', 'Price', 'CoverUrl'],
        }
    },
    methods: {
        validateName(name) {
            name = name || this.current.name;
            const MaxLength = 14;
            if(!name)
                return '菜名为必填项';
            if (name.length >= MaxLength)
                return `菜名最长为${MaxLength}个字符`;
            return true;
        }, 
        validatePrice(price) {
            price = price || this.current.price;
            const Number  = 1;
            if (!price)
                return '价格为必填项';
            if (price < Number)
                return `价格不能低于${{Number}}元`;
            return true;
        },

        validateCoverUrl(cover_url) {
            cover_url = cover_url || this.current.cover_url;
            let re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

            if(!cover_url)
                return true;
            if(!re.test(cover_url))
                return "图片地址不合法";
            
            return true;
        },
    },
    mounted() {
        http.post('dish/read')
            .then( res => {
                this.list = res.data.data;
            });
    },
    mixins: [AdminPage]
});

const AdminTable = Vue.component('adminTable', {
    template:`
     <div>
       <h2>桌型选择</h2>
       <button @click.stop="showForm = !showForm">
            <span v-if="showForm">取消</span>添加桌号
       </button>
       <form v-if="showForm" @submit="onSubmit($event)">
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
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list">
                    <td>{{item.name}}</td>
                    <td>{{item.capacity}}</td>
                    <td><button id="update" @click.stop="update(item)">更新</button> </td>
                    <td><button @click.stop="remove(item.id)">删除</button> </td>
                </tr>
            </tbody>
       </table>
     </div>
    `,
    data() {
        return {
            validateProp: ['Name', 'Capacity'],
            error: [],
            current: {},
            list: [],
            showForm: false,
            showAction: false
        }
    },
    methods: {
        validateName(name) {
            name = name || this.current.name;
            const MaxLength = 14;
            if(!name)
                return '需要选择桌号';
            if (name.length >= MaxLength)
                return `此项最大长度为${MaxLength}`;
            return true;
        }, 
        validateCapacity(capacity) {
            capacity = capacity || this.current.capacity;
            const Number  = 1;
            if(!capacity)
                return '人数为必填项';
            if(capacity < Number)
                return `人数不能少于${{Number}}个人`;
            return true;
        }
    },
    mounted() {
        http.post('table/read')
            .then( res => {
                this.list = res.data.data;
            });
    },
    mixins: [AdminPage]
});

new Vue({
    el: '#root',
    router: new VueRouter({
        routes:[
            { path: '/', component : Home},
            {
                path: '/admin', component : Admin,
                children : [
                    {
                        path: 'dish',
                        component: AdminDish
                    },
                    {
                        path: 'table',
                        component: AdminTable
                    },
                ]
            },
        ]
    })
});

