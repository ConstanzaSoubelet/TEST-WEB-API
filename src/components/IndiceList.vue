<template>   
    <div >
        <h1>Ticker On Demand</h1>
        <div v-for="currency in list" class="currency"> {{ currency.description }} </div>
        <table >
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.getIndicesTODResult}}</td>
                <td>{{item.datasourceIndices}}</td>
                <td>{{item.Nombre}}</td>               
                <td></td>               
            </tr>
        </table>
    </div>    
</template>

<script>

import axios from 'axios';

export default {
    name: "IndiceList",
    data (){
        return  {list:undefined}
    },
    mounted() {
        axios.get("https://startup.bolsadesantiago.com/explorer/consulta/swagger.json")
        .then((res)=>{
            this.list=res.data;
            console.log(res.data)})      
}}

</script>