<style scoped>
.main {
    background: #e6ecf0;
    height: 100%;
}

.signIn-wrap {
    margin: 20px;
    padding: 20px;
}

.signIn-form {
    background: #fff;
    border-bottom: 1px solid #ccc;
}
</style>

<template>
    <div>
        <Header defRouter="/signUp" />
        <Row class="main">
            <Col span="9" class="container">
            <h2 class="signIn-title tac">
                账号注册
            </h2>
            <Card class="signIn-wrap">
                <Form class="signIn-form" ref="formValidate" :model="formValidate" :rules="ruleValidate">
                    <FormItem label="用户名" prop="username">
                        <Input v-model="formValidate.username" placeholder="不可包含特殊字符">
                        </Input>
                    </FormItem>
                    <FormItem label="邮箱" prop="mail">
                        <Input v-model="formValidate.mail" placeholder="">
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Row :gutter="14">
                            <Col span="12">
                            <FormItem label="密码" prop="password">
                                <Input v-model="formValidate.password" type="password" placeholder="">
                                </Input>
                            </FormItem>
                            </Col>
                            <Col span="12">
                            <FormItem label="确认密码" prop="confirmPassword">
                                <Input v-model="formValidate.confirmPassword" type="password" placeholder="">
                                </Input>
                            </FormItem>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem>
                        <Button type="primary">注册</Button>
                        <Button @click="handleReset('formValidate')"  style="margin-left: 8px">重置</Button>
                    </FormItem>

                </Form>
            </Card>
            </Col>
        </Row>
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
            formValidate: {
                username: "",
                mail: "",
                password: '',
                confirmPassword: ''

            },
            ruleValidate: {
                username: [
                    {
                        required: true,
                        message: "用户名为必填项",
                        trigger: "blur"
                    }
                ],
                mail: [
                    {
                        required: true,
                        message: "邮箱为必填项",
                        trigger: "blur"
                    },
                    {
                        type: "email",
                        message: "邮箱格式错误",
                        trigger: "blur"
                    }
                ],
                password: [
                    {
                        required: true,
                        message: "密码为必填项",
                        trigger: "blur"
                    }
                ],
                confirmPassword: [
                    {
                        required: true,
                        message: "请确认密码",
                        trigger: "blur"
                    }
                ],
            }
        };
    }, 
    methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
};
</script>
