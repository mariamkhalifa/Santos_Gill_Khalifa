<template>
    <div class="footer">
        <div id="weatherCon">
            <h3 class="weather-city">Toronto</h3>
            <div class="weather">
                <img :src="weathers.current.condition.icon" class="current-image" alt="weather icon">
                <p class="currentTemp">{{ weathers.current.temp_f }}&deg; F</p>
            </div>
        </div>
        <div id="bg"></div>
        <p class="copyright">&copy; Plantrack 2022. All Rights Reserved.</p>
    </div>
</template>

<script>
export default {
    props : [
        'weathers'
    ]
}
</script>

<style lang="scss">
@import './../assets/sass/vars.scss';

    .footer {
        margin-top: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        flex-direction: column;
        position: relative;
    }

    #weatherCon {
        border: 10px solid $magenta;
        background-color: #fff;
        width: 300px;
        height: 130px;
        border-radius: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        top: 70px;
    }

    .weather-city{
        color: $magenta;
        margin-top: 30px;
        font-size: 22px;
        font-weight: 700;
    }

    .weather {
        display: flex;
        align-items: center;
    }

    .currentTemp {
        color: $magenta;
        font-size: 30px;
        margin-top: 15px;
        text-align: center;
    }

    .current-image{
        width: 70px;
    }

    #bg {
        background-color: $magenta;
        height: 100px;
        width: 100%;
    }

    .copyright {
        color: #fff;
        background-color: $magenta;
        width: 100%;
        text-align: center;
        padding: 80px 0 20px;
        font-size: 14px;
    }

    
</style>