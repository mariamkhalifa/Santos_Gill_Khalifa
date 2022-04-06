<template>
    <div class="sensorCon">
            <div id="light" class="sensor">
                <img src="/static/sunicon.svg" alt="lightIcon">
                <p class="subHeading">Light</p>
                <div class="infoCon" id="lightSensor">
                    <p class="sensorMessage">{{ lightMessage }}</p>
                    <canvas class="chart" ref="lightChart"></canvas>
                    <p class="sensorData">{{ lightSensor }}</p>
                </div>
            </div>
            <div id="moisture" class="sensor">
                <img src="/static/moistureicon.svg" alt="mositure icon">
                <p class="subHeading">Moisture</p>
                <div class="infoCon" id="moistureSensor">
                    <p class="sensorMessage">{{ moistMessage }}</p>
                    <canvas class="chart" ref="moistChart"></canvas>
                    <p class="sensorData">{{ moistSensor }}</p>
                </div>
            </div>
            <div id="temprature" class="sensor">
                <img src="/static/tempicon.svg" alt="temprature icon">
                <p class="subHeading">Temprature</p>
                <div class="infoCon" id="tempSensor">
                    <p class="sensorMessage">{{ tempMessage }}</p>
                    <!-- <canvas class="chart" ref="tempChart"></canvas> -->
                    <div id="thermometer">
                        <div id="thermBg" ref="thermBg"></div>
                    </div>
                    <p class="sensorData">{{ tempSensor }}</p>
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
                    enabled: false
                }
            }
        });

        // temprature chart
        // let tempChart = this.$refs.tempChart.getContext('2d');

        // new Chart(tempChart, {
        //     type: 'doughnut',
        //     data: {
        //         labels: ['temprature', 'max'],
        //         datasets: [{
        //             label: ['sensor', 'max'],
        //             data: [ this.tempNum, 200-this.tempNum ],
        //             backgroundColor: ['#97469B', '#ccc']
        //         }],
        //     },
        //     options: {
        //         legend: {
        //             display: false
        //         },
        //         labels: {
        //             enabled: false
        //         }
        //     }
        // });

        // thermometer
        let thermBg = this.$refs.thermBg;
        thermBg.style.height = `${this.tempNum}px`;

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
@import './../assets/sass/vars.scss';

     .sensorCon{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 60px;
        gap: 10%;
    }

    .sensor {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .sensor img{
        margin-top: 10px;
        width: 80px;
    }

    .infoCon{
        box-shadow: 2px 2px 8px rgba($color: #000000, $alpha: .1);
        width: 300px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 20px;
        padding: 40px 20px;
        margin-bottom: 30px;
    }

    .chart {
        width: 100%;
    }

    .sensorData{
        font-size: 30px;
        margin-top: 40px;
        color: $magenta;
        font-weight: 700;
    }

    .sensorMessage{
        font-size: 18px;
        margin: 0 0 30px 0;
        color: $magenta;
    }

    #thermometer {
        height: 138px;
        width: 50px;
        border: 4px solid #ccc;
        position: relative;
        border-radius: 28px;

        #thermBg {
            background-color: $magenta;
            width: 100%;
            position: absolute;
            bottom: 0;
            border-bottom-right-radius: 25px;
            border-bottom-left-radius: 25px;
        }
    }

    
</style>

