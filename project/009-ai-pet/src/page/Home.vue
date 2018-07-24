<style>
.slide {
    background: rgba(0, 0, 0, 0.1);
}

.new-arrivals {
    text-align: center;
}

.grids .gd {
    padding: 10px;
    border: 1px solid #000;
}

.grids .gd .md-bottom {
    margin-top: 35px;
}
</style>


<template>
    <div>
        <Nav defname="home"/>
        <div class="main">
            <div class="slide">
                <div class="container">
                    <img src="http://placekitten.com/1920/1080" alt="">
                </div>
            </div>
            <div class="content">
                <div class="new-arrivals">
                    <div class="container">
                        <div class="title">
                            <h2>新上架</h2>
                            <p>快买啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
                        </div>
                        <div class="row grids">
                            <div class="col-lg-4">
                                <div class="gd">
                                    <img src="http://placekitten.com/350/456" alt="">
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="gd row">
                                    <div>
                                        <img src="http://placekitten.com/350/211" alt="">
                                    </div>
                                    <div class="md-bottom">
                                        <img src="http://placekitten.com/350/211" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="gd">
                                    <img src="http://placekitten.com/350/456" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Nav from "../components/Nav";

export default {
    components: {
        Nav
    }
};
</script>
