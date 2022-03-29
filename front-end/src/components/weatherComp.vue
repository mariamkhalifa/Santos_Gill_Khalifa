<template>
    <div class="weather-footer-container">
        <div class="items">
            <div class="day">{{ weathers.forecast.forecastday[1].date }}</div>
            <img :src="weathers.forecast.forecastday[1].day.condition.icon" width="80px" alt="" />
            <div class="temp">{{ weathers.forecast.forecastday[1].day.maxtemp_c }}&deg;</div>
        </div>
        <hr class="bottom-line" />
        <div class="items">
            <div class="day">{{ weathers.forecast.forecastday[2].date }}</div>
            <img :src="weathers.forecast.forecastday[2].day.condition.icon" width="80px" alt="" />
            <div class="temp">{{ weathers.forecast.forecastday[2].day.maxtemp_c }}&deg;</div>
        </div>
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
    .rotated {
        transform: rotate(270deg);
    }
</style>