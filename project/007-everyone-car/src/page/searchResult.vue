<style>

.filter-list .prop {
    text-align: center;
    font-size: 1.1rem;
}

.filter-list .filter > * {
    padding: 25px;
    vertical-align: middle;
}


.filter-list .filter > * > * {
    margin-right: 15px;
}

.filter-list .filter .range > * {
    font-size: 1.1rem;
}

.price-range {  
   display: inline-block;
   width: 180px;
    font-size: 1.0rem;

}

.price-range input,
.price-range button
 {
    padding: 2px;
    width: 28%;
    margin: -3px 0;
}

</style>

<template>
    <div>
        <NavCar/>
        <div class="container">
            <div class="filter-list">
                <div class="row filter">
                    <div class="col-lg-1 prop">
                        <div>品牌</div>
                    </div>
                    <div class="col-lg-10 range">
                        <a href="#">不限</a>
                        <a href="#">大众</a>
                        <a href="#">福特</a>
                        <a href="#">别克</a>
                        <a href="#">奔驰</a>
                        <a href="#">宝马</a>
                        <a href="#">雪佛兰</a>
                        <a href="#">保时捷</a>
                        <a href="#">玛莎拉蒂</a>
                        <a href="#">起亚</a>
                        <a href="#">丰田</a>
                        <a href="#">奥迪</a>
                        <a href="#">不限</a>
                        <a href="#">不限</a>
                    </div>
                    <div class="col-lg-1 prop">
                        <div class="all-type">全部</div>
                    </div>
                </div>
                <div class="row filter">
                    <div class="col-lg-1 prop">
                        <div>车系</div>
                    </div>
                    <div class="col-lg-10 range">
                        <a href="#">不限</a>
                        <a href="#">大众</a>
                        <a href="#">福特</a>
                        <a href="#">别克</a>
                        <a href="#">奔驰</a>
                        <a href="#">宝马</a>
                        <a href="#">雪佛兰</a>
                        <a href="#">保时捷</a>
                        <a href="#">玛莎拉蒂</a>
                        <a href="#">起亚</a>
                        <a href="#">丰田</a>
                        <a href="#">奥迪</a>
                        <a href="#">不限</a>
                        <a href="#">不限</a>
                        <a href="#">不限</a>
                       
                    </div>
                    <div class="col-lg-1 prop">
                        <div class="all-type">全部</div>
                    </div>
                </div>
                <div class="row filter">
                    <div class="col-lg-1 prop">
                        <div>价格</div>
                    </div>
                    <div class="col-lg-10 range">
                        <a href="#">3万以下</a>
                        <a href="#">3-5万</a>
                        <a href="#">5-7万</a>
                        <a href="#">7-9万</a>
                        <a href="#">9-12万</a>
                        <a href="#">12-16万</a>
                        <a href="#">16-20万</a>
                        <a href="#">20万以上</a>
                        <div class="price-range">
                            <input type="text" name="" id="">-
                            <input type="text" name="" id="">
                            <span>万</span>
                            <button>确认</button>
                        </div>
                    </div>
                    <div class="col-lg-1 prop">
                        <div class="all-type">全部</div>
                    </div>
                </div>
                <div class="row filter">
                    <div class="col-lg-1 prop">
                        <div>更多</div>
                        
                    </div>
                    <div class="col-lg-10 range">
                        <DropDown :list="tmp"  :onSelect="select"/>
                        <DropDown :list="tmp"  :onSelect="select"/>
                        <DropDown :list="tmp"  :onSelect="select"/>
                        <DropDown :list="tmp"  :onSelect="select"/>
                    </div>
                    <div class="col-lg-1">
                        <div class="all-type prop">全部</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
             <div class="vehicle-list">
                    <div class="col-lg-3 row-mrg">                     
                        <div class="">
                            <a href="#" class="row">
                                <img src="//img2.rrcimg.com/o_1cgr90a8e330993051447853708856301.jpg?imageView2/2/interlace/1/w/290/h/192/format/webp" alt="">
                            </a>
                        </div>   
                    </div>     
                    <div class="col-lg-3 row-mrg">                     
                        <div class="">
                            <a href="#" class="row">
                                <img src="//img2.rrcimg.com/o_1cgr90a8e330993051447853708856301.jpg?imageView2/2/interlace/1/w/290/h/192/format/webp" alt="">
                            </a>
                        </div>   
                    </div>     
                    <div class="col-lg-3 row-mrg">                     
                        <div class="">
                            <a href="#" class="row">
                                <img src="//img2.rrcimg.com/o_1cgr90a8e330993051447853708856301.jpg?imageView2/2/interlace/1/w/290/h/192/format/webp" alt="">
                            </a>
                        </div>   
                    </div>     
                    <div class="col-lg-3 row-mrg">                     
                        <div class="">
                            <a href="#" class="row">
                                <img src="//img2.rrcimg.com/o_1cgr90a8e330993051447853708856301.jpg?imageView2/2/interlace/1/w/290/h/192/format/webp" alt="">
                            </a>
                        </div>   
                    </div>     
                </div>
        </div>
    </div>
</template>

<script>
    import '../css/wehicle-list.css'
    import NavCar from "../components/navCar.vue";
    import DropDown from "../components/dropDown.vue";

    export default {
        components: {
            NavCar,
            DropDown
        },
        data() {
            return {
                tmp: [
                    { name : '王花花', value : 1 },
                    { name : '李拴蛋', value : 2 },
                    { name : '赵可爽', value : 3 },
                    { name : '刘备备', value : 4 },
                ]
            }
        },
         methods: {
            select(row) {
                console.log('row:', row);
                
            }
        }
}
</script>

