<template>
    <main>
        <nav-menu></nav-menu>
        <div class="straign-green-line"></div>
        <p class="heading">Your daily sensor information</p>
        
        <sensors-comp></sensors-comp>

        <div class="graphCon">
            <p class="heading graphHeading">Plant Stats</p>
            <graph-comp></graph-comp>
        </div>
        <div class="weatherCon">
            <weather-comp v-if="weathers" :weathers="weathers"></weather-comp>
        </div>
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
    .straign-green-line {
        display: block;
        width: 100%;
        padding: 8px 0px;
        background : #638D21;
    }

    .heading{
        font-size: 22px;
        font-weight: 600;
        color: #638D21;
        margin-bottom: 20px;
        margin-top: 40px;
        text-align: center;
    }

    .subHeading{
        margin-top: 10px;
        font-size: 16px;
        font-weight: 700;
        color: rgb(197, 197, 197);
        margin-bottom: 10px;
    }

    .graphCon{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-top: 6px solid #638D21;        
        background-size: cover;
    }

    .graphHeading{
        color: #638D21;
        margin-bottom: 0px;
    }

    .graphBox{
        border: 6px solid #638D21;
    }

        
    @media screen and (min-width: 768px){
        .heading{
            font-size: 32px;
        }

        .sensor{
            margin-bottom: 10px;
        }

        .sensor img{
            margin-top: 26px;
            height: 84px;
        }

        .subHeading{
            margin-top: 16px;
            font-size: 28px;
            font-weight: 700;
        }

        .infoCon{
            margin-top: 28px;
            width: 60vh;
            height: 50vh;
        }

        .graphCon{
            margin-top: 60px;
            margin-bottom: 60px;
            height: 65vh;
        }
        .weather-text {
            display: none;
        }
    }

    @media screen  and (min-width: 1024px){
        .heading{
            margin-top: 20px;
            margin-left: 100px;
            margin-right: 100px;
            font-weight: 400;
            font-size: 24px;
        }

        .sensor img{
            height: 52px;
        }
        
        .subHeading{
            font-size: 24px;
            font-weight: 400;
        }

        .graphCon{
            height: 80vh;
            margin-bottom: 0px;
        }

        .graphHeading{
            font-size: 28px;
            font-weight: 700;
        }

        .graphBox{
            width: 70vh;
        }
    }
</style>