<template>
    <main>
        <nav-menu></nav-menu>
        <div class="green-line"></div>
        <p class="heading">Your Daily Sensor Information</p>
        
        <sensors-comp></sensors-comp>

        <div class="graphCon">
            <p class="heading graphHeading">Plant Stats</p>
            <graph-comp></graph-comp>
        </div>

        <weather-comp v-if="weathers" :weathers="weathers"></weather-comp>
    </main>
</template>

<script>
import axios from 'axios'
import NavMenu from "../components/navmenu.vue";
import SensorsComp from '../components/sensorsComp.vue';
import GraphComp from '../components/graphComp.vue';
import WeatherComp from '../components/weatherComp'
export default {
    components: {
        NavMenu, 
        SensorsComp,
        GraphComp,
        WeatherComp
    },
    data(){
        return {
            weathers : null
        }
    },
    created(){
        axios.get('http://api.weatherapi.com/v1/forecast.json?key=a953c703a0ff474db37102205222903&q=Toronto&days=10&aqi=no&alerts=no')
            .then(res => {
                this.weathers = res.data
            })
    }
}
</script>

<style lang="scss">
@import './../assets/sass/vars.scss';

    .green-line {
        display: block;
        width: 100%;
        height: 20px;
        background: $magenta;
    }

    .heading{
        font-size: 26px;
        font-weight: 700;
        color: $green;
        margin-bottom: 20px;
        margin-top: 60px;
        text-align: center;
    }

    .subHeading{
        margin-top: 20px;
        font-size: 20px;
        font-weight: 700;
        color: $green;
        margin-bottom: 30px;
    }

    .graphCon {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        //border-top: 1px solid #ccc;
        //padding: 40px;
        margin-top: 80px;
    }

    .graphHeading {
        color: $green;
        margin-bottom: 0px;
    }

        
    @media screen and (min-width: 768px) {
        .heading{
            font-size: 32px;
        }
    }

    @media screen  and (min-width: 1024px){
        .heading{
            margin-top: 100px;
            margin-left: 100px;
            margin-right: 100px;
            font-size: 24px;
        }

        .graphHeading{
            font-size: 28px;
            font-weight: 700;
        }
    }
</style>