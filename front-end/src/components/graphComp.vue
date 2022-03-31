<template>
    <div class="lineChartCon">
        <p>Your Plant's Health Everyday</p>
        <p>{{ today }}</p>
        <div><canvas ref="timeChart"></canvas></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lightValues: [],
            lightEntries: [],
            moistValues: [],
            moistEntries: [],
            tempValues: [],
            tempNumbers: [],
            today: '',
            mockLightData: [90, 50, 77, 67, 85, 92, 34, 55],
            mockMoistData: [55, 34, 32, 77, 85, 23, 11, 30],
            mockTemptData: [66, 67, 64, 68, 69, 68, 69, 67],
            time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']
        }
    },

    created() {
        // fetch light valeus
        fetch('http://localhost:3002/light-values')
        .then(res=>res.json())
        .then(data=>{
            //console.log(data);
            this.lightValues = data;
            Array.from(this.lightValues).forEach(value=>{
                this.lightEntries.push(value.entry);
            });
        })
        .catch(err=>console.log(err));

        // fetch moisure values
        fetch('http://localhost:3002/moist-values')
        .then(res=>res.json())
        .then(data=>{
            //console.log(data);
            this.moistValues = data;
            Array.from(this.moistValues).forEach(value=>{
                this.moistEntries.push(value.entry);
            });
        })
        .catch(err=>console.log(err));
    
        // fetch temp valeus
        fetch('http://localhost:3002/temp-values')
        .then(res=>res.json())
        .then(data=>{
            //console.log(data);
            this.tempValues = data;
            Array.from(this.tempValues).forEach(value=>{
                //console.log(value.entry.slice(0,2));
                this.tempNumbers.push(value.entry.slice(0,2));
            });
        })
        .catch(err=>console.log(err));
        
        // set today's date
        this.today = new Date;
    },

    mounted() {
        let timeChart = this.$refs.timeChart.getContext('2d');
        
        new Chart(timeChart, {
            type: 'line',
            data: {
                labels: this.time,
                datasets: [{
                    label: 'Light Sensor Data',
                    data: this.mockLightData,
                    backgroundColor: [ 'transparent'],
                    borderColor: ['orange'],
                    borderWidth: 3
                },
                {
                    label: 'Moisture Sensor Data',
                    data: this.mockMoistData,
                    backgroundColor: [ 'transparent'],
                    borderColor: ['blue'],
                    borderWidth: 3
                },
                {
                    label: 'Temperature Sensor Data F',
                    data: this.mockTemptData,
                    backgroundColor: [ 'transparent'],
                    borderColor: ['red'],
                    borderWidth: 3
                }],
                
            },
            options: {
                elements: {
                    line: {
                        tension: 0
                    }
                }
            }
        });
    }

}
</script>

<style lang="scss">
    .lineChartCon {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        canvas {
            width: 60vw;
        }
    }
    
</style>