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
                <Form class="signIn-form">
                    <FormItem >
                        <Input placeholder="手机号、邮箱或用户名">
                            <Icon type="md-person" slot="prefix"/>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Input type="password" placeholder="密码">
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
            labelPosition: "right"
        };
    }
};
</script>
