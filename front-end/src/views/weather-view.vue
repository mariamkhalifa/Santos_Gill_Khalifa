<template>
    <main>
        <nav-menu></nav-menu>
        <p class="heading">Your daily weather forecast</p>
        
        <weather-comp></weather-comp>
    </main>
</template>

<script>
import NavMenu from "../components/navmenu";
import WeatherComp from '../components/weatherComp'
export default {
    components: {NavMenu, WeatherComp}
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