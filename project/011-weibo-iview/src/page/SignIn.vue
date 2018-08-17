<style scoped>
.main {
    
    background: #e6ecf0;
    height: 100%;
}

.content {
    background: #fff;
}



</style>

<template>
    <div>
        <Header defRouter="/signIn" />
        <div class="main">
            <div class="container">
                <div class="content">
                    <div class="signIn-wrap">
                    </div>
                </div>
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
        return {
            labelPosition: "right"
        };
    }
};
</script>
