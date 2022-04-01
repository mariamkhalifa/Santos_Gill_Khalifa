<template>
    <div class="weather-footer-container">
            <div class="row">
                <div class="col-12">
                    <div class="weather-text">
                        <div class="row">
                            <div class="col-7">
                                <img :src="weathers.current.condition.icon" width="80px" alt="" class="current-image">
                                <h2 class="weather-city">Today</h2>
                                <div class="sub">&nbsp;</div>
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
                        <h2 class="mobile-weather-city">Today</h2>
                        <div class="mobile-sub">&nbsp;</div>
                    </div>
                    <div class="col-12">
                        <div class="mobile-temp">
                            {{ weathers.current.temp_c }}&deg;
                        </div>
                    </div>
                </div>
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