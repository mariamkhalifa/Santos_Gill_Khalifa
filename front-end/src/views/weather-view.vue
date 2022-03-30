<template>
    <div>
        <nav-menu></nav-menu>
        <div class="straign-green-line"></div>
        <div class="weather-container">
            <div class="row">
                <div class="col-12">
                    <div class="weather-text">
                        <div class="row">
                            <div class="col-7">
                                <img :src="weathers.current.condition.icon" width="80px" alt="" class="current-image">
                                <h2 class="weather-city">Toronto, Canada</h2>
                                <div class="sub">Today</div>
                            </div>
                            <div class="col-5">
                                <div class="main">{{ weathers.current.temp_c }}&deg;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mobile-current">
                <div class="row">
                    <div class="col-12">
                        <img :src="weathers.current.condition.icon" width="80px" alt="" class="mobile-current-image">
                        <h2 class="mobile-weather-city">Toronto, Canada</h2>
                        <div class="mobile-sub">Today</div>
                    </div>
                    <div class="col-12">
                        <div class="mobile-temp">
                            {{ weathers.current.temp_c }}&deg;
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="weather-footer-section">
            <div class="weather-footer-background">
                <weather-comp v-if="weathers" :weathers="weathers"></weather-comp>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import NavMenu from "../components/navmenu";
import WeatherComp from '../components/weatherComp'
export default {
    components: {NavMenu, WeatherComp},
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
/* html {
	min-height: 100vh;
	background: #fff url('../assets/images/main-bg.jpeg') top center no-repeat;
	background-size: cover;
} */
    .sensorCon{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
    }
    .straign-green-line {
        display: block;
        width: 100%;
        padding: 10px 0px;
        background : #638D21;
    }
    .weather-container {
        width: 80vw;
        display: block;
        margin: 5px auto;
    }
    .weather-city{
        text-align: center;
        font-size: 35px;
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
            font-size: 35px;
            margin: 0px auto 25px auto;
        }
        .mobile-sub {
            font-size: 15px;
            margin-top: -30px;
        }
        .mobile-temp{
            margin-top: 60px;
            font-size: 80px;
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
        margin-top : 10%;
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
            font-size: 105px;
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
            margin : 30px auto 0px auto;
        }

    .weather-footer-section {
        padding : 10px 0px;
        background : #8b4895;
        position: absolute;
        bottom: 0px;
        width: 100%;
    }
    .weather-footer-background {
        background : #8b4895 url('../assets/images/weather-footer-bg.jpg') top center no-repeat;
        background-size: cover;
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
        top: -90px;
    }
    .weather-footer-container:after {
        content: "";
        clear: both;
        display: table;
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

    @media screen and (max-width: 1024px) {
        .weather-text {
            margin-top : 4%;
            width : 650px;
        }
        .weather-footer-container {
            width: 650px;
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
    }

    @media screen and (min-width: 768px){
        .heading{
            font-size: 32px;
        }

        .sensor{
            margin-bottom: 10px;
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


    }

    }
</style>