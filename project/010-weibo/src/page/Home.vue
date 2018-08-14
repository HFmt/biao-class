<style scoped>
.main {
    margin-top: 20px;
}
</style>

<template>
    <div>
        <Header/>
        <div class="main">
            <div class="container">
                <Row :gutter="16">
                    <Col span="7">
                    <div class="main-left">
                        <Card>
                            <p slot="title">
                                <Icon type="ios-film-outline"></Icon>
                                Classic film
                            </p>
                            <a href="#" slot="extra">
                                <Icon type="ios-loop-strong"></Icon>
                                Change
                            </a>
                        </Card>
                    </div>
                    </Col>
                    <Col span="10">
                        <div class="main-middle">
                            <Input v-model="value4" icon="md-photos" placeholder="Enter something..."  />
                        </div>
                    </Col>
                    <Col span="7">
                    <div>col-7</div>
                    </Col>
                </Row>
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
    }
};
</script>
