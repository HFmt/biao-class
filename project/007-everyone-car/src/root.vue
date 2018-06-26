<template>
  <div id="root">
    <!-- <home/> -->
    <detail/>
  </div>
</template>

<script>
import home from './page/home.vue';
import detail from './page/detail.vue';

export default {
  name: 'root',
  components: {
    home,detail
  }
};
</script>

<style>

</style>
