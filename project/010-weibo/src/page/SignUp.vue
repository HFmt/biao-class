<style scoped>
.main {
    padding-top: 20px;
}

.content {
    background: #fff;
}

.content .signIn-wrap {
    padding: 40px 80px;
}
</style>

<template>
    <div>
        <Header defRouter="/signUp"/>
        <div class="main">
            <div class="container">
                <div class="content">
                    <el-row>
                        <el-col :span="12">
                            <div class="signIn-wrap">
                                <div class="title tac">
                                    <h2>手机注册</h2>
                                </div>
                                <el-form :label-position="labelPosition" label-width="80px">
                                    <el-form-item label="号码" >
                                        <el-input placeholder="手机邮箱或用户名"></el-input>
                                    </el-form-item>
                                    <el-form-item label="密码">
                                        <el-input type="password"></el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="primary">立即登入</el-button>
                                        <el-button>重置</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            labelPosition: 'right'
        }
    }
};
</script>
