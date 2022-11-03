
<template>   
    <div>
        <h1>Ticker On Demand</h1>
        <div v-for="currency in list" class="currency"> {{ currency.description }} </div> <br>
        <table >
            <a href="#">Indice 1 </a>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.Nombre}}</td>                          
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.Valor}}</td>                          
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.Mayor}}</td>                          
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.Menor}}</td>                          
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.Medio}}</td>                          
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.Variacion}}</td>                          
            </tr>  


            <a href="#">Indice 2 </a> 
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.Name}}</td>                                                   
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.Worth}}</td>                                                   
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.Higher}}</td>                                                   
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.Less}}</td>                                                   
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.Medium}}</td>                                                   
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.Variation}}</td>                                                   
            </tr>                       
        </table>
    </div>    
</template>

<script>
import axios from 'axios';
//import Chart from 'chart.js/auto'

export default {
    name: "IndiceList",
    data (){
        return  {list: [
            
            {Nombre: "Indice: SPCLXIGPA",
            Valor: "Valor: 27956.26",
            Mayor: "Mayor: 28024.99",
            Menor: "Menor: 27456.84",
            Medio: "Medio: 0",
            Variacion: "Variacion: -0.05" },

            {Name: "Indice: SP IPSA",
            Worth: "Valor: 5168.15",
            Higher: "Mayor: 5194.663915591",
            Less: "Menor: 5115.35",
            Medium: "Medio: 0",
            Variation: "Variacion: -0.51"}, 
        ],       
    }
    },
    mounted() {
        axios.get("https://startup.bolsadesantiago.com/api/consulta/TickerOndemand/getIndices?access_token=ADB7E0D67F4143AF8DCF6C9B8084E02E")
        .then((res)=>{
            this.list=res.data;
            console.log(res.data)})      
    /*
            const cTx = document.getElementById('myChart');
            const myChart = new Chart( cTx, {
                type:'bar',
                data: {
                    labels: ['Valor', 'Mayor', 'Menor', 'Medio', 'Variacion'],
                    datasets: [{
                        label: 'indice SPCLXIGPA',
                        data: [],
                        backgroundColor: [
                            'rgba(255,99,132,0.2)',
                            'rgba(54,162,235, 0.2)',
                            'rgba(255,206,86,0.2)',
                            'rgba(75,192,192,0.2)',
                            'rgba(153,102,255,0.2)',
                        ],
                        borderColor: [
                            'rgba(255,99,132,0.2)',
                            'rgba(54,162,235, 0.2)',
                            'rgba(255,206,86,0.2)',
                            'rgba(75,192,192,0.2)',
                            'rgba(153,102,255,0.2)',

                        ],
                        borderWidth:1
                        
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            }); myChart;
            */
}}


</script>

