<style scoped>
.main {
    padding-top: 20px;
    background: #e6ecf0;
    height: 100%;
}

.content {
    background: #fff;
}

.content .signIn-wrap {
    padding: 40px 80px;
    margin-left: 10%;
}

.signIn-wrap .title {
    padding: 20px;

}

.signIn-wrap .title h2 {
    width: 40px;
    display: inline-block;
}

.signIn-wrap .signIn-form {
    padding: 20px;
}

</style>

<template>
    <div>
        <Header defRouter="/signIn" />
        <div class="main">
            <div class="container">
                <div class="content">
                    <div class="signIn-wrap">
                        <el-row :gutter="40">
                            <el-col :span="6" class="title tac">
                                <h2>登入微博</h2>
                            </el-col>
                            <el-col :span="10">
                                <el-form :label-position="labelPosition" class="signIn-form">
                                    <el-form-item label="账号">
                                        <el-input placeholder="手机、邮箱或用户名"></el-input>
                                    </el-form-item>
                                    <el-form-item label="密码">
                                        <el-input type="password"></el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="primary">立即登入</el-button>
                                        <el-button>重置</el-button>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>
                    </div>
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
            labelPosition: "right"
        };
    }
};
</script>
