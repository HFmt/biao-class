<style scoped>

.main-nav {
    margin-top: 15px;
}


.logo {
  vertical-align: top;
  height: 62px;
  width: 150px;
  background: #eee;
}

.main-nav .nav-item, 
.hotline {
  padding: 20px;
  font-size: 1.4rem;
}

.main-nav .nav-item:hover {

  background: #f5f5f5;
}

</style>


<template>
    <div :style="{marginBottom: this.pushDown ? '15px' : '0'}" class="main-nav">
      <div class="container cf">
          <div class="fl">
            <a href="#" class="logo"></a>
            <a href="#" class="nav-item">西安</a>
            <a href="#" class="nav-item">买车</a>
            <a href="#" class="nav-item">卖车</a>
            <a href="#" class="nav-item">分期购车</a>
            <a href="#" class="nav-item">论坛</a>
            <a href="#" class="nav-item">服务保障</a>
          </div>
          <div class="fr">
            <a href="#" class="login nav-item">登入</a>
            <span class="hotline">400-440-4440</span>
          </div>
      </div>
    </div>
    
</template>




<script >

  export default {
    props : {
      pushDown: {
        default: false
      },
      bgColor: {
        default: false
      }
    }
  }


</script>