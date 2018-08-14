<style scoped>
.main {
    margin-top: 20px;
}

.main-middle {
    padding: 0 10px;
}
</style>

<template>
    <div>
        <Header/>
        <div class="main">
            <div class="container">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                    <span>卡片名称</span>
                                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                                </div>
                            </el-card>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <div class="grid-content bg-purple">
                            <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                    <span>卡片名称</span>
                                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                                </div>
                            </el-card>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                    <span>卡片名称</span>
                                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                                </div>
                            </el-card>
                        </div>
                    </el-col>
                </el-row>
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
        return {};
    },
    methods: {}
};
</script>
