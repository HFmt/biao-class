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
            <Col span="9" class="container">
            <h2 class="signIn-title tac">
                账号注册
            </h2>
            <Card class="signIn-wrap">
                <Form class="signIn-form" ref="formValidate" :model="formValidate" :rules="ruleValidate">
                    <FormItem label="用户名" prop="username">
                        <Input v-model="formValidate.username" type="password" placeholder="">
                        </Input>
                    </FormItem>
                    <FormItem label="邮箱" prop="mail">
                        <Input v-model="formValidate.mail" placeholder="">
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Row :gutter="14">
                            <Col span="12">
                            <FormItem label="密码">
                                <Input type="password" placeholder="">
                                </Input>
                            </FormItem>
                            </Col>
                            <Col span="12">
                            <FormItem label="确认密码">
                                <Input type="password" placeholder="">
                                </Input>
                            </FormItem>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem>
                        <Button type="primary">注册</Button>
                        <Button style="margin-left: 8px">重置</Button>
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
            labelPosition: "right",
            formValidate: {
                name: "",
                mail: "",
                city: "",
                gender: "",
                interest: [],
                date: "",
                time: "",
                desc: ""
            },
            ruleValidate: {
                username: [
                    {
                        required: false,
                        message: "邮箱为必填项",
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
                        message: "Incorrect email format",
                        trigger: "blur"
                    }
                ]
            }
        };
    }
};
</script>
