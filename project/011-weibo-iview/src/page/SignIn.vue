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
                <Form @submit.native.prevent="handleSubmit('formValidate')" class="signIn-form" ref="formValidate" :model="formValidate" :rules="ruleValidate">
                    <div v-if="accountSignIn">
                        <FormItem prop="account">
                            <Input v-model="formValidate.account" placeholder="手机号码、邮箱或用户名">
                            <Icon type="md-person" slot="prefix" />
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input v-model="formValidate.password" type="password" placeholder="密码">
                            <Icon type="md-lock" slot="prefix" />
                            </Input>
                        </FormItem>
                    </div>
                    <div v-else>
                        <FormItem prop="phoneCode">
                            <Input v-model="formValidate.phoneCode" placeholder="手机号码">
                            <Icon type="md-phone-portrait" slot="prefix" />
                            </Input>
                        </FormItem>
                        <FormItem prop="securityCode">
                            <Row>
                                <Col span="16">
                                <Input v-model="formValidate.securityCode" placeholder="手机验证码">
                                <Icon type="md-key" slot="prefix" />
                                </Input>
                                </Col>
                                <Col span="8">
                                <Button type="primary" long>获取手机验证码</Button>
                                </Col>
                            </Row>
                        </FormItem>
                    </div>
                    <FormItem prop="interest">
                        <span @click="accountSignIn=!accountSignIn" class="cp cl-hv">手机验证码登入</span>
                    </FormItem>
                    <FormItem>
                        <Button html-type="submit" type="primary">登入</Button>
                        <Button @click.native="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                    </FormItem>
                </Form>
            </Card>
            </Col>
        </Row>
        <Footer/>
    </div>
</template>

<script>
import api from "../lib/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import session from "../lib/session";

export default {
    components: {
        Header,
        Footer
    },
    data() {
        const validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("Please enter your password"));
            } else {
                if (this.formCustom.passwdCheck !== "") {
                    // 对第二个密码框单独验证
                    this.$refs.formCustom.validateField("passwdCheck");
                }
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("Please enter your password again"));
            } else if (value !== this.formCustom.passwd) {
                callback(new Error("The two input passwords do not match!"));
            } else {
                callback();
            }
        };
        return {
            accountSignIn: true,
            formValidate: {
                account: "",
                password: "",
                phoneCode: "",
                securityCode: ""
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
                ]
            }
        };
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    let account, password;
                    account = this.formValidate.account;
                    password = this.formValidate.password;

                    api
                        .api("user/read", {
                            where: {
                                or: [
                                    ["username", "=", account],
                                    ["phone", "=", account],
                                    ["mail", "=", account]
                                ]
                            }
                        })
                        .then(res => {
                            let item;
                            if (
                                !res.data || !(item = res.data[0]) ||
                                item.password !== password
                            ) {
                                this.$Message.error("账号密码错误");
                                return;
                            }
                            session.signIn(item);
                            this.$router.push("/");
                            this.$Message.success("登入成功");
                        });
                } 
            });
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        }
    }
};
</script>
