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
      <div>
        <router-link to="/admin/dish/test">三斤牛肉，五斤白酒</router-link>
        </div>
        <router-view></router-view>
     </div>
    `
});
const AdminTable = Vue.component('adminTable', {
    template:`
     <div>
       <h2>桌型选择</h2>
       <form @submit="onSubmit($event)">
            <div>
                <lable>桌号</lable>
                <input v-model="current.name"/>
            </div>
            <div>
                <lable>人数</lable>
                <input v-model="current.capacity"/>
            </div>
            <button type="submit">确认</button>
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
                    <td><button @click.stop="current = item">更新</button> </td>
                    <td><button @click.stop="remove">删除</button> </td>
                </tr>
            </tbody>
       </table>
     </div>
    `,
    data() {
        return {
            current: {},
            list: []
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();

            http.post('table/create', this.current)
                .then( res => {
                    if(res.data.success)
                        this.current = {};
                    this.list.push(res.data.data);
                });
        },
    },
    mounted() {
        http.post('table/read')
            .then( res => {
                this.list = res.data.data;
            })
    }
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

