<style scoped>

.too-bar button {
    background: #f44336;
}

.form-wrapper input,
.form-wrapper button {
    width: 100%;
    margin: 10px 0 20px 0;
}


.content {
    
    padding: 10px 0 0 40px;
}

.control



.control .btn-primary {
    margin-right: 15px;
}

</style>

<template>
    <div>

        <navCar :pushDown="true"/>
        <div>
            <div class="container">
               <div class="row">
                    <div class="col-lg-2">
                        <SettingNav/>
                    </div>
                    <div class="col-lg-10">
                        <div class="content">
                            <h2>个人信息</h2>
                            <div class="mian">
                               <div class="too-bar text-right">
                                   <button @click="editMode=true">修改个人信息</button>
                                </div>
                                <div v-if="editMode" class="form-wrapper">
                                    <form class="col-lg-4" action="">
                                        <div>
                                            <label  for="">昵称</label>
                                            <input class="" type="text" v-model="nickname">
                                        </div>
                                        <div>
                                            <label for="" >真实姓名</label>
                                            <input class="" type="text" v-model="username">
                                        </div>
                                        <div class="control">
                                            <button @click="wordIn($event)" class="btn-primary" type="submit">确认</button>
                                            <button @click="wordOut" type="button">取消</button>
                                        </div>
                                    </form>
                                </div>  
                                <div  class="col-lg-4 prop">
                                    <div class="row prop-item">
                                        <div class="col-lg-3">
                                            昵称
                                        </div>
                                        <div class="col-lg-9">
                                            {{nickname}}
                                        </div>
                                    </div>
                                    <div class="row prop-item">
                                        <div class="col-lg-3">
                                            真实姓名
                                        </div>
                                        <div class="col-lg-9">
                                            {{username}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </div>
</template>


<script>
    import navCar from '../../components/navCar.vue';
    import SettingNav from '../../components/settingNav.vue';

    export default {
        components: {
            navCar,
            SettingNav
        },
        data() {
            return {
                editMode: false,
                nickname: 'Asam',
                username: '阿萨姆',
                word: {
                    oldNickname: 'Asam',
                    oldUsername: '阿萨姆'
                }
            }
        },
        methods: {
            wordIn(e) {
                e.preventDefault();
                this.word.oldNickname = this.nickname;
                this.word.oldusername = this.username;
                this.editMode = false;
            },
            wordOut() {
                console.log('this.word.oldNickname:', this.word.oldNickname);
                
                this.nickname = this.word.oldNickname;
                this.username = this.word.oldUsername;
                this.editMode = false;
            },
        }
    }

</script>
