<template>
    <div class="weather-footer-container">
            
        <img :src="weathers.current.condition.icon" class="current-image">
        <h2 class="weather-city">Today</h2>
        <div class="sub">&nbsp;</div>
        <div class="main">{{ weathers.current.temp_c }}&deg;</div>

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

    .weather-footer-container {
        margin-top: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        flex-direction: column;
        background: #8b4895;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .weather-footer-container:after {
        content: "";
        clear: both;
    }

    .weather-city{
        color:white;
    }

    .main{
        color: white;
    }

    .current-image{
        height: 35px;
    }

    @media screen  and (min-width: 768px){
        .weather-footer-container{
            height: 200px;
        }

        .current-image{
            height: 200px;
        }

        .weather-city{
            font-size: 44px;
        }

        .main{
            margin-top: 10px;
            font-size: 44px;
        }


    }

    @media screen  and (min-width: 1024px){
        .weather-footer-container{
            flex-direction: row;
            height: 20vh;
        }

        .weather-city{
            font-size: 32px;
            padding: 15px;
        }

        .current-image{
            height: 96px;
        }
    }
</style>