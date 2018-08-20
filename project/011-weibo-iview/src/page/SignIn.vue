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
        <Header defRouter="/signIn" />
        <Row class="main">
            <Col span="6" class="container">
            <h2 class="signIn-title tac">
                账号登入
            </h2>
            <Card class="signIn-wrap">
                <Form class="signIn-form" ref="formValidate" :model="formValidate" :rules="ruleValidate">
                    <FormItem prop="account">
                        <Input v-model="formValidate.account" placeholder="手机号、邮箱或用户名">
                            <Icon type="md-person" slot="prefix"/>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input v-model="formValidate.password" type="password" placeholder="密码">
                            <Icon type="md-lock" slot="prefix" />
                        </Input>
                    </FormItem>
                    <FormItem prop="interest">
                        <CheckboxGroup>
                            <Checkbox label="记住我"></Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    <FormItem>
                        <Button type="primary">登入</Button>
                        <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
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
                account: "",
                password: '',

            },
            ruleValidate: {
                account: [
                    {
                        required: true,
                        message: "请输入账号",
                        trigger: "blur"
                    }
                ],
                password: [
                    {
                        required: true,
                        message: "请输入密码",
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
