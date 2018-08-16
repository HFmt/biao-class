<style scoped>
.main {
    padding-top: 20px;
}

.content {
    background: #fff;
}


</style>

<template>
    <div>
        <Header defRouter="/signUp"/>
        <Row class="main">
            <Row class="container">
                <div class="content">

                </div>
            </Row>
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
            labelPosition: 'right'
        }
    }
};
</script>
