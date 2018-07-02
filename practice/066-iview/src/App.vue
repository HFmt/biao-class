<template>
  <div id="app">
    <Layout class="layout">
      <Header>
        <router-link to="/App">App</router-link>
        <router-link to="/Layout">Layout</router-link>
        <router-link to="/Grid">Grid</router-link>
      </Header>
    </Layout>

    <router-view></router-view>
  </div>
</template>

<script>

export default {

}
</script>

<style>

.layout {
  margin-bottom: 10px;
}

.layout a {
  padding: 20px;
}
</style>
