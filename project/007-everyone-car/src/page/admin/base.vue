<style scoped></style>

<template>
  <div>
    <AdminNav/>
    <div class="row">
      <div class="col-lg-1">
        <AdminSidebar/>
      </div> 
      <div class="col-lg-11">
         <router-view></router-view>
      </div>
    </div>
    <AdminFooter/>
  </div>
</template>

<script>
    import AdminNav from "../../components/adminNav.vue";
    import AdminSidebar  from "../../components/adminSidebar.vue";
    import AdminFooter from "../../components/adminFooter.vue";

    export default {
      components: {
        AdminNav,
        AdminSidebar,
        AdminFooter
      }
    }
</script>

