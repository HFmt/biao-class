<template>
    <div>
        <button click="$store.commit('increment')">coount++</button>
        <button></button>
        <h2>{{$store.state.count}}</h2>
    </div>
</template>
