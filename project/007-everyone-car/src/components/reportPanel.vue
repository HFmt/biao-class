<style scoped>
table {
    width: 100%;
    border: 1px solid #000;
    vertical-align: middle;
}

tr {
    text-align: center;
}

th,
td {
    border: 1px solid #000;
}



.report-item {
    padding: 10px;
    background: #4caf50;
}
</style>

<template>
    <div>
        <table>
            <tbody >
                <tr>
                    <th>
                        <h2>{{title}}</h2>
                    </th>
                </tr>
                <tr class="col-lg-4" v-for="(item, index) in modelList" :key="index" v-if="(conf = structure[index]) && conf.cat == cat ">
                        <td class="col-lg-2" v-if="item">T</td>
                        <td class="col-lg-2" v-else>F</td>
                        <td class="col-lg-10">{{conf.display_name}}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
export default {
    props: ["modelList", "title", "structure", "cat"]
};
</script>

