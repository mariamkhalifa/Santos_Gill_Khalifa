<template>
    <main>
        <nav-menu></nav-menu>
        <div class="straign-green-line"></div>
        <p class="heading">Your daily sensor information</p>
        
        <sensors-comp></sensors-comp>

        <div class="graphCon">
            <p class="heading graphHeading">Plant Stats</p>
            <p>You plant stats over time</p>
            <graph-comp></graph-comp>
        </div>
        <div class="weather-footer-section">
            <div class="weather-footer-background">
                <weather-comp v-if="weathers" :weathers="weathers"></weather-comp>
            </div>
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
    .sensorCon{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
    }

    .sensor{
        width: 50vh;
        margin-bottom: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }
    .straign-green-line {
        display: block;
        width: 100%;
        padding: 10px 0px;
        background : #638D21;
    }

    .heading{
        font-size: 22px;
        font-weight: 600;
        color: #638D21;
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .sensor img{
        margin-top: 10px;
        height: 40px;
    }

    .subHeading{
        margin-top: 10px;
        font-size: 16px;
        font-weight: 700;
        color: rgb(197, 197, 197);
    }

    .infoCon{
        margin-top: 20px;
        background: #F7F7F7;
        width: 50vh;
        height: 40vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: rgb(206, 206, 206);
        border-radius: 25px;
    }

    .graphCon{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        height: 60vh;
        border-top: 6px solid #638D21;        
        background-size: cover;
    }

    .graphHeading{
        color: white;
    }

    .graphBox{
        border: 6px solid #638D21;
    }

    .weather-footer-section {
        padding : 30px 0px 0px 0px;
        background : #8b4895;
        width: 100%;
        margin-top : -120px;
    }
    .weather-footer-background {
        background: #fff;
        padding : 0px;
        height: 250px;
    }
    .weather-footer-container {
        width: 650px;
        height: 170px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 50px 50px;
        background: #8b4895;
        position: relative;
        top: -130px;
    }
    .weather-footer-container:after {
        content: "";
        clear: both;
    }
        .weather-footer-container .bottom-line {
            display: none;
        }
        .weather-footer-container .items {
            text-align: center;
            display: block;
            color: #eee;
            width: 50%;
            float: left;
            margin-top: 25px;
        }
        .weather-footer-container .items div {
            display: block;
            margin-bottom: 5px;
        }
        .weather-footer-container .items .temp {
            font-size : 36px;
            font-weight: bolder;
        }
    .weather-container {
        width: 80vw;
        display: block;
        margin: 5px auto;
    }
    .weather-city{
        text-align: center;
        font-size: 45px;
        margin-top: -20px;
        color: #eee;
        font-weight: bold;
    }
    .mobile-current {
        width: 330px;
        height: 250px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 50px 50px;
        background: #8b4895;
        font-size: 95px;
        color: #eee;
        font-weight: bolder;
        text-align: center;
        margin-top : 60px;
        padding : 10px;
        display: none;
    }
        .mobile-weather-city {
            font-size: 55px;
            margin: 0px auto 25px auto;
        }
        .mobile-sub {
            font-size: 15px;
            margin-top: -30px;
        }
        .mobile-temp{
            margin-top: 30px;
            font-size: 120px;
            text-align: center;
        }
        .mobile-current-image {
            display: block;
            margin: 5px auto;
        }
        .col-6-cs {
            width : 50%
        }
    .weather-text {
        width: 650px;
        height: 250px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 50px 50px;
        background: #8b4895;
        font-size: 95px;
        color: #eee;
        font-weight: bolder;
        text-align: center;
    }
            .weather-text div.sub {
                font-size: 15px;
                color: #eee;
            }
        .weather-text .main {
            height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 250px;
            font-size: 140px;
            margin-top: 50px;
            text-align: center;
        }
        .weather-icon {
            height: 250px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .current-image {
            margin : 50px auto 0px auto;
        }

    @media screen and (max-width: 1024px) {
        .weather-text {
            margin-top : 4%;
            width : 650px;
        }
        .weather-footer-container {
            width: 650px;
            top : -150px;
        }
        .weather-footer-section {
            margin-top: 0px;
        }
    }

    @media screen and (max-width: 768px){
        .weather-text {
            display: none;
        }
        .weather-container {
            width: 350px;
        }
        .weather-footer-container {
            max-width: 350px;
            height: auto;
            padding-bottom: 10px;
        }
        .weather-footer-container .items {
            width: 100%;
            padding-bottom: 10px;
        }
        .weather-footer-container .bottom-line {
            display: block;
        }
        .weather-footer-background {
            height: auto;
            background : transparent;
        }
        .weather-footer-section {
            background: transparent;
            margin-top: 25%;
            position : unset;
        }
        .mobile-current {
            display: block;
        }

        /* asdasd */
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

        .infoCon p{
            font-size: 28px;
        }

        .graphCon{
            margin-top: 60px;
            margin-bottom: 60px;
            height: 65vh;
        }

    @media screen  and (min-width: 1024px){
        .heading{
            margin-top: 20px;
            margin-left: 100px;
            margin-right: 100px;
            font-weight: 400;
            font-size: 24px;
        }

        .sensorCon{
            display: grid; 
            grid-template-columns: 1fr 1fr 1fr; 
            gap: 30px 30px;
            margin-left: 100px;
            margin-right: 100px; 
        }

        .sensor img{
            height: 52px;
        }

        .infoCon{
            margin-top: 28px;
            width: 50vh;
            height: 60vh;
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

    }
</style>