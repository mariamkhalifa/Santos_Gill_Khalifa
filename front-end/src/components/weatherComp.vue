<template>
    <div class="sensorCon">
            <!-- <div id="light" class="sensor">
                <img src="/static/sunicon.svg" alt="lightIcon">
                <p class="subHeading">Light</p>
                <div class="infoCon" id="lightSensor">
                    <canvas ref="lightChart"></canvas>
                    <p></p>
                    <p></p>
                </div>
            </div>
            <div id="moisture" class="sensor">
                <img src="/static/moistureicon.svg" alt="mositure icon">
                <p class="subHeading">Moisture</p>
                <div class="infoCon" id="moistureSensor">
                    <canvas ref="moistChart"></canvas>
                    <p></p>
                    <p></p>
                </div>
            </div>
            <div id="temprature" class="sensor">
                <img src="/static/tempicon.svg" alt="temprature icon">
                <p class="subHeading">Temprature</p>
                <div class="infoCon" id="tempSensor">
                    <canvas ref="tempChart" class="rotated"></canvas>
                    <p></p>
                    <p></p>
                </div>
            </div> -->
        </div>

</template>

<script>
export default {
    created() {
    },

    data() {
        return {
        }
    }
}
</script>

<style lang="scss">
    .rotated {
        transform: rotate(270deg);
    }
</style>