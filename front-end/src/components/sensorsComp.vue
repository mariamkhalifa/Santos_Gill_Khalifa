<template>
    <div class="sensorCon">
            <div id="light" class="sensor">
                <img src="/static/sunicon.svg" alt="lightIcon">
                <p class="subHeading">Light</p>
                <div class="infoCon" id="lightSensor">
                    <canvas ref="lightChart"></canvas>
                    <p>{{ lightSensor }}</p>
                    <p>{{ lightMessage }}</p>
                </div>
            </div>
            <div id="moisture" class="sensor">
                <img src="/static/moistureicon.svg" alt="mositure icon">
                <p class="subHeading">Moisture</p>
                <div class="infoCon" id="moistureSensor">
                    <canvas ref="moistChart"></canvas>
                    <p>{{ moistSensor }}</p>
                    <p>{{ moistMessage }}</p>
                </div>
            </div>
            <div id="temprature" class="sensor">
                <img src="/static/tempicon.svg" alt="temprature icon">
                <p class="subHeading">Temprature</p>
                <div class="infoCon" id="tempSensor">
                    <canvas ref="tempChart"></canvas>
                    <p>{{ tempSensor }}</p>
                    <p>{{ tempMessage }}</p>
                </div>
            </div>
        </div>

</template>

<script>
export default {
    created() {
        var config = {
        apiKey: "AIzaSyB1RlWE4vCmCN8HHThtccQ6igKQZo5bWtM",
        authDomain: "pi-hms.firebaseapp.com",
        databaseURL: "https://pi-hms.firebaseio.com",
        projectId: "pi-hms",
        storageBucket: "pi-hms.appspot.com",
        messagingSenderId: "737726017750"
        };

        firebase.initializeApp(config);

        let sensorData = firebase.database().ref('sensors');

        sensorData.on('value', (snapshot)=>{
            console.log(Math.round(snapshot.val().moisture.value));

            this.lightSensor = Math.round(snapshot.val().light.value);
            this.moistSensor = Math.round(snapshot.val().moisture.value);
            this.tempSensor = snapshot.val().temp.value;
        });
    },

    beforeUpdate() {
        // light chart
        let lightChart = this.$refs.lightChart.getContext('2d');

        new Chart(lightChart, {
            type: 'doughnut',
            data: {
                labels: ['light', 'max'],
                datasets: [{
                    label: ['sensor', 'max'],
                    data: [ this.lightSensor , 900-this.lightSensor ],
                    backgroundColor: ['#97469B', '#ccc']
                }],
            },
            options: {
                legend: {
                    display: false
                },
                label: {
                    enabled:false
                }
            }
        });

        //moisture chart
        let moistChart = this.$refs.moistChart.getContext('2d');

        new Chart(moistChart, {
            type: 'doughnut',
            data: {
                labels: ['moisture', 'max'],
                datasets: [{
                    label: ['sensor', 'max'],
                    data: [ this.moistSensor , 1000-this.moistSensor ],
                    backgroundColor: ['#97469B', '#ccc']
                }],
            },
            options: {
                legend: {
                    display: false
                },
                label: {
                    enabled:false
                }
            }
        });

        // temprature chart
        let tempChart = this.$refs.tempChart.getContext('2d');

        new Chart(tempChart, {
            type: 'doughnut',
            data: {
                labels: ['temprature', 'max'],
                datasets: [{
                    label: ['sensor', 'max'],
                    data: [ this.tempNum, 200-this.tempNum ],
                    backgroundColor: ['#97469B', '#ccc']
                }],
            },
            options: {
                legend: {
                    display: false
                },
                labels: {
                    enabled:false
                }
            }
        });

        // light sensor messages
        if(this.lightSensor < 40) {
            this.lightMessage = 'Too dim. Your plant needs more light.';
        } else if(this.lightSensor < 300) {
            this.lightMessage = 'Just right. Your plant is happy';
        } else {
            this.lightMessage = 'Too bright. Your plant needs more shade.';
        };

        // moist sensor messages
        if(this.moistSensor < 40) {
            this.moistMessage = 'Too dry. Your plant needs more water.';
        } else if(this.moistSensor < 500) {
            this.moistMessage = 'Just right. Your plant is happy';
        } else {
            this.moistMessage = 'Too moist. Your plant needs less water.';
        };

        // temp sensor messages
        if(this.tempNum < 60) {
            this.tempMessage = 'Too cold. Move your plant somehwere warmer.';
        } else if(this.tempNum < 90) {
            this.tempMessage = 'Just right. Your plant is happy';
        } else {
            this.tempMessage = 'Too hot. Move your plant somewhere cooler.';
        };
    },

    updated() {
        setTimeout(() => {
            fetch(`http://localhost:3002/light-value/${this.lightSensor}`, {
                method: 'POST'
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
            .catch(err=>console.log(err));

            fetch(`http://localhost:3002/moist-value/${this.moistSensor}`, {
                method: 'POST'
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
            .catch(err=>console.log(err));

            fetch(`http://localhost:3002/temp-value/${this.tempSensor}`, {
                method: 'POST'
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
            .catch(err=>console.log(err));
        }, 600000);
        
    },

    computed: {
        tempNum() {
            return this.tempSensor.slice(0,2);
        }
    },


    data() {
        return {
            lightSensor: 0,
            moistSensor: 0,
            tempSensor: 0,
            lightMessage: '',
            moistMessage: '',
            tempMessage: ''
        }
    }
}
</script>

<style lang="scss">
    
</style>