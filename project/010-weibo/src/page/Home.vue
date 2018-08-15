<style scoped>

.main {
    margin-top: 20px;
}

.main-middle {
    padding: 0 10px;
}

.home-published,
.card-item {
    padding: 10px 0;
}

.home-published {
    padding-right: 20px;
    background: #e8f5fd;
    display: flex;
    align-items: center;
}

.published-thumbnail,
.user-thumbnail {
    padding-right: 10px;
}

.published-thumbnail {
    font-size: 2rem;
}

.user-thumbnail {
    font-size: 2.4rem;
}

.card-item {
    background: #fff;
}

/* element样式重置 */

.box-card {
    border: 0;
}



</style>

<template>
    <div>
        <Header defRouter="/" />
        <div class="main">
            <div class="container">
                <el-row :gutter="20">
                    <el-col :span="6" class="home-right">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>卡片名称</span>
                                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="12" class="home-middle">
                        <el-row class="home-published">
                            <el-col :span="3" class="tar">
                                <span class="published-thumbnail">
                                    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                                </span>
                            </el-col>
                            <el-col :span="21">
                                <el-input placeholder="发表新事物" class="published-input">
                                    <i slot="suffix" class="el-input__icon el-icon-picture cp"></i>
                                </el-input>
                            </el-col>
                        </el-row>
                        <el-row class="card-item">
                            <el-col :span="3" class="tar">
                                <span class="user-thumbnail">
                                    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                                </span>
                            </el-col>
                            <el-col :span="21">
                                <el-card class="box-card" shadow="never">
                                    <div slot="header" class="clearfix test">
                                        <span>卡片名称</span>
                                        <el-button style="float: right; padding: 3px 0" type="text">
                                            <i class="el-icon-arrow-down el-icon--right"></i>
                                        </el-button>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="6" class="home-right">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>卡片名称</span>
                                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                            </div>
                        </el-card>
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
