<template>
    <div>
        <h2>A</h2>
        <h2 @click="$store.commit('increment')">{{$store.state.count}}</h2>
    </div>
</template>
    

<script>
    
</script>