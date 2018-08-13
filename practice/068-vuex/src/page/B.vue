<template>
    <div>
        <h2>B</h2>
        <button @click="$store.commit('increment')">count++</button>
        <button @click="$store.dispatch('incrementTimers')">setInterval</button>
        <button @click="$store.dispatch('clearIncrementTimers')">clearInterval</button>
        <h2 >count: {{$store.state.count}}</h2>
        <h2 >count*totle: {{$store.getters.totle}}</h2>
    </div>
</template>
    

<script>
    
</script>