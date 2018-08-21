<style scoped>
.main {
    background: #e6ecf0;
    height: 100%;
}

.signIn-title {
    font-size: 1.5rem;
}

.signIn-wrap {
    margin: 20px;
    padding: 20px;
}

.signIn-form {
    background: #fff;
    border-bottom: 1px solid #ccc;
}

.signUp-choose {
    margin-bottom: 35px;
    font-size: 1rem;
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
                <Row class="signUp-choose">
                    <Col span="12">
                    <span @click="signUpType='phone'" class="cp cl-hv">手机号码注册</span>
                    </Col>
                    <Col span="12">
                    <span @click="signUpType='mail'" class="cp cl-hv">邮箱注册</span>
                    </Col>
                </Row>
                <Form @submit.native.prevent="handleSubmit('formValidate')" class="signIn-form" ref="formValidate" :model="formValidate" :rules="ruleValidate" label-position="top">
                    <FormItem label="用户名" prop="username">
                        <Input v-model="formValidate.username" placeholder="不可包含特殊字符">
                        <Icon type="md-person" slot="prefix" />
                        </Input>
                    </FormItem>
                    <div v-if="signUpType == 'phone'" class="signUp-phone">
                        <FormItem label="手机号码" prop="phone">
                            <Input v-model="formValidate.phone" placeholder="">
                            <Icon type="md-phone-portrait" slot="prefix" />
                            </Input>
                        </FormItem>
                        <FormItem label="手机验证码" prop="securityCode">
                            <Row :gutter="24">
                                <Col span="15">
                                <Input v-model="formValidate.securityCode" placeholder="手机验证码">
                                <Icon type="md-key" slot="prefix" />
                                </Input>
                                </Col>
                                <Col span="9">
                                <Button v-if="count.phone" type="primary" long>{{count.phone}}后重新获取</Button>
                                <Button v-else @click.native="getPhoneVerificationCode()" html-type="button" type="primary" long>获取手机验证码</Button>
                                </Col>
                            </Row>
                        </FormItem>
                    </div>
                    <FormItem v-if="signUpType == 'mail'" label="邮箱" prop="mail">
                        <Input v-model="formValidate.mail" placeholder="">
                        <Icon type="md-mail" slot="prefix" />
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Row :gutter="14">
                            <Col span="12">
                            <FormItem label="密码" prop="password">
                                <Input v-model="formValidate.password" type="password" placeholder="">
                                <Icon type="ios-lock-outline" slot="prefix" />
                                <Icon type="md-eye" slot="suffix" class="cp" />
                                </Input>
                            </FormItem>
                            </Col>
                            <Col span="12">
                            <FormItem label="确认密码" prop="passwordCheck">
                                <Input v-model="formValidate.passwordCheck" type="password" placeholder="">
                                <Icon type="ios-lock" slot="prefix" />
                                <Icon type="md-eye" slot="suffix" class="cp" />
                                </Input>
                            </FormItem>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem>
                        <Button html-type="submit" type="primary">注册</Button>
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
import api from "../lib/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import session from "../lib/session";
import GetVerificationCode from "../mixins/GetVerificationCode";

export default {
    components: {
        Header,
        Footer
    },
    mixins: [GetVerificationCode],
    data() {
        const validatePass = (rule, value, callback) => {
            if (this.formValidate.passwordCheck !== "") {
                // 对第二个密码框单独验证
                this.$refs.formValidate.validateField("passwordCheck");
            }
            callback();
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value !== this.formValidate.password) {
                callback(new Error("两次输入的密码不一致"));
            } else {
                callback();
            }
        };
        return {
            signUpType: "phone",
            formCustom: {},
            formValidate: {
                username: "",
                mail: "",
                phone: "",
                password: "",
                passwordCheck: "",
                securityCode: ""
            },
            ruleValidate: {
                username: [
                    {
                        required: true,
                        message: "请输入用户名",
                        trigger: "blur"
                    }
                ],
                mail: [
                    {
                        required: true,
                        message: "请输入邮箱地址",
                        trigger: "blur"
                    },
                    {
                        type: "email",
                        message: "邮箱格式错误",
                        trigger: "blur"
                    }
                ],
                phone: [
                    {
                        required: true,
                        message: "请输入手机号码",
                        trigger: "blur"
                    }
                ],
                securityCode: [
                    {
                        required: true,
                        message: "请输入手机验证码",
                        trigger: "blur"
                    }
                ],
                password: [
                    {
                        required: true,
                        message: "请设置密码",
                        trigger: "blur"
                    },
                    { validator: validatePass, trigger: "blur" }
                ],
                passwordCheck: [
                    {
                        required: true,
                        message: "请确认密码",
                        trigger: "blur"
                    },
                    { validator: validatePassCheck, trigger: "blur" }
                ]
            }
        };
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    !this.formValidate.username &&
                        this.$set(
                            this.formValidate,
                            "username",
                            this.formValidate[this.signUpType]
                        );
                    api.api("user/create", this.formValidate).then(res => {
                        this.$router.push("/signIn");
                        this.$Message.success("注册成功");
                    });
                } else {
                    this.$Message.error("注册失败");
                }
            });
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        }
    }
};
</script>
